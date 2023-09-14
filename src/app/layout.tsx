import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Provider from '@/components/provider'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className="mx-auto w-100 min-h-full">{children}</div>
        </Provider>
      </body>
    </html>
  )
}
