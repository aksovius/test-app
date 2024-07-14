import Link from 'next/link';
import { SideMenuProps } from '../SideMenu/SideMenuTypes';
import styles from './header.module.css';

export default function Header({ isOpen, setIsOpen }: SideMenuProps) {
    return <div data-testid='header' className={styles.header} id='header'>
        <button id='side-menu-button' className={styles.button} onClick={() => setIsOpen(!isOpen)} >{isOpen ? "\u{0078}" : "\u{2630}"}</button>
        <Link href='/'><h1>Test app</h1></Link>
    </div>
}