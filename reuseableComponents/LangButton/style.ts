import styled from "styled-components";

export const Langwrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.black1};
  :hover {
    transition: 0.5s;
    cursor: pointer;
    a {
      color: #fff;
    }
    > div > svg {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
  
`;
export const LangButton = styled.a<{ color?: string }>`
  display: flex;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  align-items: center;
  width: 100%;
  color: ${({ color }) => color};
  text-decoration: none;
  &.mobile {
    color: white;
  }
  &.mobile-lang {
    padding: 0px 12px;
    background: #fff;
    color: white;
    margin: 5px;
    font-size: 16px;
  }
  &.desktops {
    padding: 0px 12px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.sideBarBgColor};
    transition: all.5s;
    border: 1px solid ${({ theme }) => theme.colors.sideBarBgColor};
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.sideBarBgColor};

      transition: all.5s;
    }
  }
`;
export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
