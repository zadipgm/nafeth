import * as React from "react";
import {
  FormBox,
  FormBoxWrapper,
  FormContainer,
  FormWrapper,
  GroupButtons,
  GsettingsTitle,
} from "../style";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { days, hours, minutes } from "@/global/fakeData";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import { ICompanyCustom } from "@/models/globalsettings";
import Swal from "sweetalert2";
import { Update } from "@/api/putApis/update";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import SelectField from "@/reuseableComponents/customeSelectField/select";
import InputField from "@/reuseableComponents/customInputField/input";
interface ISettings {
  custom_settings: ICompanyCustom;
}
const CustomSettings = ({ custom_settings }: ISettings) => {
  const { translations } = useTheme();
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
          <h2>{translations?.customSettings as string}</h2>
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
                <SelectField
                  label={translations?.hours as string}
                  defaultValue={freeHour}
                  name="hours"
                  onChange={(e) => handleFreeHour(e)}
                  required={true}
                >
                  <>
                    <option value="" disabled>
                      ......
                    </option>
                    {hours.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>
                <SelectField
                  label={translations?.minutes as string}
                  defaultValue={freeMinut}
                  name="minuts"
                  onChange={(e) => handleFreeMinut(e)}
                  required={true}
                >
                  <>
                    <option value="" disabled>
                      .....
                    </option>
                    {minutes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>

                <InputField
                  label={translations?.maximumkmadjustment as string}
                  placeholder="10"
                  defaultValue={customValues.maxKMAdjustment}
                  name="maxKMAdjustment"
                  onChange={(e) => onChangeHandler(e)}
                />

                <SelectField
                  label={translations?.graceDay as string}
                  defaultValue={customValues.graceDay}
                  name="graceDay"
                  onChange={(e) => onChangeHandler(e)}
                  required={true}
                >
                  <>
                    <option value="" disabled>
                      ......
                    </option>
                    {days.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>
                <InputField
                  label={translations?.vATDeduction as string}
                  placeholder="15.00"
                  defaultValue={customValues.vat}
                  name="vat"
                  onChange={(e) => onChangeHandler(e)}
                />

                <SelectField
                  label={translations?.graceDayhours as string}
                  defaultValue={graceStartHour}
                  onChange={(e) => handleGraceHour(e)}
                  required={true}
                >
                  <>
                    <option value="" disabled>
                      ....
                    </option>
                    {hours.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>
                <SelectField
                  label={translations?.graceDayminutes as string}
                  defaultValue={graceStarMinut}
                  onChange={(e) => handleGraceMinut(e)}
                  required={true}
                >
                  <>
                    <option value="" disabled>
                      .....
                    </option>
                    {minutes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>

                <InputField
                  label={translations?.taxNumber as string}
                  placeholder="1233212"
                  defaultValue={customValues.taxNo}
                  name="taxNo"
                  onChange={(e) => onChangeHandler(e)}
                />

                <InputField
                  label={translations?.englishDescription as string}
                  placeholder="Please enter here...."
                  name="terms_en"
                  defaultValue={customValues.terms_en}
                  onChange={(e) => onChangeHandler(e)}
                  classname="group-edit-form-description"
                />
                <InputField
                  label="الوصف العربي"
                  placeholder=" الرجاء الدخول هنا....."
                  name="terms_ar"
                  defaultValue={customValues.terms_ar}
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
                {translations?.save as string}
              </Button>
            </GroupButtons>
          </Box>
        </FormWrapper>
      </FormContainer>
    </>
  );
};
export default CustomSettings;
