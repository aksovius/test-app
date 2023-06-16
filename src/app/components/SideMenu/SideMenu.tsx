'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import styles from './sidemenu.module.css'

const links = [
    {
        path: '/users',
        name: '사용자 목록'
    },
    {
        path: '/images',
        name: '이미지 목록'
    },
    {
        path: '/canvas',
        name: '캔버스'
    }
]

export default function SideMenu() {
    
    const [open, setOpen] = useState(true);
     // close on click outside
    const pathname = usePathname();

    const menu = useRef<HTMLDivElement>(null);

  
    // const __handleClickOutside = (event: { target: any; }) => {
    //     console.log(event.target.id)
    //     if(!menu.current) return;
    //     else if(event.target.id === "side-menu-button") return
    //     else if(!menu.current.contains(event.target) ) setOpen(false);
    // };

    // useEffect(() => {
    //     console.log('useEffect')
    //     window.addEventListener("mousedown", __handleClickOutside);
    //     return () => {
    //         window.removeEventListener("mousedown", __handleClickOutside);
    //     }
    // })
    const getLinkStyleBasedOnPath = (path: string) => {
        return pathname === path ? `${styles.link} ${styles.selected}` : styles.link;
    }
  return (
    <>{open && <div ref={menu} className={styles.sideMenu}>
    {links.map((link, index) => <Link key={index} href={link.path} className={getLinkStyleBasedOnPath(link.path)}> {link.name} </Link>)}
</div>}</>
  )
}
