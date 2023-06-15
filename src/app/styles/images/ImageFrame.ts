"use client";
import styled from 'styled-components'
type ImageProps = {
  height: number,
  width: number
}
export const ImageFrame = styled.div<ImageProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: 0.5em;

  @media (min-width: 992px) {
    width: ${props => props.width * 1.5}px;
    height: ${props => props.height * 1.5}px;
    padding: 0.6em;
  }

  @media (min-width: 1200px) {
    width: ${props => props.width * 2}px;
    height: ${props => props.height * 2}px;
    padding: 0.75em;
  }

  @media (min-width: 1600px) {
    width: ${props => props.width * 3}px;
    height: ${props => props.height * 3}px;
    padding: 1em;
  }
`
