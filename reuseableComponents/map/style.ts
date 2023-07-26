import styled from "styled-components";

export const Wrapper = styled.div<{ margin?: string }>`
  margin: ${({ margin }) => margin || "10px 0"};
  padding: 15px;
`;
