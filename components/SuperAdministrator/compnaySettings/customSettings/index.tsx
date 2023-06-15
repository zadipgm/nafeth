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
import { TAMM_Authorization, days, hours, minutes } from "@/global/fakeData";
import RadioButttons from "@/reuseableComponents/RadioButton";
import TabsComponent from "@/reuseableComponents/Tabs";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import InputComponent from "@/reuseableComponents/InputField";
const CustomSettings = () => {
  const [value, setValue] = React.useState("active");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <FormContainer>
        <GsettingsTitle className="custom-settings">
          <h2>Custom Settings</h2>
        </GsettingsTitle>
        <FormWrapper>
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
              <FormBox className="custom-settings">
                <ZipCode>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Minutes"
                    defaultValue="01"
                  >
                    {minutes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Hours"
                    defaultValue="01"
                  >
                    {hours.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </ZipCode>
                <ZipCode>
                  <InputComponent
                    label="Owner ID"
                    placeholder="2529283364"
                    classname="owner-id"
                  />
                  <InputComponent
                    label="Version Number"
                    placeholder="3"
                    classname="version-number"
                  />
                </ZipCode>
                <InputComponent
                  label="Maximum km adjustment"
                  placeholder="10"
                />
              </FormBox>
              <FormBox>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Grace Day"
                  defaultValue="Friday"
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
                  value={""}
                />
                <InputComponent label="Tax Number" placeholder="1233212" />
              </FormBox>
              <FormBox className="custom-settings-last-child">
                <ZipCode>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Grace Day minutes"
                    defaultValue="03"
                  >
                    {minutes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Grace Day minutes"
                    defaultValue="04"
                  >
                    {hours.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </ZipCode>

                <InputComponent
                  label="Naql Authority License"
                  placeholder="1234542"
                  value={""}
                />

                <SwitchesComponent title="TAMM Authorization Mandatory" />
              </FormBox>
            </FormBoxWrapper>

            <FormBoxWrapper className="tabs">
              <FormBox className="tabs">
                <TabsComponent />
              </FormBox>
            </FormBoxWrapper>
            <GroupButtons>
              <Button
                variant="contained"
                color="success"
                className="custom-settings-save-button"
              >
                Save
              </Button>
              <Button variant="contained" color="error">
                Cancel
              </Button>
            </GroupButtons>
          </Box>
        </FormWrapper>
      </FormContainer>
    </>
  );
};
export default CustomSettings;
