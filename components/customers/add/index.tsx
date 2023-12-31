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
import { Box, Button } from "@mui/material";
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
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";
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
  const { colors, locale, translations } = useTheme();
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
    let url = "Customers";
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
    let url = `/customers/ValidateID/${data.idNumber}`;

    await fetchData(userName, userPassword, url, company).then((res: any) => {
      if (res.message == "success") {
        setCheckID(true);
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: `${res.result}`,
        });
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
      <Title color={colors.sideBarBgColor}>
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
            <FormBox className="customer-code">
              <InputField
                label={translations?.customerCode as string}
                placeholder="100000017"
                type="text"
                value={max_number as string}
                name={"name_en"}
                disabled={true}
                required={true}
              />
              <SelectField
                label={translations?.category as string}
                name="category"
                onChange={handleChange}
                defaultValue={""}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.pleaseSelectCategory as string}
                  </option>
                  {category.result.map((option) => (
                    <option
                      key={option.id}
                      value={option.id}
                      onClick={() => hanldeCategoryID(option.id)}
                    >
                      {option[`name_${locale}`]}
                    </option>
                  ))}
                </>
              </SelectField>

              {categoryID === 1 ? (
                <>
                  <SelectField
                    label={translations?.iDType as string}
                    name="idType"
                    onChange={handleChange}
                    defaultValue={""}
                    required={true}
                  >
                    <>
                      <option value={""} disabled>
                        {translations?.pleaseSelectIdType as string}
                      </option>
                      {IdType.result.map((option) => (
                        <option
                          key={option.id}
                          value={option.id}
                          onClick={() => hanldeIDType(option.id)}
                        >
                          {option[`name_${locale}`]}
                        </option>
                      ))}
                    </>
                  </SelectField>
                  <IDValidateWrapper>
                    <InputField
                      label={translations?.ID as string}
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
                      {translations?.validate}
                    </Button>
                    {IDTypes === 1 || IDTypes === 2 ? (
                      <InputField
                        label={translations?.iDVersionNo as string}
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
                  <InputField
                    label={translations?.iDExpiryDate as string}
                    placeholder=""
                    type="date"
                    onChange={handleChange}
                    name={"idExpiryDate_gregorian"}
                    required={true}
                  />

                  <InputField
                    label={translations?.fullName_en as string}
                    placeholder="zeshan"
                    type="text"
                    onChange={handleChange}
                    value={data.fullname_en}
                    name={"fullname_en"}
                    required={true}
                  />
                  {IDTypes === 1 || IDTypes === 2 ? (
                    <SelectField
                      label={translations?.issueCity as string}
                      name="idissuecity"
                      onChange={handleChange}
                      defaultValue={""}
                      required={true}
                    >
                      <>
                        <option value={""} disabled>
                          {translations?.pleaseSelectCity as string}
                        </option>
                        {cities.result.map((option) => (
                          <option
                            key={option.id}
                            value={option.id}
                            onClick={() => hanldeIDType(option.id)}
                          >
                            {option[`name_${locale}`]}
                          </option>
                        ))}
                      </>
                    </SelectField>
                  ) : (
                    <SelectField
                      label={translations?.issueCountry as string}
                      name="idIssueCountry"
                      onChange={handleChange}
                      defaultValue={""}
                      required={true}
                    >
                      <>
                        <option value={""} disabled>
                          {translations?.pleaseSelectCountry as string}
                        </option>
                        {countries.result.map((option) => (
                          <option
                            key={option.id}
                            value={option.id}
                            onClick={() => hanldeIDType(option.id)}
                          >
                            {option[`name_${locale}`]}
                          </option>
                        ))}
                      </>
                    </SelectField>
                  )}
                  <InputField
                    label={translations?.licenseNumber as string}
                    placeholder="2529283364"
                    type="text"
                    onChange={handleChange}
                    value={data.licenseNo}
                    name={"licenseNo"}
                    required={true}
                  />

                  <InputField
                    label={translations?.fullName_ar as string}
                    placeholder="zeshan"
                    type="text"
                    onChange={handleChange}
                    value={data.fullname_ar}
                    name={"fullname_ar"}
                    required={true}
                  />
                  <InputField
                    label={translations?.iDExpiryDateHijri as string}
                    placeholder="HijriDate 20/04/1445"
                    type="text"
                    value={data.idExpiryDate_hijri}
                    onChange={handleChange}
                    name={"idExpiryDate_hijri"}
                    required={true}
                  />
                  <InputField
                    label={translations?.licenseExphijri as string}
                    placeholder="HijriDate 20/04/1445"
                    type="text"
                    onChange={handleChange}
                    value={data.licExpiryDate_hijri}
                    name={"licExpiryDate_hijri"}
                    required={true}
                  />

                  <InputField
                    label={translations?.licenseExpiry as string}
                    placeholder=""
                    type="date"
                    onChange={handleChange}
                    name={"licenseExpDate_gregorian"}
                    required={true}
                  />

                  <InputField
                    label={translations?.mobileNumber as string}
                    placeholder="966581955852"
                    type="text"
                    value={data.mobileNo}
                    onChange={handleChange}
                    name={"mobileNo"}
                    required={true}
                  />

                  <InputField
                    label={translations?.employer as string}
                    placeholder="zadip"
                    type="text"
                    value={data.employerName}
                    onChange={handleChange}
                    name={"employerName"}
                    required={true}
                  />

                  <SelectField
                    label={translations?.cityofresidence as string}
                    name="residentCity"
                    onChange={handleChange}
                    defaultValue={""}
                    required={true}
                  >
                    <>
                      <option value={""} disabled>
                        {translations?.pleaseSelectCity as string}
                      </option>
                      {cities.result.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option[`name_${locale}`]}
                        </option>
                      ))}
                    </>
                  </SelectField>

                  <SelectField
                    label={translations?.priceList as string}
                    name="pricelist"
                    onChange={handleChange}
                    defaultValue={""}
                    required={true}
                  >
                    <>
                      <option value={""} disabled>
                        {translations?.pleaseSelectPriceList as string}
                      </option>
                      {pricelist.result.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option[`name_${locale}`]}
                        </option>
                      ))}
                    </>
                  </SelectField>
                  <InputField
                    label={translations?.workPhone as string}
                    placeholder="966581955852"
                    type="text"
                    value={data.workPhone}
                    onChange={handleChange}
                    name={"workPhone"}
                    required={true}
                  />

                  <InputField
                    label={translations?.email as string}
                    placeholder="zeshan@gmail.com"
                    type="email"
                    onChange={handleChange}
                    value={data.email}
                    name={"email"}
                    classname="customer-email"
                    required={true}
                  />
                  <SelectField
                    label={translations?.nationality as string}
                    name="nationality"
                    onChange={handleChange}
                    defaultValue={""}
                    required={true}
                    classname="customer-nationality"
                  >
                    <>
                      <option value={""} disabled>
                        {translations?.pleaseSelectNationality as string}
                      </option>
                      {countries.result.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option[`name_${locale}`]}
                        </option>
                      ))}
                    </>
                  </SelectField>

                  <InputField
                    label={translations?.dateofbirthhijri as string}
                    placeholder="20/04/1445"
                    type="text"
                    onChange={handleChange}
                    name={"dob_hijri"}
                    classname="nationality"
                    required={true}
                  />
                  <InputField
                    label={translations?.dateofBirth as string}
                    placeholder="zeshan@gmail.com"
                    type="date"
                    onChange={handleChange}
                    name={"dob_gregorian"}
                    required={true}
                    classname="nationality"
                  />
                  <SwitchesComponent
                    title={translations?.activeInactive as string}
                    info={""}
                    onchange={(e) => handleChangeStatus(e)}
                    name={"active"}
                    classname={"customer-switch"}
                    value={data.active}
                  />
                </>
              ) : (
                // ----------------------------company form start from here---------------------------------------
                <>
                  <IDValidateWrapper>
                    <InputField
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
                  <InputField
                    label="Compnay Name"
                    placeholder="zeshan"
                    type="text"
                    name={"Compnay name"}
                    required={true}
                  />

                  <InputField
                    label="Expiry Date"
                    placeholder="dd/mm/yyyy"
                    type="text"
                    name={"Expiry Date"}
                    required={true}
                  />

                  <InputField
                    label="phone"
                    placeholder="966581955852"
                    type="text"
                    name={"phone"}
                    required={true}
                  />

                  <SelectField
                    label="Price List"
                    name="Place of  issue"
                    // onChange={handleChange}
                    // value={data.cityId}
                    defaultValue={""}
                    required={true}
                  >
                    <>
                      <option value={""} disabled>
                        Please select price list...
                      </option>
                      {cities.result.map((option) => (
                        <option
                          key={option.id}
                          value={option.id}
                          defaultValue={""}
                        >
                          {option.name_en}
                        </option>
                      ))}
                    </>
                  </SelectField>

                  <InputField
                    label="VAT Number"
                    placeholder="4321566"
                    type="text"
                    name={"VAT"}
                    required={true}
                  />

                  <InputField
                    label="Employee Name"
                    placeholder="zeshan"
                    type="text"
                    name={"emp name"}
                    required={true}
                  />

                  <InputField
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
          <Title color={colors.sideBarBgColor}>
            <h3>{translations?.address as string}</h3>
          </Title>
          <FormBoxWrapper>
            <FormBox>
              <InputField
                label={translations?.buildingNumber as string}
                placeholder="1234"
                type="text"
                onChange={handleChange}
                name={"cA_buildingNo"}
                required={true}
              />
              <InputField
                label={translations?.city as string}
                placeholder="Riyadh"
                type="text"
                onChange={handleChange}
                name={"cA_City"}
                required={true}
              />
              <InputField
                label={translations?.streetName as string}
                placeholder="king fahad"
                type="text"
                onChange={handleChange}
                name={"cA_StreetName"}
                required={true}
              />{" "}
              <InputField
                label={translations?.country as string}
                placeholder="saudi arabia"
                type="text"
                onChange={handleChange}
                name={"cA_Country"}
                required={true}
              />
              <InputField
                label={translations?.district as string}
                placeholder="al malaz"
                type="text"
                onChange={handleChange}
                name={"cA_District"}
                required={true}
              />
              <InputField
                label={translations?.zipcode1 as string}
                placeholder="12664"
                type="text"
                onChange={handleChange}
                name={"cA_PostalCode"}
                required={true}
                classname="zip-code"
              />{" "}
              <InputField
                label={translations?.zipcode2 as string}
                placeholder="12664"
                type="text"
                onChange={handleChange}
                name={"cA_AdditionalPostalCode"}
                required={true}
                classname="zip-code"
              />
              <InputField
                label={translations?.additionalInformation as string}
                placeholder=""
                type="text"
                onChange={handleChange}
                name={"comments"}
                required={true}
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
              {translations?.save as string}
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => router.back()}
            >
              {translations?.cancel as string}
            </Button>
          </GroupButtons>
        </Box>
      </FormWrapper>
    </Container>
  );
};
export default AddCustomer;
