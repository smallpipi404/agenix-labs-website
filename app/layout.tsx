import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agenix Labs LTD - Software Subscription Distribution',
  description: 'Premium software subscription distribution services for businesses worldwide. Trusted partner for seamless software licensing and subscription management.',
  keywords: ['software distribution', 'subscription management', 'licensing', 'business software', 'Agenix Labs'],
  authors: [{ name: 'Agenix Labs LTD' }],
  creator: 'Agenix Labs LTD',
  metadataBase: new URL('https://agenixlabs.com'),
  openGraph: {
    title: 'Agenix Labs LTD - Software Subscription Distribution',
    description: 'Premium software subscription distribution services for businesses worldwide',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agenix Labs LTD',
    description: 'Premium software subscription distribution services',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
