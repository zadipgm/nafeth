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
import Image from "next/image";
import { cities, countries } from "@/global/fakeData";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import { IcompanyGlobal } from "@/models/globalsettings";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { Update } from "@/api/putApis/update";
import Swal from "sweetalert2";
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";
interface ISettings {
  global_settinigs: IcompanyGlobal;
}
const GlobalSettings = ({ global_settinigs }: ISettings) => {
  const { isLTR }: any = useTheme();
  const [globalValues, setGlobalValues] = React.useState(global_settinigs);
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGlobalValues({
      ...globalValues,
      [e.target.name]: e.target.value,
    });
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
                <InputField
                  label="Registration Date"
                  defaultValue={globalValues.registrationDate}
                  name="registrationDate"
                  disabled={true}
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputField
                  label="Company Name"
                  placeholder="ZADIP GROUP"
                  defaultValue={globalValues.companyName}
                  name="companyName"
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputField
                  label="PO Box Number"
                  placeholder="12345"
                  defaultValue={globalValues.poBox}
                  name="poBox"
                  type="number"
                  onChange={(e) => onChangeHandler(e)}
                />

                <InputField
                  label="CR Expiry Date"
                  placeholder="2023-12-31"
                  defaultValue={globalValues.expiryDate}
                  name="expiryDate"
                  disabled={true}
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputField
                  label="CR Number"
                  placeholder="7001234576"
                  defaultValue={globalValues.crNumber}
                  name="crNumber"
                  onChange={(e) => onChangeHandler(e)}
                />
                <InputField
                  label="Fax Number"
                  placeholder="966114003880"
                  defaultValue={globalValues.fax}
                  name="fax"
                  type="number"
                  onChange={(e) => onChangeHandler(e)}
                />

                <InputField
                  label="Company Domain Alias"
                  value={"BETA"}
                  disabled={true}
                  defaultValue={globalValues.companyAlias}
                  name="companyAlias"
                  onChange={(e) => onChangeHandler(e)}
                />
                <SelectField
                  label="Country"
                  defaultValue={globalValues.country.id}
                  name="companyAlias"
                  onChange={(e) => onChangeHandler(e)}
                >
                  <>
                    {
                      <option
                        key={countries[0].value}
                        value={countries[0].value}
                      >
                        {countries[0].label}
                      </option>
                    }
                  </>
                </SelectField>

                <InputField
                  label="Email"
                  placeholder="muhammad@gmail.com"
                  defaultValue={globalValues.email}
                  name="email"
                  onChange={(e) => onChangeHandler(e)}
                />

                <InputField
                  label="SMS Balance"
                  disabled={true}
                  defaultValue={globalValues.sms}
                  name="sms"
                  onChange={(e) => onChangeHandler(e)}
                />
                <SelectField
                  label="City"
                  defaultValue={globalValues.city.id}
                  name="city"
                  onChange={(e) => onChangeHandler(e)}
                >
                  <>
                    {cities?.map((option) => (
                      <option key={option?.value} value={option?.value}>
                        {/* {isLTR ? option?.name_en : option?.name_ar} */}
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>
                <InputField
                  label="Phone Number"
                  placeholder="581955852"
                  defaultValue={globalValues.phone}
                  name="phone"
                  onChange={(e) => onChangeHandler(e)}
                />

                <InputField
                  label="Company logo"
                  type="file"
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
