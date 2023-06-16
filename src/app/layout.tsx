'use client'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu';
import './globals.css'
import { Inter } from 'next/font/google'
import  {useEffect, useState} from 'react'
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
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(window.innerWidth >= 768)
  useEffect(() => {
    const  handleResize = () => {
      window.innerWidth < 768 ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true)
    } 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
