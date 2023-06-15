"use client";
import styled from 'styled-components'

export const MenuButton = styled.button`
    background-color: transparent;
    border: none;
    width: 50px;
    height: 50px;
    align-items: center;
    cursor: pointer;
    font-size: 3rem;
    color: white;
    display: block;

    @media (min-width: 769px) { 
        display: none;
    }
`