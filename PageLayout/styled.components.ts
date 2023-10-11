import { isTheme } from "@/models/istheme";
import styled from "styled-components";
import { css } from "styled-components";
export const LayoutContainer = styled.div`
  display: flex;
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: calc(100% - 300px);
  overflow-x: hidden;
  height: 100vh;
  position: absolute;
  ${({ theme }) =>
    theme.isLTR
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}

  background-color: ${({ theme }) => theme.colors.pagebgcolor};
  color: ${({ theme }) => theme.colors.pageTextColor};
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Children = styled.div`
  padding: 30px 15px;
`;
export const CommonContainer = styled.div<{ istheme: isTheme }>`
  padding: 15px;
  background-color: ${({ istheme }) => istheme.bcolor};
  color: ${({ istheme }) => istheme.color};
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
