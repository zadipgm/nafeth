import { styled } from "styled-components";
export const Wrapper = styled.div`
flex-grow: 1;
flex-basis: 250px;
&.tajeer-send{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin: 20px;
}
`
export const Title = styled.div<{ titlewidth: string }>`
font-size: 15px;
    margin-bottom: 5px;
    font-weight: 400;
    color: #9b9b9b;
    display: inline-block;
    max-width: 100%;
    &.tajeer-send{
        color: #494747;
    }
`
export const Content = styled.div<{ contentwidth: string }>`

`
export const Info = styled.div<{ color: string }>`
 
`