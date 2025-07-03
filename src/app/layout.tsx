import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'

 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Indardek Limited',
  description: 'General Supplies • Borehole Drilling • Road Construction • Meat Export',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' flex flex-col min-h-screen'}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
