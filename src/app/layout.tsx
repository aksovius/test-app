import Header from './components/Header'
import SideMenu from './components/SideMenu/SideMenu';
import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StyledComponentsRegistry>
        <Header />
        <SideMenu />
        <div className='container'>
          {children}
        </div>
        </StyledComponentsRegistry>
       </body>
    </html>
  )
}
