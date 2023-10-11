import { styled } from "styled-components";

export const LineCharWrapper = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 8px;
color: ${({ color }) => color};
  background-color: white;
  padding:10px;
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
div{
  svg{
    direction: ltr;
  }
}
`