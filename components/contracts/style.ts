import styled, { css } from "styled-components";
export const Container = styled.div`
  margin: 20px 0px;
  
  .load-more {
    width: 200px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    & .MuiButton-endIcon {
      svg {
        transform: rotate(90deg);
      }
    }
  }
`;
export const AccountTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  td {
    border: 1px solid #ddd;
    width: 10%;
    padding: 0px 6px;
    &.red{
color: red;
    }
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  tr {
    &.last-table {
      font-weight: 700;
      td {
        width: 87.5%;
      }
    }
  }
`;
export const ReturnContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  margin: 20px;
`;
export const Unpaid = styled.div`
  padding: 0px 30px;
  color: red;
`;
export const Paid = styled.div`
  padding: 0px 30px;
  color: green;
`;
export const ContractsTitle = styled.h2`
  margin: 0px;
  font-size: 20px;
`;
export const ListWrapper = styled.div<{ bcolor?: string; color?: string }>`
  width: 100%;
  padding-bottom: 3px;
  border-radius: 8px;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
  & .MuiFormControl-root {
    width: 58%;
    margin: 20px 0px;
    & .MuiFormLabel-root {
      color: ${({ color }) => color};
    }
  }
  & .MuiInputBase-root {
    > input {
      /* -webkit-text-fill-color: ${({ color }) => color} ; */
    }
    color: ${({ color }) => color};
    & .MuiOutlinedInput-notchedOutline {
      border-color: ${({ color }) => color};
      color: ${({ color }) => color};
    }
  }
`;
export const CarPlateExtention = styled.div`
width: 20%;
margin: 12px auto;
display: flex;
`
export const SearchTabsWrapper = styled.div<{
  bcolor?: string;
  color?: string;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px;
  padding: 0px 20px ;
  gap: 20px;
  @media (max-width: 600px) {
    width: 100%;
    display: block;
  }
  .search-input-dashboard {
    width: 99%;
    margin: 0;
    color: ${({ color }) => color};
    background-color: ${({ bcolor }) => bcolor};
  }
`;
export const SearchBarWrapper = styled.div<{ bcolor?: string; color?: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 74%;
  gap: 15px;
  @media (max-width: 600px) {
    width: 100%;
    display: block;
  }
  &.car-management {
    width: 91%;
    @media (max-width: 600px) {
      width: 100%;
      display: block;
    }
  }
  &.dashboard {
    width: 74%;
    @media (max-width: 600px) {
      width: 100%;
      display: block;
    }
  }
  & .search-input-car {
    width: 100%;
    & .MuiInputBase-root {
      > input {
        -webkit-text-fill-color: ${({ color }) => color} !important;
      }
      color: ${({ color }) => color};
      & .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.nafethBlue} !important;
        color: ${({ color }) => color};
      }
    }
  }
`;
export const ContractCard = styled.div<{ cardcolor?: string; color?: string }>`
  color: ${({ color }) => color};
  background-color: ${({ cardcolor }) => cardcolor};
 
  transition: 0.5s;
  width: 23.9%;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  > a {
    text-decoration: none;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 13px;
  }
`;
export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const SvgKeysWrapper = styled.div<{ color?: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  &.contract_number {
    border-bottom: 1px solid ${({ color }) => color};
    padding: 5px 10px;
    justify-content: center;
    font-weight: 700;
  }
`;
export const ContactNumberWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 100%;
  .nextui-tooltip-button {
    width: 80%;
    margin: 0 auto;
  }
`;
export const Keys = styled.span`
  text-transform: capitalize;
  padding: 6px 0px;
  :hover {
    color: ${({ theme }) => theme.colors.nafethBlue};
  }
`;
export const ContractWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
`;
