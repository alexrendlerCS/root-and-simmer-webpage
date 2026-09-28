import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cinzel, Great_Vibes } from 'next/font/google'
import './globals.css'

// Closest web matches to the approved logo/business card lettering:
// Cinzel for the Trajan-style "ROOT" capitals, Great Vibes for the "Simmer"/signature script.
// To use the exact card fonts, swap these for next/font/local with the licensed font files.
const rootFont = Cinzel({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-root' })
const scriptFont = Great_Vibes({ subsets: ['latin'], weight: '400', variable: '--font-script' })

export const metadata: Metadata = {
  title: 'Root & Simmer Hospitality Co. | Lincolnville, St. Augustine',
  description: 'Hospitality Rooted in Community. Root & Simmer Hospitality Co. connects guests to the history, people, places and living community of the historic Lincolnville Corridor.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${rootFont.variable} ${scriptFont.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
