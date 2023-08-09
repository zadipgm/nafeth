import { styled } from "styled-components";

export const Chart = styled.div<{ bcolor?: string; color?: string }>`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 20%;
  justify-content: center;
  border-radius: 8px;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
`;
export const Title = styled.div`
    position: absolute;
    top: 24%;
    left: 20%;
    right: 20%;
    font-size: 23px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.nafethBlue};
`