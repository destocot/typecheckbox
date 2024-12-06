import type { Metadata } from 'next'
import { Inter_Tight as Inter } from 'next/font/google'
import './globals.css'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import env from '@/env/client'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    template: '%s | Next Starter',
    default: 'Next Starter',
  },
  description: 'Next.js starter with shadcn/ui',
  openGraph: {
    images: ['opengraph-image.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>'
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
