import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.colors.sideBarBgColor};
  /* background-color: #212120; */
  display: flex;
  padding: 0px 15px;
  z-index: 9999;
  flex-direction: column;
  width: 300px;
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

export const MenuWrapper = styled.div`
  padding-top: 20px;
`;
export const CloseIconLangButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
`;
export const SideIconWrapper = styled.div`
  display: flex;
  padding: 12px 0px;
  /* gap: 21px; */
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  > a {
    letter-spacing: 0.8px;

    color: ${({ theme }) => theme.colors.gray2};
    text-decoration: none;
    line-height: 30px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    text-transform: uppercase;
    font-family: "Cairo", sans-serif !important;
    > svg {
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
      border: 1px solid ${({ theme }) => theme.colors.gray2};
      padding: 8px;
      border-radius: 10px;
    }
  }
  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    svg {
      fill: ${({ theme }) => theme.colors.white};
      path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
  &.mobile {
    margin: 0px 12px;
    gap: 12px;
    > svg {
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
      border: 1px solid ${({ theme }) => theme.colors.gray2};
      padding: 8px;
      border-radius: 10px;
    }
  }
`;
export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin: 0 auto;
  /* background-color: ${({ theme }) => theme.colors.lightGreen}; */
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
  margin: 0px 14px 100px 14px;
  &.mobile {
    margin: 0px 26px;
  }
  .MuiPaper-root.group_access {
    ${({ theme }) =>
    theme.isLTR
      ? css`
            padding-left: 20px;
          `
      : css`
            padding-right: 20px;
          `};
  }
  & .MuiPaper-root {
    position: unset;
    border-bottom: none;
    background-color: ${({ theme }) => theme.colors.sideBarBgColor};
    box-shadow: none;
    margin: 0;
    &:before {
      background-color: unset;
    }
    &.Mui-expanded {
      margin: 0;
    }
    & .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded {
      min-height: 48px;
    }
    & .MuiAccordionSummary-content {
      margin: 14px 0px;
      &.Mui-expanded {
        ::before {
          border-top: 17px solid transparent;
          border-bottom: 17px solid transparent;
          content: "";
          display: inline-block;
          position: absolute;
          /* right: 0; */
          top: 8px;
          ${({ theme }) =>
    theme.isLTR
      ? css`
                  border-right: 17px solid ${({ theme }) => theme.colors.pagebgcolor};

                  right: -29px;
                `
      : css`
                  border-left: 17px solid ${({ theme }) => theme.colors.pagebgcolor};

                  right: 254px;
                `}
        }
      }
    }

    & .MuiCollapse-root {
      & .MuiAccordionDetails-root {
        padding: 12px;
      }
    }
  }
`;
export const TypoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 21px; */
  width: 100%;
  transition: 0.5s;
  .MuiTypography-root {
    font-family: inherit;
    line-height: 30px;
    font-size: 12px;
    font-weight: 600;
  }
  &:hover {
    transition: 0.5s;
    .MuiTypography-root {
      font-family: inherit;
      color: ${({ theme }) => theme.colors.white};
    }
    svg {
      fill: white;
      path {
        fill: white;
      }
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
    color: ${({ theme }) => theme.colors.gray2};
  }
  &:hover {
    a {
      color: ${({ theme }) => theme.colors.nafethBlue};
    }
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
  color: ${({ theme }) => theme.colors.pageTextColor};
  align-items: center;
`;
