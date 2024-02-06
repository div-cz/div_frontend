import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Navigation } from '@/app/ui/Navigation'
import { FooterSection } from '@/app/ui/FooterSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DIV.cz',
  description: 'Databáze filmů a seriálů.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <FooterSection />
      </body>
    </html>
  )
}
