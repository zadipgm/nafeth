import { styled } from "styled-components";

export const LineCharWrapper = styled.div<{ bcolor: string, color: string }>`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 8px;
color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
  padding:0px 10px;
    @media(max-width:600px){
 overflow: auto;
  width:100%;
  margin-bottom: 20px;
}
   @media(min-width:600px){
 overflow: auto;
  width:100%;
}
`