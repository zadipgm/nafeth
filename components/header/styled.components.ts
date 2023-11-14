import styled, { css } from "styled-components";
export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #dddddd;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  width: 100%;
  gap: 35px;
  height: 71.5px;
  background-color: ${({ theme }) => theme.colors.pagebgcolor};
  .link {
    font-size: 20px;
    font-weight: 600;
    color: #777777;
  }
`;
export const HeadersContainer = styled.div`
  .mobile {
    @media (max-width: 600px) {
      display: block;
    }
    @media (min-width: 600px) {
      display: none;
    }
  }
  .desktop {
    @media (max-width: 600px) {
      display: none;
    }
    @media (min-width: 1024px) {
      display: block;
    }
  }
`;
export const BurgerMenu = styled.div`
  display: none;
  > svg {
    width: 50px;
    height: 50px;
    display: block;
  }
  @media (max-width: 600px) {
    display: block;
  }
  @media (min-width: 600px) {
    display: block;
  }
`;
export const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px;
  cursor: pointer;
`;
export const LangButton = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 0.75rem 1.15rem;
  border-radius: 10px;

  text-transform: uppercase;
  font-size: 16px;
  transition: all 0.6s;
  z-index: 1;
  transition: 0.5s;
  cursor: pointer;
  border: none;
  margin: 0px 11px;
  :hover {
    background-color: #6fc5e8;
    transition: 0.6s;
  }
  &.mobile-lang {
    padding: 6px 12px;
    background: #fff;
    color: #044783;
    margin: 5px;
    font-size: 16px;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  padding: 8px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  &.mobile {
    justify-content: space-between;
    padding: 6px;
    @media (max-width: 600px) {
      display: flex;
    }
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      height: 55px;
    }
  }
`;
export const LightMood = styled.div<{ color?: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  .dark {
    color: ${({ color }) => color};
  }
  > svg {
    margin-top: 4px;
  }
`;
export const Wrappper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.red};
  padding: 4px 11px;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  gap: 6px;
  transition: 0.5s;
  ${({ theme }) =>
    theme.isLTR
      ? css`
          flex-direction: row-reverse;
        `
      : css`
          flex-direction: row-reverse;
          svg {
            transform: rotate(180deg);
          }
        `}
        
  &.mobile {
    color: white;
    width: 32%;
    margin: 66px 7px 7px auto;
    background-color: #ff000061;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
  &.desktop-logout {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    border: 1px solid ${({ theme }) => theme.colors.red};
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.red};
      transition: 0.5s;
      svg {
        path {
          fill: #fff;
        }
      }
    }
  }
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
  > svg {
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
