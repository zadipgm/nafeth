import { isTheme } from "@/models/istheme";
import { styled } from "styled-components";

export const AddBranchContainer = styled.div`
  border-radius: 8px;
  /* margin: 30px 10px; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Title = styled.div<{ color: string, textColor?: string }>`
  display: flex;
  gap: 24.5%;
  padding: 0px 15px;
  align-items: center;
  text-align: center;
  background-color: ${({ color }) => color};
  color:${({ textColor }) => textColor || "#fff"};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  > h2 {
    font-size: 16px;
    letter-spacing: 1.5px;
  }
  > h3 {
    font-size: 16px;
    letter-spacing: 1.5px;
  }
`;
