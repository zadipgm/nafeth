import { isTheme } from "@/models/istheme";
import styled from "styled-components";
export const LayoutContainer = styled.div`
 display: flex;
`
export const Wrapper = styled.div`
display:flex ;
flex-direction:column ;
justify-content: space-between;
width: 100%;
overflow-x: hidden;
background-color: ${({ theme }) => theme.colors.pagebgcolor};
color: ${({ theme }) => theme.colors.pageTextColor};
`
export const Children = styled.div`
padding:20px;
`
export const CommonContainer = styled.div<{ istheme: isTheme }>`
  padding: 15px;
  background-color: ${({ istheme }) => istheme.bcolor};
  color: ${({ istheme }) => istheme.color};
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`