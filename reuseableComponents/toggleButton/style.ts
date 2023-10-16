import { styled } from "styled-components";
export const Wrapper = styled.div`
flex-grow: 1;
flex-basis: 250px;
`
export const Title = styled.div<{ titlewidth: string }>`
font-size: 15px;
    margin-bottom: 5px;
    font-weight: 400;
    color: #9b9b9b;
    display: inline-block;
    max-width: 100%;
`
export const Content = styled.div<{ contentwidth: string }>`

`
export const Info = styled.div<{ color: string }>`
 
`