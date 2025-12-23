import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const RECIPIENT_EMAIL = 'contact@agenixlabs.co.uk';
const FROM_EMAIL = 'onboarding@resend.dev'; // Resend test domain (verified by default)

// Request body type definition
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

/**
 * POST /api/contact
 * Handles contact form submissions and sends email via Resend
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('[ERROR] RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;">
            <strong>Name:</strong> ${name}
          </p>
          <p style="margin: 10px 0;">
            <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
          </p>
          ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
        </div>

        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #555;">
            ${message}
          </p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
          <p>This email was sent from the Agenix Labs website contact form.</p>
          <p>Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
        </div>
      </div>
    `;

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}

Message:
${message}

---
This email was sent from the Agenix Labs website contact form.
Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
    `.trim();

    // Send email via Resend
    console.log('[INFO] Sending email to:', RECIPIENT_EMAIL);
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
      replyTo: email, // Allow direct reply to the sender
    });

    console.log('[INFO] Email sent successfully:', data);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon!',
        emailId: data.id,
      },
      { status: 200 }
    );

  } catch (error: any) {
    // Log error details
    console.error('[ERROR] Failed to send email:', error);

    // Handle specific Resend API errors
    if (error?.statusCode === 401) {
      return NextResponse.json(
        { error: 'Email service authentication failed. Please contact the administrator.' },
        { status: 500 }
      );
    }

    if (error?.statusCode === 429) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Generic error response
    return NextResponse.json(
      {
        error: 'Failed to send message. Please try again later or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Returns API status and configuration info (for debugging)
 */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      endpoint: '/api/contact',
      methods: ['POST'],
      configured: !!process.env.RESEND_API_KEY,
      recipient: RECIPIENT_EMAIL,
    },
    { status: 200 }
  );
}
