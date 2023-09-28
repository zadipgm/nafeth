import { styled } from "styled-components";
export const Container = styled.div<{ bcolor?: string; color?: string }>`

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media(min-width:600px){
  flex-direction: column;
  width:100%;
}
 @media(min-width:1024px){
  flex-direction: column;
  width: 23%;
}
`
export const Chart = styled.div<{ bcolor?: string; color?: string }>`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 8px;
color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
  padding:0px 10px;
  width: 100%;

`;
export const Title = styled.h2`
   
   font-size: 20px;
    color: #1281C4;
`
