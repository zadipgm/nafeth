import { styled } from "styled-components";

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 8px;
`;
export const CheckboxWrapper = styled.div<{
  color: string;
  hoverColor: string;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${({ color }) => color};
  border-radius: 8px;
  padding: 8px;
  width: 68px;
  height: 68px;
  transition: 0.5s;
  position: relative;

  &:hover {
    transition: 0.5s;
    box-shadow: 0 0 0 3px ${({ hoverColor }) => hoverColor};
  }
`;
export const Checkbox = styled.input`
  position: absolute;
  top: 2px;
  left: 0px;
  width: 14px;
  height: 14px;
  transition: all.5s;
  border-radius: 100%;
  cursor: pointer;
`;
export const SpanText = styled.span`
  font-size: 12px;
  margin: 10px 0px 0px 0px;
  color: ${({ theme }) => theme.colors.gray2};
`;
