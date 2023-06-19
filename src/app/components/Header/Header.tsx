import { SideMenuProps } from '../SideMenu/SideMenuTypes';
import styles from './header.module.css';

export default function Header({ isOpen, setIsOpen }: SideMenuProps) {
    return <div className={styles.header} id='header'>
        <button id='side-menu-button' className={styles.button} onClick={() => setIsOpen(!isOpen)} >{isOpen ? "\u{0078}" : "\u{2630}"}</button>
        <h1>Kakao Brain 사전과제</h1>
    </div>
}