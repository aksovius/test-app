'client-side';
import styles from './header.module.css';
import { useState } from 'react';
export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    
    return <div className={styles.header} id='header'>
        <button id='side-menu-button' className={styles.button} onClick={() => setIsOpen(!isOpen)} >{isOpen ? "x" : "="}</button>
        <h1>Header</h1>
        
    </div>
}