import * as React from "react";
import {
  CompnayLogo,
  FormBox,
  FormBoxWrapper,
  FormContainer,
  FormWrapper,
  GroupButtons,
  GsettingsTitle,
  ImageWrapper,
} from "../style";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Input from "@mui/material/Input";
import Image from "next/image";
import { cities, countries } from "@/global/fakeData";
import InputComponent from "@/reuseableComponents/InputField";
import { TextField } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import { IcompanyGlobal } from "@/models/globalsettings";
import { CitiesContext } from "@/context/cityContext";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { Update } from "@/api/putApis/update";
import Swal from "sweetalert2";
interface ISettings {
  global_settinigs: IcompanyGlobal;
}
const GlobalSettings = ({ global_settinigs }: ISettings) => {
  const { isLTR }: any = useTheme();
  const { result } = React.useContext(CitiesContext);
  const [globalValues, setGlobalValues] = React.useState(global_settinigs);
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGlobalValues({
      ...globalValues,
      [e.target.name]: e.target.value,
    });
    console.log("onChange", globalValues);
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let body = {
      companyName: globalValues.companyName,
      crNumber: globalValues.crNumber,
      countryId: globalValues.country.id,
      cityId: globalValues.city,
      poBox: globalValues.poBox,
      fax: globalValues.fax,
      phone: globalValues.phone,
      email: globalValues.email,
      logo: globalValues.logo,
    };
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `settings/Global/GlobalSetting`;

    await Update(userName, userPassword, url, company, body).then(
      (res: any) => {
        console.log("updated", res.message);
        if (res.status === 200) {
          Swal.fire(
            "Thank you!",
            "Global Settings has been Updated!.",
            "success"
          );
        } else {
          console.log(res);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${res.message}, Try again!`,
          });
        }
      }
    );
  };
  return (
    <>
      <FormContainer>
        <GsettingsTitle>
          <h2>Global Settings</h2>
        </GsettingsTitle>
        <FormWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: "100%",
              padding: "15px",
            }}
            noValidate
            autoComplete="off"
          >
            <FormBoxWrapper>
              <FormBox color={isTheme().color}>
                <InputComponent
                  label="Registration Date"
                  defaultValue={globalValues.registrationDate}
                  name="registrationDate"
                  disabled={true}
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputComponent
                  label="Company Name"
                  placeholder="ZADIP GROUP"
                  defaultValue={globalValues.companyName}
                  name="companyName"
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputComponent
                  label="PO Box Number"
                  placeholder="12345"
                  defaultValue={globalValues.poBox}
                  name="poBox"
                  type="number"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
              <FormBox color={isTheme().color}>
                <InputComponent
                  label="CR Expiry Date"
                  placeholder="2023-12-31"
                  defaultValue={globalValues.expiryDate}
                  name="expiryDate"
                  disabled={true}
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputComponent
                  label="CR Number"
                  placeholder="7001234576"
                  defaultValue={globalValues.crNumber}
                  name="crNumber"
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputComponent
                  label="Fax Number"
                  placeholder="966114003880"
                  defaultValue={globalValues.fax}
                  name="fax"
                  type="number"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
              <FormBox color={isTheme().color}>
                <InputComponent
                  label="Company Domain Alias"
                  value={"BETA"}
                  disabled={true}
                  defaultValue={globalValues.companyAlias}
                  name="companyAlias"
                  onChange={(e) => onChangeHandler(e)}
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Country"
                  defaultValue={globalValues.country.id}
                  name="companyAlias"
                  onChange={(e) => onChangeHandler(e)}
                >
                  {
                    <MenuItem
                      key={countries[0].value}
                      value={countries[0].value}
                    >
                      {countries[0].label}
                    </MenuItem>
                  }
                </TextField>

                <InputComponent
                  label="Email"
                  placeholder="muhammad@gmail.com"
                  defaultValue={globalValues.email}
                  name="email"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
            </FormBoxWrapper>
            <FormBoxWrapper>
              <FormBox className="global-settings1" color={isTheme().color}>
                <InputComponent
                  label="SMS Balance"
                  disabled
                  defaultValue={globalValues.sms}
                  name="sms"
                  onChange={(e) => onChangeHandler(e)}
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="City"
                  defaultValue={globalValues.city.id}
                  name="city"
                  onChange={(e) => onChangeHandler(e)}
                >
                  {result?.map((option) => (
                    <MenuItem key={option?.id} value={option?.id}>
                      {isLTR ? option?.name_en : option?.name_ar}
                    </MenuItem>
                  ))}
                </TextField>
                <InputComponent
                  label="Phone Number"
                  placeholder="581955852"
                  defaultValue={globalValues.phone}
                  name="phone"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
              <FormBox className="global-settings" color={isTheme().color}>
                <CompnayLogo>
                  <InputComponent
                    label=""
                    classname="company-logo"
                    type="file"
                    helperText="Maximum Size 1mb"
                    defaultValue={globalValues.logo}
                    name="logo"
                    onChange={(e) => onChangeHandler(e)}
                  />
                  <Image
                    src="/images/car-logo.jpg"
                    alt="compnay-logo"
                    width={270}
                    height={140}
                  />
                </CompnayLogo>
              </FormBox>
            </FormBoxWrapper>
            <GroupButtons>
              <Button
                variant="contained"
                color="success"
                className="global-settings-save-button"
                onClick={(e) => handleSubmit(e)}
              >
                Save
              </Button>
            </GroupButtons>
          </Box>
        </FormWrapper>
      </FormContainer>
    </>
  );
};
export default GlobalSettings;
