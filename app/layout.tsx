
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import {Toaster} from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Voting App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme='dark'>
          {children}
         <Toaster/>
      </ThemeProvider>
      </body>
    </html>
  )
}
