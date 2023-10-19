import styled, { css } from "styled-components";
export const Container = styled.div`
  margin: 20px 0px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
export const ExtentionContainer = styled.div`
 border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const DetailSection = styled.div`
width:100%;
`
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
  margin-top: 20px;
  &.summary{
    padding-bottom: 7px;
  }
  &.return-page{
    margin-top: 0;
  }
`;
export const Summary = styled.div`

background-color: white;
    
    padding: 15px;
    margin: 50px auto;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
     @media (min-width: 600px) {
      width: 90%;
      margin-bottom: 10px;
    }
     @media (min-width: 1040px) {
    width: 60%;
      margin-bottom: 10px;
    }
`
export const RentSummary = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0px 10px;
    border-radius: 6px;
    margin: 8px 0px 0px 0px;
    
    &.summary{
      background-color: #F4F5F3;
      letter-spacing: 0.6px;
      
      color: ${({ theme }) => theme.colors.black1};
padding: 10px;
      .des{
        font-weight: 600;
      }
    }
   
    &.rent{
      border-top: 2px solid #d9d9d9;
     border-top-style:dotted ;
      border-radius: unset;
    }
    
    &.other_charges{
      border-bottom: 2px solid #d9d9d9;
      border-bottom-style:dotted ;
      border-radius: unset;
      
    }
    &.net_total{
          width: 48%;
    justify-content: space-between;
    margin: 0 0 0 auto;
    border-bottom: 1px solid #d9d9d9;
    border-bottom-style:dotted ;
      border-radius: unset;
      background-color: #F4F5F3;
      letter-spacing: 0.6px;
      color: ${({ theme }) => theme.colors.black1};
    }
    & .total_amount{
      font-size: 14px;
    font-weight: 600;
     
    }
`

export const Description = styled.div`
font-size: 14px;
letter-spacing: 0.6px;
width: 200px;
font-weight: 600;
&.des{
  width: 150px;
}
&.total_amount{
  width: 70px;
}
`
export const Amount = styled.div`
font-size: 14px;
letter-spacing: 0.6px;

&.positive{
  color: ${({ theme }) => theme.colors.green};
  font-weight: 600;
}
&.negetive{
  color: ${({ theme }) => theme.colors.red};
  font-weight: 600;
}


`

export const ContractsTitle = styled.h2`
  margin: 0px;
  font-size: 20px;
`;
export const EditDisputeContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`
export const CarDetailsHeading = styled.div<{ color: string }>`
background-color: ${({ color }) => color};
display: flex;
justify-content: center;
align-items: center;
width: 200px;
margin: 0 auto;
border-radius: 8px;
color: white;
`
export const DisputedContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`
export const ListWrapper = styled.div<{ bcolor?: string; color?: string }>`
  width: 100%;
  padding-bottom: 3px;
  border-radius: 8px;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
  & .MuiFormControl-root {
    
    /* margin: 20px 0px; */
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
width: 30%;
margin: 12px auto;
display: flex;
@media (max-width: 768px) {
    width: 80%;
    margin: 15px auto;
  }
`
export const SearchTabsWrapper = styled.div<{
  bcolor?: string;
  color?: string;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
 
  padding: 10px 20px;
  gap: 20px;
 flex-wrap: wrap;
 width: 100%;
  .search-input-dashboard {
    width: 99%;
    margin: 0;
    color: ${({ color }) => color};
    background-color: ${({ bcolor }) => bcolor};
  }
  .add_button_filter{
    flex-grow: 1;
    flex-basis: 200px;
  }
`;
export const SearchBarWrapper = styled.div<{ bcolor?: string; color?: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 15px;
  flex-wrap: wrap;
  & .search-input-car {
    width: 100%;
    & .MuiInputBase-root {
      > input {
        -webkit-text-fill-color: ${({ color }) => color} !important;
      }
      color: ${({ color }) => color};
      & .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.sideBarBgColor} !important;
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
    color: ${({ theme }) => theme.colors.sideBarBgColor};
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
