'use client';
import { SideMenuProps } from '@/app/types/SideMenu';
import styles from './header.module.css';
import { useEffect } from 'react';


export default function Header({isOpen, setIsOpen}: SideMenuProps) {

   

    return <div className={styles.header} id='header'>
        <button id='side-menu-button' className={styles.button} onClick={() => setIsOpen(!isOpen)} >{isOpen ? "x" : "="}</button>
        <h1>Header</h1>
        
    </div>
}