import styled, { css } from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.themeColor};
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  /* background-image:url("/images/bgimage.webp"); */
  padding: 50px 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M 0%2c215 C 57.6%2c199.4 172.8%2c149 288%2c137 C 403.2%2c125 460.8%2c168 576%2c155 C 691.2%2c142 748.8%2c51.6 864%2c72 C 979.2%2c92.4 1036.8%2c265.6 1152%2c257 C 1267.2%2c248.4 1382.4%2c74.6 1440%2c29L1440 560L0 560z' fill='%23184a7e'%3e%3c/path%3e%3cpath d='M 0%2c485 C 96%2c447.6 288%2c299 480%2c298 C 672%2c297 768%2c468.2 960%2c480 C 1152%2c491.8 1344%2c381.6 1440%2c357L1440 560L0 560z' fill='%232264ab'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #12baff94;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px;
  width: 50%;
  margin: 0 auto;
  position: absolute;
  top: 27%;
  padding: 20px;
  left: 10%;
  right: 10%;
  border-radius: 20px;
     @media (max-width: 600px) {
    width: 80%;
    flex-direction: column;
    top: 8%;
  }
  @media (min-width: 600px) {
    width: 50%;
  }
  &.create-account {
    width: 70%;
  }
`;
export const LogoWrapper = styled.div`
  width: 50%;
  padding: 15px;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    top: 18%;
  }
  @media (min-width: 600px) {
    width: 50%;
  }
  &.create-account {
    width: 30%;
  }
`;
export const Logo = styled.img`
  width: 100%;
`;

export const Form = styled.form`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    top: 18%;
  }
  @media (min-width: 600px) {
    width: 50%;
  }
  > a {
    text-decoration: none;
    color: #fff;
    transition: 0.5s;
    :hover {
      transition: 0.5s;
      color: #49b9ffd6;
      text-decoration: underline;
    }
  }
`;
export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #e0e0e0;
  > svg {
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.create-account {
    width: 46%;
    padding: 20px;
    margin: 17px;
  }
  &.edit-account {
    width: 50%;
  }

  &.password {
    position: relative;
  }
  &.checkbox {
    > label {
      color: #fff;
      margin: 0px 4px;
    }
  }
`;
export const SpinnerWrapper = styled.div`
  position: relative;
  &.edit {
    width: 250px;
    margin: 0 auto;
  }
  & .MuiBox-root {
    position: absolute;
    top: 7px;
    left: 55px;
    right: 55px;
    width: 70px;
    display: block;
  }
`;

export const EyesWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  top: 15px;
  ${({ theme }) =>
    theme.isLTR
      ? css`
          right: 8px;
        `
      : css`
          left: 8px;
        `}
  &.MuiIcon-fontSizeLarge {
    font-size: 50px;
  }
`;
export const Input = styled.input`
  color: #5c5858;

  ${({ theme }) =>
    theme.isLTR
      ? css`
       border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
           
        `
      : css`
         border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        `}
  width: 100%;
  padding: 15px 7px;
  border: 1px solid lightgray;
  font-size: 16px;
  transition: 0.5s;
  outline: none;
  :focus {
    border: 1px solid #007dcbd6;
    box-shadow: 0 0 0 0.1rem #2493f5;
  }
  &.login {
    color: rgb(255, 255, 255);
    padding: 12px 9px;
    border: none;
    outline: none;
    text-decoration: none;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: self-start;
    width: 156px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    margin: 22px auto;
    transition: all 0.5s ease-in 0s;
    font-size: 16px;
    font-family: "Cairo", sans-serif !important;
    cursor: pointer;
    :hover {
      transition: all 0.5s ease-in 0s;
      background-color: #49b9ffd6;
    }
  }
  &.login-true {
    filter: blur(1px);
    color: rgb(255, 255, 255);
    padding: 12px 9px;
    border: none;
    outline: none;
    text-decoration: none;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: self-start;
    width: 156px;
    background-color: #74a4cf;
    margin-top: 22px;
    transition: all 0.5s ease-in 0s;
    font-size: 16px;
    font-family: "Cairo", sans-serif !important;
    cursor: pointer;
  }
`;
export const Hr = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ForgotPassWord = styled.div`
  a {
    color: #263393;
  }
`;
export const BiLangWrapper = styled.div`
display: flex;
> a{
  display: flex;
}
`;
