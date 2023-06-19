import { SideMenuProps } from '../SideMenu/SideMenuTypes';
import styles from './header.module.css';

export default function Header({isOpen, setIsOpen}: SideMenuProps) {

   

    return <div className={styles.header} id='header'>
        <button id='side-menu-button' className={styles.button} onClick={() => setIsOpen(!isOpen)} >{isOpen ? "\u{1F5D9}" : "\u{2630}"}</button>
        <h1>Header</h1>
        
    </div>
}