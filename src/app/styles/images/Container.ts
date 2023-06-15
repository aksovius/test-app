'client-side';
import styled from 'styled-components'

export const Container = styled.div`
    column-count: 3;
    column-gap: 0;
    padding: auto;
    overflow-y: auto;
    overflow-x: hidden;
    height: auto;
    width: 70%;

    &::-webkit-scrollbar {
        display: none;
    }
 
`