import * as React from "react";
import axios from "axios";
import { AddBranchContainer, Title } from "../style";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "../../compnaySettings/style";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import InputComponent from "@/reuseableComponents/InputField";
import { cities, countries, tajeerLicense } from "@/global/fakeData";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { useRouter } from "next/router";
import SimpleSnackbar from "@/reuseableComponents/Snackbar";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import SimpleGoogleMap from "@/reuseableComponents/map/googlemap";

const AddBranch = () => {
  let obj = {
    name_en: "",
    name_ar: "",
    countryId: "null",
    cityId: "null",
    address: "",
    email: "",
    phone: "null",
    poBox: "null",
    fax: "null",
    tajeerLicenseNo: "",
    latitude: "",
    longitude: "",
    active: "",
    userID: "null",
  };
  const [data, setData] = React.useState(obj);
  const [checked, setChecked] = React.useState(true);
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { isDark } = useTheme();
  const [tajeer, setTajeer] = React.useState("11001100110011");
  const router = useRouter();
  const handleChangeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeTajeer = (e: { target: { name: any; value: any } }) => {
    setTajeer(e.target.value);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let obj = {
      name_en: data.name_en,
      name_ar: data.name_ar,
      countryId: 2,
      cityId: 1,
      address: data.address,
      email: data.email,
      phone: Number(data?.phone),
      poBox: Number(data?.poBox),
      fax: Number(data?.fax),
      tajeerLicenseNo: tajeer,
      latitude: data.latitude,
      longitude: data.longitude,
      active: checked ? "Y" : "N",
      userID: 1,
    };
    try {
      await axios.post("https://appapi.nafeth.sa/api/branches/beta", obj);
      handleClick();
      setMessage("Branch Added successfully!");
      setTimeout(() => {
        router.push("/super_admin/branch_management/");
      }, 2000);
      setColor("#0d880d");
    } catch (e) {
      handleClick();
      setMessage("Branch Added successfully!");
      setColor("#ec0e0e");
      console.log(e);
      setMessage("try again");
    }
  };

  return (
    <>
      <SimpleSnackbar
        open={open}
        handleClose={handleClose}
        message={message}
        color={color}
      />

      <AddBranchContainer>
        <Title>
          <h2>Add New Branch</h2>
        </Title>
        <FormWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: "100%",
              padding: "15px",
            }}
            noValidate={false}
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e)}
          >
            <FormBoxWrapper>
              <FormBox color={isTheme().color}>
                <InputComponent
                  label="English Name"
                  placeholder="English Name"
                  type="text"
                  value={data.name_en}
                  name={"name_en"}
                  onChange={handleChange}
                  required={true}
                  // error={data.name_en.length <= 1 ? true : false}
                  // helperText={
                  //   data.name_en.length <= 1 ? "Please enter name in english" : ""
                  // }
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="City"
                  defaultValue="83"
                >
                  {cities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <InputComponent
                  label="Phone"
                  placeholder="0581955852"
                  type="text"
                  value={!Number(data.phone) ? "" : data.phone}
                  name={"phone"}
                  onChange={handleChange}
                  required={true}
                  // error={error}
                  // helperText={error ? "Please enter name in english" : ""}
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="License Number - Tajeer"
                  defaultValue="11001100110011"
                  onChange={handleChangeTajeer}
                >
                  {tajeerLicense.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormBox>
              <FormBox color={isTheme().color}>
                <InputComponent
                  label="Arabic Name"
                  placeholder="Arabic Name"
                  type="text"
                  name={"name_ar"}
                  value={data.name_ar}
                  onChange={handleChange}
                  required={true}
                  // error={error}
                  // helperText={error ? "Please enter name in english" : ""}
                />
                <InputComponent
                  label="Address"
                  placeholder="7001234576"
                  type="text"
                  value={data.address}
                  name={"address"}
                  onChange={handleChange}
                  required={true}
                  // error={error}
                  // helperText={error ? "Please enter name in english" : ""}
                />
                <InputComponent
                  label="Fax Number"
                  placeholder="966114003880"
                  type="text"
                  value={!Number(data.fax) ? "" : data.fax}
                  name={"fax"}
                  onChange={handleChange}
                  required={true}
                  // error={error}
                  // helperText={error ? "Please enter name in english" : ""}
                />
                <InputComponent
                  label="Latitude"
                  placeholder="24.716318063611002"
                  type="text"
                  value={data.latitude}
                  name={"latitude"}
                  onChange={handleChange}
                  required={true}
                  // error={error}
                  // helperText={error ? "Please enter name in english" : ""}
                />
              </FormBox>
              <FormBox color={isTheme().color}>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Country"
                  defaultValue="183"
                >
                  {countries.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <InputComponent
                  label="Email"
                  placeholder="abc@gmail.com"
                  type="email"
                  value={data.email}
                  name={"email"}
                  onChange={handleChange}
                  required={true}
                  // error={error}
                  // helperText={error ? "Please enter name in english" : ""}
                />
                <InputComponent
                  label="PO BOX"
                  placeholder="966114003880"
                  type="text"
                  name={"poBox"}
                  value={!Number(data.poBox) ? "" : data.poBox}
                  onChange={handleChange}
                  required={true}
                  // error={error}
                  // helperText={error ? "Please enter name in english" : ""}
                />
                <InputComponent
                  label="Longitude"
                  placeholder="24.716318063611002"
                  type="text"
                  value={data.longitude}
                  name={"longitude"}
                  onChange={handleChange}
                  required={true}
                  // error={error}
                  // helperText={error ? "Please enter name in english" : ""}
                />
              </FormBox>
            </FormBoxWrapper>
            <FormBoxWrapper>
              <FormBox color={isTheme().color}>
                <SwitchesComponent
                  title="Active/Inactive"
                  value={checked ? "Y" : "N"}
                  checked={checked}
                  onchange={(e) => handleChangeStatus(e)}
                />
              </FormBox>
            </FormBoxWrapper>

            <GroupButtons>
              <Button
                variant="contained"
                color="success"
                className="add-branch-save-button"
                type="submit"
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </GroupButtons>
          </Box>
        </FormWrapper>
      </AddBranchContainer>
      <SimpleGoogleMap
        lat={24.654854380080966}
        long={46.72978560379647}
        height={"50vh"}
        isLoading={true}
      />
    </>
  );
};
export default AddBranch;
