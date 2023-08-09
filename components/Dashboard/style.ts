import styled, { css } from "styled-components";
export const Container = styled.div`
  .load-more {
    width: 200px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
  }
`;


export const ContractsTitle = styled.h2`
  margin: 0px;
  font-size: 20px;
`;
export const ListWrapper = styled.div<{ bcolor?: string; color?: string }>`
  width: 100%;
  margin-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px 20px;
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
export const SearchTabsWrapper = styled.div<{ bcolor?: string; color?: string; }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px;
  gap: 20px;
  .search-input-car{
    width: 74.4%;
  margin: 0;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
     > label{
      color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};

  }
  & .MuiInputBase-root{
    > fieldset{
      border-color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
    }
  }
  }
  .search-input-dashboard{
  width: 79%;
  margin: 0;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
  
  }
`;

export const ContractCard = styled.div<{ cardcolor?: string; color?: string }>`
  color: ${({ color }) => color};
  background-color: ${({ cardcolor }) => cardcolor};
  cursor: pointer;
  transition: 0.5s;
  width: 23.9%;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  >a{
    text-decoration: none;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 13px;
   
  }
  &:hover{
    background-color:#a4ecff91;
    transform: scale(1.05);
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
