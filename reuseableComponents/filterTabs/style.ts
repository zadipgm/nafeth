import { styled } from "styled-components";

export const ContractTabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  @media (max-width: 600px) {
    width: 100%;
    & .MuiStack-root {
      flex-wrap: wrap;
      > button {
        width: 100%;
        padding: 13px;
        border-radius: 5px;
        margin: 0;
      }
    }
  }
  &.car-management {
    width: 40%;
      @media (max-width: 600px) {
  width: 100%;
    & .MuiStack-root {
      flex-wrap: wrap;
      > button {
        width: 100%;
       
      }
    }
  }
  }
  &.dashbord-contract-tab {
    width: 19%;
  }
  &.car-tabs {
    width: 24.1%;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
  & .MuiStack-root {
    gap: 13px;
    > button {
      padding: 13px;
      border-radius: 5px;
      margin: 0;
    }
  }
`;
