import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.pagebgcolor} !important;;
    color: ${({ theme }) => theme.colors.pageTextColor};
    font-family: 'Cairo', sans-serif !important;
    transition: all 0.50s linear;
  }
  `
