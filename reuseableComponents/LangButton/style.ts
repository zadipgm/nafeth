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
  align-items: center;
  width: 100%;
  color:${({ color }) => color};
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