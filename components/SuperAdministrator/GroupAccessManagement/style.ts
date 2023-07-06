import styled from "styled-components";


export const Container = styled.div`
  background-color:${({ theme }) => theme.colors.headersideBarBgColor};
  border-radius: 12px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Title = styled.h1`
  color:${({ theme }) => theme.colors.pageTextColor};
  font-size: 24px;
`;
export const ModuleTitlesWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const ModuleTitle = styled.h2`
  color:${({ theme }) => theme.colors.pageTextColor};
  font-size: 20px;
  &.permission{
    margin: 0px 105px;
  }
`;
export const ModuleContainer = styled.div`

`
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
  background-color: ${({ theme }) => theme.colors.headersideBarBgColor};
  border-radius: 19px;
  margin: 30px 10px;
  color: ${({ theme }) => theme.colors.pageTextColor};
  &.nextui-table-cell{
    color: ${({ theme }) => theme.colors.pageTextColor} !important;
  }
  `
export const Status = styled.div`
  &.active{
    display: inline-block;
    text-transform: uppercase;
    margin: 0px 2px;
    font-size: 10px;
    padding: 8px;
    font-weight: 700;
    border-radius: 14px;
    letter-spacing: 0.6px;
    line-height: 1;
    box-shadow: rgba(0, 0, 0, 0.05) 1px 2;
    background: #528b6a;
    color: ${({ theme }) => theme.colors.pageTextColor};;
}
&.In-active{
  display: inline-block;
    text-transform: uppercase;
    margin: 0px 2px;
    font-size: 10px;
    padding: 8px;
    font-weight: 700;
    border-radius: 14px;
    letter-spacing: 0.6px;
    line-height: 1;
    box-shadow: rgba(0, 0, 0, 0.05) 1px 2;
    background: #fdd8e5;
    color: #f31260;
}
  `



