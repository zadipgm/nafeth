import styled, { css } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.headerbgcolor};
  display: flex;
  border-right: 1px solid
    ${({ theme }) => theme.colors.headerSiderBarBorderColor};
  flex-direction: column;
  width: 290px;
  min-height: 100vh;
  background-size: cover;
  transition: 0.5s;
  @media (max-width: 600px) {
    display: none;
  }
  @media (min-width: 600px) {
    display: block;
  }
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
  /* padding: 10px; */
`;

export const SideIconWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.headerSiderBarBorderColor};
  padding: 15px 21px;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.pageTextColor};
    font-weight: 600;
    font-family: "Cairo", sans-serif !important;
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
            transform: rotate(90deg);
            transition: 0.5s;
          }
          &.In-active {
            transform: rotate(-90deg);
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
  & .MuiPaper-root {
    background-color: ${({ theme }) => theme.colors.headerbgcolor};
    box-shadow: none;
    margin: 0;
    &.Mui-expanded {
      margin: 0;
    }
    & .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded {
      min-height: 48px;
      background-color: ${({ theme }) => theme.colors.nafethBlue};
      svg {
        path {
          fill: #fff;
        }
      }
      & .MuiTypography-root {
        font-weight: 600;
        color: #fff;
      }
    }
    & .MuiAccordionSummary-content {
      margin: 12px 0px;
      & .MuiTypography-root {
        font-weight: 600;
        font-family: "Cairo", sans-serif !important;
        padding: 0px;
      }
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
  &.group_access {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  & .MuiTimelineItem-root {
    min-height: 42px;
    &:before {
      all: unset;
    }
    .MuiTypography-root {
      padding: 0px;
    }
    .MuiTimelineDot-root {
      margin: 5px 0px;
      &.active {
        background-color: ${({ theme }) => theme.colors.nafethBlue};
      }
    }
    .MuiTimelineConnector-root {
      &.active {
        background-color: ${({ theme }) => theme.colors.nafethBlue};
      }
    }
  }
  a {
    transition: 0.5s;
    font-size: 13px;
    color: #717171;
    text-decoration: none;
    display: flex;
    :hover {
      color: ${({ theme }) => theme.colors.nafethBlue} !important;
      transition: 0.5s;
    }
  }
`;
export const PageLinkWrapper = styled.div`
  &.active {
    > a {
      color: ${({ theme }) => theme.colors.nafethBlue};
    }
  }
  > a {
    font-size: 14px;
    padding: 2px 8px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.nafethBlue};
    border-radius: 6px;
  }
`;



export const ProfileContainer = styled.div`
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.headerSiderBarBorderColor};

  padding: 10px;
`;
export const SettingIconWrapper = styled.div`
  display: flex;
  justify-content: flex - end;
  align-items: center;
`;
export const SettingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #1281c44a;
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
color: ${({ theme }) => theme.colors.pageTextColor};
align-items: center;
`;

export const Company = styled.div`
display: flex;
justify-content: center;
margin: 10px 0px;
color:${({ theme }) => theme.colors.pageTextColor};
align-items: center;
`;
