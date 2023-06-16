import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Header />
          <SideMenu />
        </nav>
        <main>
        <div className='container'>
          {children}
        </div>
        </main>
       </body>
    </html>
  )
}
