'use client';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import styles from './sidemenu.module.css'
import { SideMenuProps } from "./SideMenuTypes";
import useOutsideClick, { ConditionFunction } from "@/app/hooks/useOutsideClick";

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
    
    const pathname = usePathname();
    const menu = useRef<HTMLDivElement>(null);

   // close on click outside
    const conditions: ConditionFunction[] = [
        (event: MouseEvent) => window.innerWidth >= 768,
        (event: MouseEvent) => !menu.current,
        (event: MouseEvent) => (event.target as HTMLElement).id === "side-menu-button"
    ];
    useOutsideClick(menu, () => setIsOpen(false), conditions )
    
    const getLinkStyleBasedOnPath = (path: string) => {
        return pathname === path ? `${styles.link} ${styles.selected}` : styles.link;
    }
  return (
    <>{isOpen && <div ref={menu} className={styles.sideMenu} id='sidemenu'>
    {links.map((link, index) => <Link key={index} href={link.path} className={getLinkStyleBasedOnPath(link.path)}> {link.name} </Link>)}
</div>}</>
  )
}
