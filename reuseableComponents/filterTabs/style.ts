import { styled } from "styled-components";

export const ContractTabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  &.dashbord-contract-tab{
    width: 19%;
  }
  &.car-tabs{
    width: 24.1%;
  }
  & .MuiStack-root {
    gap: 14px;
    > button {
          padding: 13px;
    border-radius: 5px;
    margin: 0;
    }
  }
`;