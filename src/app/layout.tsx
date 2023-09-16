'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Appbar from './appbar/appbar'
import { RecoilRoot } from 'recoil'
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from 'react-hot-toast'
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto w-100 min-h-full">
          <RecoilRoot>
            <Toaster />
            <Appbar />
            {children}
          </RecoilRoot>
        </div>
      </body>
    </html>
  )
}
