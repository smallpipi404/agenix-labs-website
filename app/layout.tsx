import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agenix Labs LTD - Software Subscription Distribution',
  description: 'Premium software subscription distribution services for businesses worldwide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
