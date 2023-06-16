import Navigation from './components/Navigation';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'df',
  description: 'k',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
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
