
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Navigation from '@/components/navigation'

export const metadata = {
  title: 'Rental Utility Analysis',
  description: 'Rental Utility Analysis - A tool to compare rental providers'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  )
}
