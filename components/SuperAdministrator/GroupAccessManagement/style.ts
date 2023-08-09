import styled from "styled-components";


export const Container = styled.div<{ bcolor: string; color: string }>`
  /* background-color: ${({ bcolor }) => bcolor}; */
  color: ${({ color }) => color};
  border-radius: 12px;
  padding: 15px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
`;



export const ModulePages = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 15px;
`
export const ModuleWrapper = styled.div``
export const ModuleNameWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 12px;
`
export const SwitchContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;

`
export const SwitchWrapper = styled.div`
width: 70%;
margin: 0 auto;
`
export const IconWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

`
export const ModuleName = styled.h3`
color: ${({ theme }) => theme.colors.lightBlue};
  font-size: 18px;
      height: 9px;

`;
export const ModuleSubpagesNameWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
 /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
 border-radius: 12px;
 padding: 0px 15px;
`
export const ModuleSubPagename = styled.div`
width: 50%;
margin: 0px 35px;
`


export const ModuleSubpagesName = styled.div`
padding: 0px 35px;
`;
export const ModulePermission = styled.div`

`;
export const DataTableWrapper = styled.div`
  border-radius: 19px;
  color: ${({ theme }) => theme.colors.pageTextColor};
 
  `




