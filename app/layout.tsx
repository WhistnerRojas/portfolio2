import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Whistner Rojas - Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="emerald">
      <body>{children}</body>
    </html>
  )
}
