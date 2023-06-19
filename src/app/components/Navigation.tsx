'use client'
import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'

export default function Navigation() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  useEffect(() => {
    window.innerWidth > 768 ? setIsSideMenuOpen(true) : setIsSideMenuOpen(false)
  }, []);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 768 ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true)
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav>
      <Header isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
      <SideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
    </nav>
  )
}
