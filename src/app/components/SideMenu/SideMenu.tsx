'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import styles from './sidemenu.module.css'
import { SideMenuProps } from "@/app/types/SideMenu";

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

export default function SideMenu({isOpen, setIsOpen}: SideMenuProps) {
    
     // close on click outside
    const pathname = usePathname();

    const menu = useRef<HTMLDivElement>(null);

  
    const __handleClickOutside = (event: { target: any; }) => {
        if (window.innerWidth >= 768) return;
        if(!menu.current) return;
        else if(event.target.id === "side-menu-button") return
        else if(!menu.current.contains(event.target) ) setIsOpen(false);
    };
    useEffect(() => {
        window.addEventListener("mousedown", __handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", __handleClickOutside);
        }
    })
    const getLinkStyleBasedOnPath = (path: string) => {
        return pathname === path ? `${styles.link} ${styles.selected}` : styles.link;
    }
  return (
    <>{isOpen && <div ref={menu} className={styles.sideMenu} id='sidemenu'>
    {links.map((link, index) => <Link key={index} href={link.path} className={getLinkStyleBasedOnPath(link.path)}> {link.name} </Link>)}
</div>}</>
  )
}
