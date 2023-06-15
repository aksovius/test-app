'client-side';
import styled from 'styled-components'

export const StyledHeader = styled.header`
    position: fixed;  
    top: 0;           
    left: 0;        
    height: 50px;     
    width: 100%;     
    background-color: rgba(0,0,0,0.9); 
    z-index: 1000;   
    overflow-x: hidden; 
    transition: 0.5s; 
    display: flex;
    align-items: center;
    color: white
`