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
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import InputComponent from "@/reuseableComponents/InputField";
import { bodyObjecCustomer } from "@/global/fakeData";
import VerifySvg from "@/public/icons/verifySvg";
import { useRouter } from "next/router";
import { ICategory, ICustomers, IPriceList, IidType } from "@/models/customers";
import { ICitiesModel } from "@/models/city";
import { ICountriesModel } from "@/models/country";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { createPost } from "@/api/postApis/createBranch";
import Swal from "sweetalert2";
import { fetchData } from "@/api/fetchapis/fetchData";
import { Update } from "@/api/putApis/update";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
interface IProps {
  customer: ICustomers;
  category: ICategory;
  IdType: IidType;
  cities: ICitiesModel;
  countries: ICountriesModel;
  pricelist: IPriceList;
}
const EditCustomer = ({
  category,
  IdType,
  cities,
  countries,
  customer,
  pricelist,
}: IProps) => {
  const { colors, locale, isLTR } = useTheme();
  let bodyObject = {
    id: customer.result[0].id,
    category: customer.result[0].category.id,
    idType: customer.result[0].idType.id,
    idNumber: customer.result[0].idNumber,
    version: customer.result[0].version,
    idissuecity: customer.result[0].idissuecity.id,
    idExpiryDate_hijri: customer.result[0].idExpiryDate_hijri,
    idExpiryDate_gregorian: customer.result[0].idExpiryDate_gregorian,
    licenseNo: customer.result[0].licenseNo,
    licExpiryDate_hijri: customer.result[0].licExpiryDate_hijri,
    licenseExpDate_gregorian: customer.result[0].licenseExpDate_gregorian,
    fullname_en: customer.result[0].fullname_en,
    fullname_ar: customer.result[0].fullname_ar,
    mobileNo: customer.result[0].mobileNo,
    email: customer.result[0].email,
    dob_hijri: customer.result[0].dob_hijri,
    dob_gregorian: customer.result[0].dob_gregorian,
    idIssueCountry: customer.result[0].idIssueCountry.id,
    employerName: customer.result[0].employerName,
    pricelist: customer.result[0].pricelist.id,
    nationality: customer.result[0].nationality.id,
    residentCity: customer.result[0].residentCity.id,
    homePhone: customer.result[0].homePhone,
    workPhone: customer.result[0].workPhone,
    comments: customer.result[0].comments,
    active: customer.result[0].active,
    cA_buildingNo: customer.result[0].cA_buildingNo,
    cA_StreetName: customer.result[0].cA_StreetName,
    cA_District: customer.result[0].cA_District,
    cA_City: customer.result[0].cA_City,
    cA_Country: customer.result[0].cA_Country,
    cA_PostalCode: customer.result[0].cA_PostalCode,
    cA_AdditionalPostalCode: customer.result[0].cA_AdditionalPostalCode,
    vatNumber: customer.result[0].vatNumber,
  };
  const [data, setData] = React.useState(bodyObject);
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
  console.log("dasd", router.query.page?.includes("/cars"));
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `customers/Customers/${data.id}`;
    await Update(userName, userPassword, url, company, data).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire("Thank you!", "Customer has been Updated!.", "success");
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
        <h2>Edit Customer</h2>
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
                defaultValue={data.id}
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
                defaultValue={data.category}
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

              {categoryID === 1 ? (
                <>
                  <TextField
                    select
                    label="IDType"
                    name="idType"
                    onChange={handleChange}
                    defaultValue={data.idType}
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
                      defaultValue={data.idNumber}
                      onChange={handleChange}
                      disabled={true}
                      variant="filled"
                      name={"idNumber"}
                      required={true}
                    />
                    <Button
                      onClick={handleValidate}
                      variant={"contained"}
                      disabled
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
                        defaultValue={data.version}
                        onChange={handleChange}
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
                    defaultValue={data.idExpiryDate_gregorian}
                    name={"idExpiryDate_gregorian"}
                    required={true}
                  />

                  <InputComponent
                    label="Full Name En"
                    placeholder="zeshan"
                    type="text"
                    onChange={handleChange}
                    defaultValue={data.fullname_en}
                    name={"fullname_en"}
                    required={true}
                  />
                  {IDTypes === 1 || IDTypes === 2 ? (
                    <TextField
                      select
                      label="Issue City"
                      name="idissuecity"
                      onChange={handleChange}
                      defaultValue={data.idissuecity}
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
                      defaultValue={data.idIssueCountry}
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
                    defaultValue={data.licenseNo}
                    name={"licenseNo"}
                    required={true}
                  />

                  <InputComponent
                    label="Full Name AR"
                    placeholder="zeshan"
                    type="text"
                    onChange={handleChange}
                    defaultValue={data.fullname_ar}
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
                    defaultValue={data.idExpiryDate_hijri}
                    required={true}
                  />
                  <InputComponent
                    label="Expiry of the license (Hijri)"
                    placeholder="HijriDate 20/04/1445"
                    type="text"
                    onChange={handleChange}
                    defaultValue={data.licExpiryDate_hijri}
                    name={"licExpiryDate_hijri"}
                    required={true}
                  />

                  <InputComponent
                    label="Expiry of the license (Geo)"
                    placeholder=""
                    type="date"
                    onChange={handleChange}
                    defaultValue={data.licenseExpDate_gregorian}
                    name={"licenseExpDate_gregorian"}
                    required={true}
                  />

                  <InputComponent
                    label="Mobile Number"
                    placeholder="966581955852"
                    type="text"
                    value={data.mobileNo}
                    onChange={handleChange}
                    defaultValue={data.mobileNo}
                    name={"mobileNo"}
                    required={true}
                  />

                  <InputComponent
                    label="Employer"
                    placeholder="zadip"
                    type="text"
                    defaultValue={data.employerName}
                    onChange={handleChange}
                    name={"employerName"}
                    required={true}
                  />

                  <TextField
                    select
                    label="City of Residence"
                    name="residentCity"
                    onChange={handleChange}
                    defaultValue={data.residentCity}
                    required
                  >
                    {cities.result.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option[`name_${locale}`]}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    select
                    label="Price List"
                    name="pricelist"
                    onChange={handleChange}
                    defaultValue={data.pricelist}
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
                    defaultValue={data.workPhone}
                    onChange={handleChange}
                    name={"workPhone"}
                    required={true}
                  />

                  <InputComponent
                    label="Email"
                    placeholder="zeshan@gmail.com"
                    type="email"
                    onChange={handleChange}
                    defaultValue={data.email}
                    name={"email"}
                    classname="customer-email"
                    required={true}
                  />
                  <TextField
                    select
                    label="Nationality"
                    name="nationality"
                    onChange={handleChange}
                    defaultValue={data.nationality}
                    required
                    className="customer-nationality"
                  >
                    {countries.result.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option[`name_${locale}`]}
                      </MenuItem>
                    ))}
                  </TextField>

                  <InputComponent
                    label="Date of Birth Hijri"
                    placeholder="20/04/1445"
                    type="text"
                    onChange={handleChange}
                    defaultValue={data.dob_hijri}
                    name={"dob_hijri"}
                    classname="nationality"
                    required={true}
                  />
                  <InputComponent
                    label="Date of Birth gregorian"
                    placeholder=""
                    type="date"
                    onChange={handleChange}
                    defaultValue={data.dob_gregorian}
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
                    defaultChecked={data.active === "Y" ? true : false}
                  />
                </>
              ) : (
                // ----------------------------company form start from here---------------------------------------
                <>
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

                  <InputComponent
                    label="Employee Name"
                    placeholder="zeshan"
                    type="text"
                    name={"emp name"}
                    required={true}
                  />

                  <InputComponent
                    label="Mobile Number"
                    placeholder="966581955852"
                    type="text"
                    name={"phone"}
                    required={true}
                  />
                </>
              )}
            </FormBox>
          </FormBoxWrapper>
          <Title color={colors.green}>
            <h3>Address</h3>
          </Title>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Building Number"
                placeholder="1234"
                type="text"
                defaultValue={data.cA_buildingNo}
                onChange={handleChange}
                name={"cA_buildingNo"}
                required={true}
              />
              <InputComponent
                label="City"
                placeholder="Riyadh"
                type="text"
                defaultValue={data.cA_City}
                onChange={handleChange}
                name={"cA_City"}
                required={true}
              />
              <InputComponent
                label="Street Name"
                placeholder="king fahad"
                type="text"
                defaultValue={data.cA_StreetName}
                onChange={handleChange}
                name={"cA_StreetName"}
                required={true}
              />{" "}
              <InputComponent
                label="Country"
                placeholder="saudi arabia"
                type="text"
                defaultValue={data.cA_Country}
                onChange={handleChange}
                name={"cA_Country"}
                required={true}
              />
              <InputComponent
                label="District"
                placeholder="al malaz"
                type="text"
                defaultValue={data.cA_District}
                onChange={handleChange}
                name={"cA_District"}
                required={true}
              />
              <InputComponent
                label="Zip-code1"
                placeholder="12664"
                type="text"
                defaultValue={data.cA_PostalCode}
                onChange={handleChange}
                name={"cA_PostalCode"}
                required={true}
                classname="zip-code"
              />{" "}
              <InputComponent
                label="Zip-code2"
                placeholder="12664"
                type="text"
                defaultValue={data.cA_AdditionalPostalCode}
                onChange={handleChange}
                name={"cA_AdditionalPostalCode"}
                required={true}
                classname="zip-code"
              />
              <InputComponent
                label="Additional Information"
                placeholder=""
                type="text"
                defaultValue={data.comments}
                multiline={true}
                onChange={handleChange}
                name={"comments"}
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
              Update
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
export default EditCustomer;
