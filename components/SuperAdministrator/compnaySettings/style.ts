
import { styled } from "styled-components";

export const Container = styled.div``;
export const Title = styled.h2<{ color: string }>`
   color: ${({ color }) => color};
  font-size: 22px;
  margin: 0 10px;
`;
export const FormContainer = styled.div`
  
  border-radius: 8px;
  margin: 30px 10px;
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
  background-color: ${({ theme }) => theme.colors.nafethBlue};
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
  justify-content: flex-start;
  width: 32%;
  flex-direction: column;
  gap: 24px;
  & .MuiFormControl-root {
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
      color: ${({ color }) => color};
    }
  }
  & .MuiInputBase-root {
    > input {
      -webkit-text-fill-color: ${({ color }) => color} !important;
    }
    color: ${({ color }) => color};
    & .MuiOutlinedInput-notchedOutline {
      border-color: ${({ color }) => color} !important;
      color: ${({ color }) => color};
    }
  }
  &.tajeer {
    flex-direction: row;
    width: 100%;
    & .MuiFormControl-root.MuiTextField-root {
      width: 32%;
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
      width: 50%;
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
  }
`;

export const ZipCode = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  & .MuiFormControl-root.MuiTextField-root {
    width: 50%;
    &.owner-id {
      width: 70%;
    }
    &.version-number {
      width: 30%;
    }
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px;
  & .MuiButtonBase-root {
    width: 170px;
    &.global-settings-save-button {
      background-color: ${({ theme }) => theme.colors.nafethBlue};
    }
    &.tajeer-portal-details-save-button {
      background-color: ${({ theme }) => theme.colors.darkblue2};
    }
    &.national-address-save-button {
      background-color: ${({ theme }) => theme.colors.lightblue1};
    }
    &.custom-settings-save-button {
      background-color: ${({ theme }) => theme.colors.bussinesBlue};
    }
    &.nodhom-save-button {
      background-color: ${({ theme }) => theme.colors.lightBlue1};
    }
    &.add-branch-save-button {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  }
`;
// Nodhom component Style

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
export const Logo = styled.div<{ bgcolor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  gap: 15px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${({ bgcolor }) => bgcolor};
  > img {
    border-radius: 8px;
  }
`;
export const Text = styled.div`
  color: #fff;
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
