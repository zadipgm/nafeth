import styled, { css } from "styled-components";
export const Container = styled.div`
  display: flex;
      border-bottom: 1px solid #363636c7;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0px 12px;
  width: 100%;
  gap: 35px;
  height: 71.5px;
  background-color: ${({ theme }) => theme.colors.headersideBarBgColor};
 
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  padding: 0px 10px;
`;
export const LightMood = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
   >svg{
        margin-top: 12px;
  }
`;
export const Wrappper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`
export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.pageTextColor};
  background-color:${({ theme }) => theme.colors.lightGreen};
  padding: 6px 11px;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  gap: 6px;
  
`;
export const ProfileImageContainer = styled.div`
  > div {
    display: flex;
    justify-content: flex-start;
    gap: 6px;
    align-items: center;
    color: #fff;
    position: relative;
    padding: 15px 0px;
    cursor: pointer;
    > img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }
  }
`;
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
export const LangButton = styled.a`
  display: flex;
  align-items: center;

  width: 100%;
  color:${({ theme }) => theme.colors.pageTextColor};
  text-decoration: none;
  &.mobile-lang {
    padding: 0px 12px;
    background: #fff;
    color: #044783;
    margin: 5px;
    font-size: 16px;
  }
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
 
`;
export const NotificationIcon = styled.div`
  cursor: pointer;
    display: flex;
  justify-content: center;
  align-items: center;
  >svg{
        margin-top: 12px;
  }
`;
export const LogoutContainer = styled.div`
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    color: #fff;
    text-decoration: none;
    > svg {
      transform: rotate(180deg);
    }
  }
`;
