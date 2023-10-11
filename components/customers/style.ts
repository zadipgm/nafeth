import { styled } from "styled-components";
export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`;
export const LoyaltyContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`;
export const Wrapper = styled.div`
  padding: 15px;
  .load-more {
    width: 200px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    background-color: ${({ theme }) => theme.colors.sideBarBgColor};
    & .MuiButton-endIcon {
      svg {
        transform: rotate(90deg);
      }
    }
  }
`;
export const BlcokCustomerTitle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray2};
`;
export const CustomerCardContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const CustomerCardWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 22px;
  padding: 15px;
  width: 100%;
`;
export const FullNameWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  gap: 10px;
`;
export const NameSvgwrapper = styled.div`
  width: 41px;
  height: 41px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.sideBarBgColor};
`;
export const List = styled.ul`
  margin: 0;
  padding: 10px 0px;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  &.contract-list {
    gap: 7px;
    justify-content: space-between;
    border-bottom: none;
  }
  & .customer-chip {
    flex-grow: 1;
    flex-basis: 200px;
  }
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3px;
  background-color: #d7d6d645;
  padding: 4px;
  border-radius: 8px;
  width: 100%;
  .customer-name{
    font-weight: bold;
    font-size: 1.3em;
  }
`;
export const IDValidateWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
      flex-wrap: wrap;
      width: 100%;
  .validateButton {
     padding: 7px 18px;
         margin-top: 18px;
  }
  .validateButton-company {
    width: 30%;
    padding: 16px;
  }
  .validateinput-company {
    width: 70%;
  }
`;
