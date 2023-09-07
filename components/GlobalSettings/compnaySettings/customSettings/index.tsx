import * as React from "react";
import {
  FormBox,
  FormBoxWrapper,
  FormContainer,
  FormWrapper,
  GroupButtons,
  GsettingsTitle,
  ZipCode,
} from "../style";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { days, hours, minutes } from "@/global/fakeData";
import TabsComponent from "@/reuseableComponents/Tabs";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import InputComponent from "@/reuseableComponents/InputField";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import { ICompanyCustom } from "@/models/globalsettings";
import Swal from "sweetalert2";
import { Update } from "@/api/putApis/update";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
interface ISettings {
  custom_settings: ICompanyCustom;
}
const CustomSettings = ({ custom_settings }: ISettings) => {
  const { isDark }: any = useTheme();
  const [customValues, setCustomValues] = React.useState(custom_settings);

  let coustomFreeGracehours = custom_settings.freeGracehours;
  let splitTime = coustomFreeGracehours.split(":");

  const [freeHour, setFreeHour] = React.useState(splitTime[0]);
  const [freeMinut, setFreeMinuts] = React.useState(splitTime[1]);
  let coustomgraceStartTimeHours = custom_settings.graceStartTime;
  let splitGraceStartTime = coustomgraceStartTimeHours.split(":");

  const [graceStartHour, setGraceStartHour] = React.useState(
    splitGraceStartTime[0]
  );
  const [graceStarMinut, setGraceStarMinuts] = React.useState(
    splitGraceStartTime[1]
  );
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCustomValues({
      ...customValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleFreeHour = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFreeHour(e.target.value);
  };
  const handleFreeMinut = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFreeMinuts(e.target.value);
  };

  const handleGraceHour = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGraceStartHour(e.target.value);
  };
  const handleGraceMinut = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGraceStarMinuts(e.target.value);
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let body = {
      freeGracehours: `${freeHour}:${freeMinut}`,
      graceDay: customValues.graceDay,
      graceStartTime: `${graceStartHour}:${graceStarMinut}`,
      vat: customValues.vat,
      maxKMAdjustment: customValues.maxKMAdjustment,
      taxNo: customValues.taxNo,
      terms_en: customValues.terms_en,
      terms_ar: customValues.terms_ar,
    };
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `settings/Global/CustomSetting`;

    await Update(userName, userPassword, url, company, body).then(
      (res: any) => {
        if (res.status === 200) {
          Swal.fire(
            "Thank you!",
            "Custom Settings has been Updated!.",
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
        <GsettingsTitle className="custom-settings" color={isTheme().color}>
          <h2>Custom Settings</h2>
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
              <FormBox className="custom-settings" color={isTheme().color}>
                <ZipCode>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Hours"
                    defaultValue={freeHour}
                    name="hours"
                    onChange={(e) => handleFreeHour(e)}
                  >
                    {hours.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    select
                    label="Minutes"
                    defaultValue={freeMinut}
                    name="minuts"
                    onChange={(e) => handleFreeMinut(e)}
                  >
                    {minutes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </ZipCode>
                <InputComponent
                  label="Maximum km adjustment"
                  placeholder="10"
                  defaultValue={customValues.maxKMAdjustment}
                  name="maxKMAdjustment"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
              <FormBox color={isTheme().color}>
                <TextField
                  select
                  label="Grace Day"
                  defaultValue={customValues.graceDay}
                  name="graceDay"
                  onChange={(e) => onChangeHandler(e)}
                >
                  {days.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <InputComponent
                  label="VAT Deduction %"
                  placeholder="15.00"
                  defaultValue={customValues.vat}
                  name="vat"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
              <FormBox
                className="custom-settings-last-child"
                color={isTheme().color}
              >
                <ZipCode>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Grace Day hours"
                    defaultValue={graceStartHour}
                    onChange={(e) => handleGraceHour(e)}
                  >
                    {hours.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Grace Day minutes"
                    defaultValue={graceStarMinut}
                    onChange={(e) => handleGraceMinut(e)}
                  >
                    {minutes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </ZipCode>
                <InputComponent
                  label="Tax Number"
                  placeholder="1233212"
                  defaultValue={customValues.taxNo}
                  name="taxNo"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
            </FormBoxWrapper>

            <FormBoxWrapper className="tabs">
              <FormBox
                className="group-edit-form-description"
                color={isTheme().color}
              >
                <InputComponent
                  label="English Description"
                  placeholder="Please enter here...."
                  name="terms_en"
                  multiline
                  defaultValue={customValues.terms_en}
                  rows={3}
                  onChange={(e) => onChangeHandler(e)}
                  classname="group-edit-form-description"
                />
                <InputComponent
                  label="الوصف العربي"
                  placeholder=" الرجاء الدخول هنا....."
                  name="terms_ar"
                  multiline
                  defaultValue={customValues.terms_ar}
                  rows={3}
                  type="textarea"
                  classname="group-edit-form-description"
                  onChange={(e) => onChangeHandler(e)}
                />
              </FormBox>
            </FormBoxWrapper>
            <GroupButtons>
              <Button
                variant="contained"
                color="success"
                className="custom-settings-save-button"
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
export default CustomSettings;
