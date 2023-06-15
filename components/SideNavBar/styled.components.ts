import styled, { css } from "styled-components";

export const Container = styled.div`
  background:${({ theme }) => theme.colors.darkblue3};
  display: flex;
  flex-direction: column;
  width: 16rem;
  min-height: 100vh;
  background-size: cover;
  transition: 0.5s;

  &.active {
    width: 21%;
    transition: 0.5s;
  }
  &.In-active {
    transition: 0.5s;
    width: 15%;
  }
`;
export const SideBar = styled.div`
      padding: 10px;
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  padding: 2px 6px 18px 6px;
  border-bottom: 1px solid #363636c7;
`;
export const SideIconWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ffffff1a;
  padding: 10px 15px;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
  :hover {
    cursor: pointer;
  }
`;
export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition: 0.5s;
  ${({ theme }) =>
    theme.isLTR
      ? css`
          &.active {
            transform: rotate(-90deg);
            transition: 0.5s;
          }
          &.In-active {
            transform: rotate(90deg);
            transition: 0.5s;
          }
        `
      : css`
          &.active {
            transform: rotate(90deg);
            transition: 0.5s;
          }
          &.In-active {
            transform: rotate(-90deg);
            transition: 0.5s;
          }
        `}
`;

export const AccordionContainer = styled.div`
  margin-bottom: 100px;
  & .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded{
    border-bottom: 1px solid #ffffff1a;
  }
  & .MuiPaper-root {
    background-color: ${({ theme }) => theme.colors.darkblue3};
    box-shadow: none;
    margin: 0;
    &.Mui-expanded {
      margin: 0;
    }
    & .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded {
      min-height: 48px;
      background-color: ${({ theme }) => theme.colors.green};
      border-radius: 8px;
    }
    & .MuiAccordionSummary-content {
      margin: 12px 0px;
    }
  }
  & .MuiCollapse-root {
    & .MuiAccordionDetails-root {
      padding: 12px;
    }
  }
`;
export const PageWrapper = styled.div`
  border-radius: 6px;
  padding-left: 22px;
  a {
    text-decoration: none;
    color: #9f9f9f !important;
    text-decoration: none;
    color: #fff;
    display: flex;
  }
`;
export const PageLinkWrapper = styled.div`
  >a{
    font-size:14px;
   padding: 8px;
  }
  :hover{
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 6px;
  }
`;
export const ProfileContainer = styled.div`
border-bottom: 1px solid #363636c7;
margin-bottom:15px ;
`;
export const SettingIconWrapper = styled.div`
 display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const SettingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: rgba(36, 105, 92, 0.1);
`;
export const ProfileImage = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  > img {
    border-radius: 100%;
    border: 10px solid rgba(36, 105, 92, 0.1);
  }
`;
export const Name = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
  color: ${({ theme }) => theme.colors.green};
  align-items: center;
`;

export const Company = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
  color: #fff;
  align-items: center;
`;
