# Contact Form Email Setup Guide

## Overview
The contact form at `/#contact` now sends emails to `contact@agenixlabs.co.uk` using Resend email service.

## Implementation Details

### 1. API Route
- **Location**: `app/api/contact/route.ts`
- **Endpoint**: `POST /api/contact`
- **Features**:
  - Request validation (required fields, email format, message length)
  - Email sending via Resend API
  - Comprehensive error handling
  - Structured logging
  - HTML and plain text email formats

### 2. Frontend Integration
- **Location**: `components/sections/Contact.tsx`
- **Features**:
  - Form submission with loading state
  - Success/error message display with animations
  - Form reset after successful submission
  - Disabled state during submission
  - Network error handling

### 3. Email Configuration
- **Recipient**: `contact@agenixlabs.co.uk`
- **Default Sender**: `onboarding@resend.dev` (Resend testing address)
- **Reply-To**: User's email address (for easy replies)

## Setup Instructions

### Step 1: Get Resend API Key
1. Visit [https://resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month)
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Copy the generated key

### Step 2: Configure Environment Variable
1. Open `.env.local` file in the project root
2. Replace the placeholder with your actual API key:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Save the file
4. Restart the development server

### Step 3: Test the Form
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Navigate to `http://localhost:3000/#contact`
3. Fill out the form with test data
4. Click **Send Message**
5. You should see a success message
6. Check `contact@agenixlabs.co.uk` inbox for the email

## Email Format

### Subject Line
```
New Contact Form Submission from [Name]
```

### Email Content
- **Name**: Sender's name
- **Email**: Sender's email (clickable mailto link)
- **Company**: Company name (optional)
- **Message**: Full message content
- **Timestamp**: Submission time in UK timezone

## API Response Examples

### Success Response (200)
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will get back to you soon!",
  "emailId": "abc123..."
}
```

### Error Response (400 - Validation)
```json
{
  "error": "Missing required fields: name, email, and message are required"
}
```

### Error Response (500 - Server)
```json
{
  "error": "Failed to send message. Please try again later or contact us directly."
}
```

## Testing Without API Key

If you want to test the form without configuring Resend:

1. The API will return a 500 error with message:
   ```
   Email service is not configured. Please contact the administrator.
   ```
2. The frontend will display this error to the user
3. Check browser console for detailed error logs

## Troubleshooting

### Issue: "Email service is not configured"
**Solution**: Make sure `RESEND_API_KEY` is set in `.env.local` and restart the server.

### Issue: "Authentication failed"
**Solution**: Verify your API key is correct and hasn't expired. Generate a new one if needed.

### Issue: Form submits but no email received
**Solution**: 
1. Check server logs for error messages
2. Verify the recipient email in `app/api/contact/route.ts`
3. Check your Resend dashboard for delivery status

### Issue: "Too many requests"
**Solution**: You've hit the rate limit. Wait a few minutes or upgrade your Resend plan.

## Production Considerations

### Custom Domain (Recommended)
For production, configure a custom sending domain:
1. Add your domain in Resend dashboard
2. Add DNS records (SPF, DKIM, DMARC)
3. Update `FROM_EMAIL` in `route.ts` to use your domain:
   ```typescript
   const FROM_EMAIL = 'noreply@agenixlabs.co.uk';
   ```

### Rate Limiting
Consider adding rate limiting to prevent abuse:
- Use middleware or API route guards
- Implement CAPTCHA for public forms
- Track submissions by IP address

### Monitoring
- Set up error alerts in Resend dashboard
- Monitor email delivery rates
- Log failed submissions for review

## Security Notes

- ✅ API key is stored in environment variables (not in code)
- ✅ `.env.local` is excluded from git via `.gitignore`
- ✅ Input validation prevents malformed requests
- ✅ Email addresses are validated with regex
- ⚠️ Consider adding CAPTCHA to prevent spam
- ⚠️ Consider rate limiting for production use

## Files Modified

1. **Created**: `app/api/contact/route.ts` - API route handler
2. **Modified**: `components/sections/Contact.tsx` - Frontend integration
3. **Created**: `.env.local` - Environment configuration
4. **Created**: `.env.example` - Configuration template

## Next Steps

1. **Configure Resend API Key** (required for functionality)
2. **Test form submission** with real data
3. **Verify email delivery** to contact@agenixlabs.co.uk
4. Consider adding CAPTCHA for spam prevention
5. Set up custom domain for professional sender address
6. Configure email monitoring and alerts
