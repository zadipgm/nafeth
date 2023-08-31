import { styled } from "styled-components";

export const BarChartContainer = styled.div<{ bcolor?: string; color?: string }>`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 50%;
  justify-content: center;
  border-radius: 8px;
  margin: 20px 0px;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
&.pie-chart{
  width: 322px;
}
`;