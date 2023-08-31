import * as React from "react";
import { Container, IDValidateWrapper } from "../style";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
  ZipCode,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import InputComponent from "@/reuseableComponents/InputField";
import { IDType, category, cities, countries } from "@/global/fakeData";
import VerifySvg from "@/public/icons/verifySvg";
import { useRouter } from "next/router";
import { ModalHeader } from "@/components/CarRental/style";
import CloseSvg from "@/public/icons/closeSvg";
interface IProps {
  handleClose?: () => void;
  isEditHeader?: boolean;
}
const EditCustomer = ({ handleClose, isEditHeader = true }: IProps) => {
  const { colors } = useTheme();
  const router = useRouter();
  const [IDTypes, setIDTypes] = React.useState(0);
  const [categoryID, setCategoryID] = React.useState(0);
  const hanldeIDType = (type: string) => {
    console.log(type);
    if (type === "Citizen ID" || type === "Resident ID") {
      setIDTypes(0);
    } else {
      setIDTypes(1);
    }
  };
  const hanldeCategoryID = (cID: string) => {
    console.log(cID);
    if (cID === "individual") {
      setCategoryID(0);
    } else {
      setCategoryID(1);
    }
  };
  return (
    <Container>
      {isEditHeader ? (
        <ModalHeader>
          <h3>Edit Customer</h3>
          <div onClick={handleClose}>
            <CloseSvg />
          </div>
        </ModalHeader>
      ) : (
        <Title color={colors.green}>
          <h2>Edit Customer</h2>
        </Title>
      )}
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
          // onSubmit={(e) => handleSubmit(e)}
        >
          {/*------------------------- individual & resident form -----------------*/}

          <FormBoxWrapper>
            <FormBox color={isTheme().color} className="customer-code">
              <InputComponent
                label="Customer Code"
                placeholder="100000017"
                type="text"
                value={"100000017"}
                name={"name_en"}
                disabled={true}
                required={true}
              />
              <TextField
                select
                label="Category"
                name="Category"
                // onChange={handleChange}
                // value={data.cityId}
                required
              >
                {category.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    onClick={() => hanldeCategoryID(option.value)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormBox>
          </FormBoxWrapper>
          {categoryID === 0 ? (
            <>
              <FormBoxWrapper>
                <FormBox color={isTheme().color}>
                  <TextField
                    select
                    label="IDType"
                    name="Category"
                    // onChange={handleChange}
                    // value={data.cityId}
                    required
                  >
                    {IDType.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        onClick={() => hanldeIDType(option.value)}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <InputComponent
                    label="ID Expiry Date"
                    placeholder="HijriDate 20/04/1445"
                    type="text"
                    name={"IDExpiryDate"}
                    required={true}
                  />
                  <InputComponent
                    label="Expiry of the license (Hijri)"
                    placeholder="HijriDate 20/04/1445"
                    type="text"
                    name={"Expiry of the license "}
                    required={true}
                  />
                </FormBox>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="name"
                    placeholder="zeshan"
                    type="text"
                    name={"name"}
                    required={true}
                  />

                  <InputComponent
                    label="License Number"
                    placeholder="2529283364"
                    type="text"
                    name={"License Number"}
                    required={true}
                  />
                  {IDTypes === 0 ? (
                    <TextField
                      select
                      label="Place of  issue"
                      name="Place of  issue"
                      defaultValue={""}
                      // onChange={handleChange}
                      // value={data.cityId}
                      required
                    >
                      {cities.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  ) : (
                    <TextField
                      select
                      label="Country of Issue"
                      name="Country of Issue"
                      // onChange={handleChange}
                      // value={data.cityId}
                      required
                    >
                      {countries.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                </FormBox>
                <FormBox color={isTheme().color}>
                  <IDValidateWrapper>
                    <InputComponent
                      label="ID"
                      placeholder="2529283364"
                      type="text"
                      name={"ID"}
                      required={true}
                    />
                    <Button
                      variant={"contained"}
                      endIcon={
                        <VerifySvg
                          width="20px"
                          height="20px"
                          fill={colors.white}
                        />
                      }
                      className="validateButton"
                    >
                      Validate
                    </Button>
                    {IDTypes === 0 && (
                      <InputComponent
                        label="ID Version"
                        placeholder="2"
                        type="text"
                        name={"IDversion"}
                        required={true}
                      />
                    )}
                  </IDValidateWrapper>
                  <InputComponent
                    label="Expiry of the license (Geo)"
                    placeholder=""
                    type="date"
                    name={"License Number"}
                    required={true}
                  />
                  <TextField
                    select
                    label="Price List"
                    name="Place of  issue"
                    // onChange={handleChange}
                    // value={data.cityId}
                    required
                  >
                    {cities.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormBox>
              </FormBoxWrapper>
              <FormBoxWrapper>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="phone"
                    placeholder="966581955852"
                    type="text"
                    name={"phone"}
                    required={true}
                  />

                  <TextField
                    select
                    label="City of Residence"
                    name="Place of  issue"
                    // onChange={handleChange}
                    // value={data.cityId}
                    required
                  >
                    {cities.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormBox>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Employer"
                    placeholder="zadip"
                    type="text"
                    name={"Employer"}
                    required={true}
                  />

                  <InputComponent
                    label="City"
                    placeholder="riyadh"
                    type="text"
                    name={"City"}
                    required={true}
                  />
                </FormBox>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Business Phone"
                    placeholder="966581955852"
                    type="text"
                    name={"bphone"}
                    required={true}
                  />

                  <InputComponent
                    label="Email"
                    placeholder="zeshan@gmail.com"
                    type="email"
                    name={"email"}
                    required={true}
                  />
                </FormBox>
              </FormBoxWrapper>
              <FormBoxWrapper>
                <FormBox color={isTheme().color} className="Nationality">
                  <TextField
                    select
                    label="Nationality"
                    name="Place of  issue"
                    required
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormBox>
              </FormBoxWrapper>
            </>
          ) : (
            // ----------------------------company form start from here---------------------------------------

            <>
              <FormBoxWrapper>
                <FormBox color={isTheme().color}>
                  <IDValidateWrapper>
                    <InputComponent
                      label="CR Number"
                      placeholder="2529283364"
                      type="text"
                      name={"CR Number"}
                      required={true}
                      classname="validateinput-company"
                    />
                    <Button
                      variant={"contained"}
                      endIcon={
                        <VerifySvg
                          width="20px"
                          height="20px"
                          fill={colors.white}
                        />
                      }
                      className="validateButton-company"
                    >
                      Validate
                    </Button>
                  </IDValidateWrapper>
                  <InputComponent
                    label="Compnay Name"
                    placeholder="zeshan"
                    type="text"
                    name={"Compnay name"}
                    required={true}
                  />
                </FormBox>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Expiry Date"
                    placeholder="dd/mm/yyyy"
                    type="text"
                    name={"Expiry Date"}
                    required={true}
                  />

                  <InputComponent
                    label="phone"
                    placeholder="966581955852"
                    type="text"
                    name={"phone"}
                    required={true}
                  />
                </FormBox>
                <FormBox color={isTheme().color}>
                  <TextField
                    select
                    label="Price List"
                    name="Place of  issue"
                    // onChange={handleChange}
                    // value={data.cityId}
                    required
                  >
                    {cities.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        defaultValue={""}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <InputComponent
                    label="VAT Number"
                    placeholder="4321566"
                    type="text"
                    name={"VAT"}
                    required={true}
                  />
                </FormBox>
              </FormBoxWrapper>
              <FormBoxWrapper>
                <FormBox color={isTheme().color} className="employee-compnay">
                  <InputComponent
                    label="Employee Name"
                    placeholder="zeshan"
                    type="text"
                    name={"emp name"}
                    required={true}
                  />
                </FormBox>
                <FormBox color={isTheme().color} className="employee-compnay">
                  <InputComponent
                    label="Mobile Number"
                    placeholder="966581955852"
                    type="text"
                    name={"phone"}
                    required={true}
                  />
                </FormBox>
              </FormBoxWrapper>
            </>
          )}
          <Title color={colors.green}>
            <h3>Address</h3>
          </Title>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Building Number"
                placeholder="1234"
                type="text"
                name={"Building Number"}
                required={true}
              />
              <InputComponent
                label="City"
                placeholder="Riyadh"
                type="text"
                name={"city"}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Street Name"
                placeholder="king fahad"
                type="text"
                name={"Street Name"}
                required={true}
              />{" "}
              <InputComponent
                label="Country"
                placeholder="saudi arabia"
                type="text"
                name={"Country"}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="District"
                placeholder="al malaz"
                type="text"
                name={"District"}
                required={true}
              />
              <ZipCode className="zip-code">
                <InputComponent
                  label="Zip-code1"
                  placeholder="12664"
                  type="text"
                  name={"zipcode"}
                  required={true}
                  classname="zip-code"
                />{" "}
                <InputComponent
                  label="Zip-code2"
                  placeholder="12664"
                  type="text"
                  name={"zipcode"}
                  required={true}
                  classname="zip-code"
                />
              </ZipCode>
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox color={isTheme().color} className="Additional">
              <InputComponent
                label="Additional Information"
                placeholder=""
                type="text"
                multiline={true}
                name={"Additional"}
                required={true}
                rows={2}
              />
            </FormBox>
          </FormBoxWrapper>
          <GroupButtons>
            <Button
              onClick={handleClose && handleClose}
              variant="contained"
              color="success"
              className="add-customer-save-button"
              type="submit"
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleClose ? handleClose : () => router.back()}
            >
              Cancel
            </Button>
          </GroupButtons>
        </Box>
      </FormWrapper>
    </Container>
  );
};
export default EditCustomer;
