import './globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'

const source_sans_3 = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Holadok',
  description: 'Find the latest health information with Holadok. Get guides, articles, and tips on healthy lifestyle, nutrition, exercise, mental health, and more. Take care of your health with trusted sources from Holadok.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={source_sans_3.className}>{children}</body>
    </html>
  )
}
