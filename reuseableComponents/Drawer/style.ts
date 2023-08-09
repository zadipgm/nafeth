import { styled } from "styled-components";

export const Container = styled.div<{ bcolor: string, color: string }>`
background-color: ${({ bcolor }) => bcolor};
color: ${({ color }) => color}
`