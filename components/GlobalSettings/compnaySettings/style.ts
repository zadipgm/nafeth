
import { styled } from "styled-components";

export const Container = styled.div``;

export const FormContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const FormWrapper = styled.div<{ bcolor: string; color: string }>`
  background-color: ${({ bcolor }) => bcolor};
  color: ${({ color }) => color};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  &.group-edit-list-form {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
    margin-bottom: 15px;
  }
`;
export const GsettingsTitle = styled.div<{ color?: string }>`
  display: flex;
  gap: 24.5%;
  padding: 0px 15px;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.sideBarBgColor};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  font-size: 16px;
  > img {
    border-radius: 8px;
  }
  > h2 {
    font-size: 16px;
    color: #fff;
  }

  
  
  &.custom-settings {
    margin-top: 15px;
    background-color: ${({ theme }) => theme.colors.bussinesBlue};
  }
  
`;
export const ImageWrapper = styled.div`
  width: 195px;
  height: 66px;
  border-radius: 8px;
  background-color: white;
`;
export const FormBox = styled.div<{ color: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-grow: 1;
    flex-basis: 400px;
  gap: 24px;
  .car-plate-number{
    flex-grow: 1;
    flex-basis: 500px;
 
  }
  & .MuiFormControl-root {
    .Mui-disabled{
cursor: no-drop;
    }
    width: 100%;
        flex-basis: 400px;
    flex-grow: 1;
    &.car-contract-dropdown{
      width: 50%;
    }
    &.company-logo{
      & .MuiInputBase-root{
        > input{
          -webkit-text-fill-color: #818181 !important;
        }
      }
    }
    & .MuiFormHelperText-root {
      color: ${({ color }) => color};
    }
    & .MuiFormLabel-root {
      color: ${({ theme }) => theme.colors.sideBarBgColor};
    }
  }
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
  /* &.customer-code{
   width: 100%;
    flex-direction: row;
  }
  &.comments{
    width: 100%;
  }
  &.price-list{
    width: 50%;
  }
  &.car-contract-details{
    flex-direction: row;
    width: 100%;
  }
  &.bank-name{
    flex-direction: row;
    width: 100%;
  }
  &.car-contract-comment{
    width: 100%;
  }
  &.return-contract{
    width: 100%;
  }
  &.car-contract-dropdown{
    flex-direction: row;
    width: 100%;
  }
  &.nationality{
    width: 100%;
    flex-direction: row;
    .customer-nationality{
width: 50%;
    }
  }
 &.employee-compnay{
  width: 50%;
 }
  &.Car-plate{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  &.Additional{
    width: 100%;
  }
  &.car-typeID{
    flex-direction: row;
    width: 100%;
  }
  &.car-fuel-types-section{
    flex-direction: row;
    width: 100%;
    display: flex;
  }
  &.tajeer {
    flex-direction: row;
    width: 100%;
    & .MuiFormControl-root.MuiTextField-root {
      width: 100%;
    }
  }
  &.national-address {
    width: 49%;
  }
  &.custom-settings-last-child {
    gap: 19px;
  }
  &.tabs {
    width: 100%;
  }
  &.nodhom {
    width: 50%;
  }
  &.nodhom-second-last-child {
    width: 80%;
  }
  &.nodhom-last-child {
    width: 17%;
  }
  &.global-settings1 {
    width: 66%;
    justify-content: space-between;
  }
  &.global-settings {
    width: 32%;
    justify-content: space-between;
    gap: 2px;
  }
  &.group-edit-form {
    flex-direction: row;
    width: 100%;
    & .MuiFormControl-root {
      width: 100%;
    }
  }
  &.group-edit-form-description{
    flex-direction: row;
    width: 100%;
    & .MuiFormControl-root {
      width: 100%;
    }
  }

  &.regions{
    flex-direction: row;
    width: 100%;
    & .regions-dropdown{
      width: 100%;
    }
  }
  &.group-edit-form-checkbox {
    width: 100%;
    .group-switches {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      > div {
        width: 25%;
      }
    }
  }
  &.group-switches {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    > div {
      width: 20%;
    }
  } */
`;


export const CompnayLogo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  > img {
    border-radius: 8px;
  }
`;
export const FormBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  &.price-list{
    align-items: baseline;
  }
  gap: 20px;
  padding: 15px;
  &.tabs {
    justify-content: flex-start;
    width: 100%;
    padding: 0px 15px;
    & .MuiBox-root {
      padding: 15px 0px;
    }
  }
`;
export const GroupButtons = styled.div`
&.rent-car-group-button{
  padding: 20px 0px;
  margin: 20px 0px;
  flex-wrap: wrap;
}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px;
  & .MuiButtonBase-root {
    width: 170px;
    &.pricelist-save-button{
      background-color: ${({ theme }) => theme.colors.sideBarBgColor};
    }
    &.dispute-button{
      background-color: ${({ theme }) => theme.colors.red};
    }
    &.dispute-cancel{
      background-color: ${({ theme }) => theme.colors.gray1};
    }
    &.paynow{
      
 width: 40%;
    padding: 10px 20px;
  font-size: 14px;

  }
    }
    &.global-settings-save-button {
      background-color: ${({ theme }) => theme.colors.sideBarBgColor};
    }
    &.contract-on-tajeer-button{
      background-color: ${({ theme }) => theme.colors.green};
      width: 25%;
    }
    &.rent-car-Add-contract{
      background-color: ${({ theme }) => theme.colors.green};
      flex-grow: 1;
      flex-basis: 200px;
      svg{
        transform: rotate(90deg);
        margin: 0px 10px;
      }
    }
    &.contract-on-nafeth-button{
      background-color: ${({ theme }) => theme.colors.green};
      width: 25%;
    }
    &.paylater-button{
      background-color: ${({ theme }) => theme.colors.darkYellow};
    }
    &.create-contract-button{
      width: 40%;
      @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
      margin-bottom: 20px;
      background-color: ${({ theme }) => theme.colors.sideBarBgColor};
    }
    &.add-accessories-button{
       background-color: ${({ theme }) => theme.colors.purple};
       flex-grow: 1;
      flex-basis: 200px;
    }
    &.rent-car-Adddriver-button{
      flex-grow: 1;
      flex-basis: 200px;
      background-color: ${({ theme }) => theme.colors.purple};
    }
    &.custom-price-button{
      flex-grow: 1;
      flex-basis: 200px;
       background-color: ${({ theme }) => theme.colors.red};
      
    }
    &.tajeer-portal-details-save-button {
      background-color: #8e3a47;
    }
    &.rent-car-save-button{
      flex-grow: 1;
      flex-basis: 200px;
      background-color: ${({ theme }) => theme.colors.sideBarBgColor};
      svg{
        transform: rotate(90deg);
        margin: 0px 10px;
      }
    }
    &.national-address-save-button {
      background-color: ${({ theme }) => theme.colors.lightblue1};
    }
    &.add-customer-save-button{
      background-color: ${({ theme }) => theme.colors.green};
    }
    &.custom-settings-save-button {
      background-color: ${({ theme }) => theme.colors.bussinesBlue};
    }
    &.nodhom-save-button {
      background-color: ${({ theme }) => theme.colors.lightBlue1};
    }
    &.add-car-save-button{
      background-color: ${({ theme }) => theme.colors.cyan};
    }
    &.add-branch-save-button {
      background-color: ${({ theme }) => theme.colors.purple};
    }
    &.add-user-save-button{
      background-color: ${({ theme }) => theme.colors.darkYellow};
    }
  }
`;
// Nodhom component Style


export const Logo = styled.div<{ bgcolor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  gap: 15px;
  flex-wrap: wrap;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${({ bgcolor }) => bgcolor};
  > img {
    border-radius: 8px;
    flex-grow: 1;
    flex-basis: 100px;
  }
`;
export const Text = styled.div`
  color: #fff;
  flex-grow: 1;
    flex-basis: 600px;
  > a {
    color: #fff;
    text-decoration: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
