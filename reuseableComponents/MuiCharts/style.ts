import { styled } from "styled-components";
export const Container = styled.div<{ bcolor?: string; color?: string }>`

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

`
export const Chart = styled.div<{ bcolor?: string; color?: string }>`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 8px;
color: ${({ color }) => color};
  background-color: white;
  padding:10px ;
 flex-grow: 1;
flex-basis: 400px;

h4{
  color: #252422;
    font-weight: 300;
    margin: 8px;
    font-size: 1.5em;
}
.bottom{
  border-top: 1px solid ${({ theme }) => theme.colors.borderBottomColor};
  padding-top: 10px;
  font-size: 15px;
}
`;
export const Title = styled.h2`
   
   font-size: 20px;
    color: #1281C4;
`
