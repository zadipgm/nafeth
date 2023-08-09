import styled, { css } from "styled-components";
export const Container = styled.div`
  display: flex;
      border-bottom: 1px solid ${({ theme }) => theme.colors.headerSiderBarBorderColor};
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0px 12px;
  width: 100%;
  gap: 35px;
  height: 71.5px;
  background-color: ${({ theme }) => theme.colors.headerbgcolor};
 
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  padding: 0px 10px;
`;
export const LightMood = styled.div<{ color?: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  .dark{
    color: ${({ color }) => color};
  }
   >svg{
        margin-top: 4px;
  }
`;
export const Wrappper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.pageTextColor};
  background-color:${({ theme }) => theme.colors.lightRed};
  padding: 4px 11px;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  gap: 6px;
   ${({ theme }) =>
    theme.isLTR
      ? css`
          flex-direction: row-reverse;
        `
      : css`
          flex-direction: row-reverse;
          svg{
            transform: rotate(180deg);
          }
        `}
  
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




export const NotificationIcon = styled.div`
  cursor: pointer;
    display: flex;
  justify-content: center;
  align-items: center;
  >svg{
        margin-top: 4px;
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
