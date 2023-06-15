'client-side';
import { MenuButton } from '@/app/styles/header/menuButton';
import { StyledHeader } from '@/app/styles/header/header';
import { useState } from 'react';
export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    
    return <StyledHeader  id='header' >
        <MenuButton id='side-menu-button'  onClick={() => setIsOpen(!isOpen)} >{isOpen ? "x" : "="}</MenuButton>
        <h1>Header</h1>
        
    </StyledHeader>
}