import { styled } from "styled-components";

export const ContractTabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 40%;
  & .MuiStack-root {
    > button {
      padding: 15px;
      border-radius: 49px;
    }
  }
`;