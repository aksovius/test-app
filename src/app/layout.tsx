import Navigation from './components/Navigation';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test app',
  description: 'Test app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="next.svg" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>
          <div className='container'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
