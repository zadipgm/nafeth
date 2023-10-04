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
import { bodyObjecCustomer } from "@/global/fakeData";
import VerifySvg from "@/public/icons/verifySvg";
import { useRouter } from "next/router";
import { ICategory, IPriceList, IidType } from "@/models/customers";
import { ICitiesModel } from "@/models/city";
import { ICountriesModel } from "@/models/country";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { createPost } from "@/api/postApis/createBranch";
import Swal from "sweetalert2";
import { fetchData } from "@/api/fetchapis/fetchData";
interface IProps {
  category: ICategory;
  IdType: IidType;
  cities: ICitiesModel;
  countries: ICountriesModel;
  pricelist: IPriceList;
}
const AddCustomer = ({
  category,
  IdType,
  cities,
  countries,
  pricelist,
}: IProps) => {
  const { colors, locale } = useTheme();
  let obj = bodyObjecCustomer;
  const [data, setData] = React.useState(obj);
  const router = useRouter();
  const [IDTypes, setIDTypes] = React.useState(1);
  const [checkID, setCheckID] = React.useState(false);
  const [categoryID, setCategoryID] = React.useState(1);
  const max_number = router.query.max_number;

  const hanldeIDType = (type: number) => {
    setIDTypes(type);
  };
  const hanldeCategoryID = (id: any) => {
    setCategoryID(id);
  };
  const handleChangeStatus = (e: { target: { name: any; checked: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked === true ? "Y" : "N",
    });
  };
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = "customers/Customers";
    if (checkID) {
      await createPost(userName, userPassword, url, company, data).then(
        (res: any) => {
          if (res.status == 200) {
            Swal.fire("Thank you!", "Customer has been Created!.", "success");
            if (
              router.query.page === "rentcar_page" ||
              router.query.page?.includes("/cars")
            ) {
              router.back();
            } else {
              router.push("/customers");
            }
          } else {
            console.log(res);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        }
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Validate the ID Number First!",
      });
    }
  };
  const handleValidate = async () => {
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `/customers/Customers/ValidateID/${data.idNumber}`;

    await fetchData(userName, userPassword, url, company).then((res: any) => {
      if (res.message == "success") {
        setCheckID(true);
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: `${res.result}`,
        });
        console.log("res", res);
      } else {
        setCheckID(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res.result}`,
        });
      }
    });
  };
  return (
    <Container>
      <Title color={colors.green}>
        <h2>Add Customer</h2>
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
          {/*------------------------- individual & resident form -----------------*/}

          <FormBoxWrapper>
            <FormBox color={isTheme().color} className="customer-code">
              <InputComponent
                label="Customer Code"
                placeholder="100000017"
                type="text"
                value={max_number as string}
                name={"name_en"}
                disabled={true}
                variant="filled"
                required={true}
              />
              <TextField
                select
                label="Category"
                name="category"
                onChange={handleChange}
                defaultValue={""}
                required
              >
                {category.result.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.id}
                    onClick={() => hanldeCategoryID(option.id)}
                  >
                    {option[`name_${locale}`]}
                  </MenuItem>
                ))}
              </TextField>
            </FormBox>
          </FormBoxWrapper>
          {categoryID === 1 ? (
            <>
              <FormBoxWrapper>
                <FormBox color={isTheme().color}>
                  <TextField
                    select
                    label="IDType"
                    name="idType"
                    onChange={handleChange}
                    defaultValue={""}
                    required
                  >
                    {IdType.result.map((option) => (
                      <MenuItem
                        key={option.id}
                        value={option.id}
                        onClick={() => hanldeIDType(option.id)}
                      >
                        {option[`name_${locale}`]}
                      </MenuItem>
                    ))}
                  </TextField>
                  <IDValidateWrapper>
                    <InputComponent
                      label="ID"
                      placeholder="2529283364"
                      type="text"
                      onChange={handleChange}
                      name={"idNumber"}
                      required={true}
                    />
                    <Button
                      onClick={handleValidate}
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
                    {IDTypes === 1 || IDTypes === 2 ? (
                      <InputComponent
                        label="ID Version"
                        placeholder="2"
                        type="text"
                        onChange={handleChange}
                        value={data.version}
                        name={"version"}
                        required={true}
                      />
                    ) : (
                      ""
                    )}
                  </IDValidateWrapper>
                  <InputComponent
                    label="ID Expiry Date GEO"
                    placeholder=""
                    type="date"
                    onChange={handleChange}
                    name={"idExpiryDate_gregorian"}
                    required={true}
                  />
                </FormBox>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Full Name En"
                    placeholder="zeshan"
                    type="text"
                    onChange={handleChange}
                    value={data.fullname_en}
                    name={"fullname_en"}
                    required={true}
                  />
                  {IDTypes === 1 || IDTypes === 2 ? (
                    <TextField
                      select
                      label="Issue City"
                      name="idissuecity"
                      onChange={handleChange}
                      defaultValue={""}
                      required
                    >
                      {cities.result.map((option) => (
                        <MenuItem
                          key={option.id}
                          value={option.id}
                          onClick={() => hanldeIDType(option.id)}
                        >
                          {option[`name_${locale}`]}
                        </MenuItem>
                      ))}
                    </TextField>
                  ) : (
                    <TextField
                      select
                      label="Issue Country"
                      name="idIssueCountry"
                      onChange={handleChange}
                      defaultValue={""}
                      required
                    >
                      {countries.result.map((option) => (
                        <MenuItem
                          key={option.id}
                          value={option.id}
                          onClick={() => hanldeIDType(option.id)}
                        >
                          {option[`name_${locale}`]}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                  <InputComponent
                    label="License Number"
                    placeholder="2529283364"
                    type="text"
                    onChange={handleChange}
                    value={data.licenseNo}
                    name={"licenseNo"}
                    required={true}
                  />
                </FormBox>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Full Name AR"
                    placeholder="zeshan"
                    type="text"
                    onChange={handleChange}
                    value={data.fullname_ar}
                    name={"fullname_ar"}
                    required={true}
                  />
                  <InputComponent
                    label="ID Expiry Date Hijri"
                    placeholder="HijriDate 20/04/1445"
                    type="text"
                    value={data.idExpiryDate_hijri}
                    onChange={handleChange}
                    name={"idExpiryDate_hijri"}
                    required={true}
                  />
                  <InputComponent
                    label="Expiry of the license (Hijri)"
                    placeholder="HijriDate 20/04/1445"
                    type="text"
                    onChange={handleChange}
                    value={data.licExpiryDate_hijri}
                    name={"licExpiryDate_hijri"}
                    required={true}
                  />
                </FormBox>
              </FormBoxWrapper>
              <FormBoxWrapper>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Expiry of the license (Geo)"
                    placeholder=""
                    type="date"
                    onChange={handleChange}
                    name={"licenseExpDate_gregorian"}
                    required={true}
                  />

                  <InputComponent
                    label="Mobile Number"
                    placeholder="966581955852"
                    type="text"
                    value={data.mobileNo}
                    onChange={handleChange}
                    name={"mobileNo"}
                    required={true}
                  />
                </FormBox>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Employer"
                    placeholder="zadip"
                    type="text"
                    value={data.employerName}
                    onChange={handleChange}
                    name={"employerName"}
                    required={true}
                  />

                  <TextField
                    select
                    label="City of Residence"
                    name="residentCity"
                    onChange={handleChange}
                    defaultValue={""}
                    required
                  >
                    {cities.result.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option[`name_${locale}`]}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormBox>
                <FormBox color={isTheme().color}>
                  <TextField
                    select
                    label="Price List"
                    name="pricelist"
                    onChange={handleChange}
                    defaultValue={""}
                    required
                  >
                    {pricelist.result.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option[`name_${locale}`]}
                      </MenuItem>
                    ))}
                  </TextField>
                  <InputComponent
                    label="Work Phone"
                    placeholder="966581955852"
                    type="text"
                    value={data.workPhone}
                    onChange={handleChange}
                    name={"workPhone"}
                    required={true}
                  />
                </FormBox>
              </FormBoxWrapper>
              <FormBoxWrapper>
                <FormBox color={isTheme().color} className="nationality">
                  <InputComponent
                    label="Email"
                    placeholder="zeshan@gmail.com"
                    type="email"
                    onChange={handleChange}
                    value={data.email}
                    name={"email"}
                    classname="customer-email"
                    required={true}
                  />
                  <TextField
                    select
                    label="Nationality"
                    name="nationality"
                    onChange={handleChange}
                    defaultValue={""}
                    required
                    className="customer-nationality"
                  >
                    {countries.result.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option[`name_${locale}`]}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormBox>
              </FormBoxWrapper>
              <FormBoxWrapper>
                <FormBox color={isTheme().color} className="nationality">
                  <InputComponent
                    label="Date of Birth Hijri"
                    placeholder="20/04/1445"
                    type="text"
                    onChange={handleChange}
                    name={"dob_hijri"}
                    classname="nationality"
                    required={true}
                  />
                  <InputComponent
                    label="Date of Birth gregorian"
                    placeholder="zeshan@gmail.com"
                    type="date"
                    onChange={handleChange}
                    name={"dob_gregorian"}
                    required={true}
                    classname="nationality"
                  />
                  <SwitchesComponent
                    title="Active/Inactive"
                    info={""}
                    onchange={(e) => handleChangeStatus(e)}
                    name={"active"}
                    classname={"customer-switch"}
                    value={data.active}
                  />
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
                    {cities.result.map((option) => (
                      <MenuItem
                        key={option.id}
                        value={option.id}
                        defaultValue={""}
                      >
                        {option.name_en}
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
                onChange={handleChange}
                name={"cA_buildingNo"}
                required={true}
              />
              <InputComponent
                label="City"
                placeholder="Riyadh"
                type="text"
                onChange={handleChange}
                name={"cA_City"}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Street Name"
                placeholder="king fahad"
                type="text"
                onChange={handleChange}
                name={"cA_StreetName"}
                required={true}
              />{" "}
              <InputComponent
                label="Country"
                placeholder="saudi arabia"
                type="text"
                onChange={handleChange}
                name={"cA_Country"}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="District"
                placeholder="al malaz"
                type="text"
                onChange={handleChange}
                name={"cA_District"}
                required={true}
              />
              <ZipCode className="zip-code">
                <InputComponent
                  label="Zip-code1"
                  placeholder="12664"
                  type="text"
                  onChange={handleChange}
                  name={"cA_PostalCode"}
                  required={true}
                  classname="zip-code"
                />{" "}
                <InputComponent
                  label="Zip-code2"
                  placeholder="12664"
                  type="text"
                  onChange={handleChange}
                  name={"cA_AdditionalPostalCode"}
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
                onChange={handleChange}
                name={"comments"}
                required={true}
                rows={2}
              />
            </FormBox>
          </FormBoxWrapper>
          <GroupButtons>
            <Button
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
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </GroupButtons>
        </Box>
      </FormWrapper>
    </Container>
  );
};
export default AddCustomer;
