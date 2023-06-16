'use client'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu';
import './globals.css'
import { Inter } from 'next/font/google'
import  {useState} from 'react'
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
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Header isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen}/>
          <SideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen}/>
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
