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
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";
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
  const { colors, locale, translations } = useTheme();
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `customers/${data.id}`;
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
        <h2>{translations?.editCustomer as string}</h2>
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
                defaultValue={data.id}
                name={"name_en"}
                disabled={true}
                required={true}
              />
              <SelectField
                label={translations?.category as string}
                name="category"
                onChange={handleChange}
                defaultValue={data.category}
                required={true}
              >
                <>
                  <option value="" disabled>
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
                    label="IDType"
                    name="idType"
                    onChange={handleChange}
                    defaultValue={data.idType}
                    required={true}
                  >
                    <>
                      <option value="" disabled>
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
                      defaultValue={data.idNumber}
                      onChange={handleChange}
                      disabled={true}
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
                      {translations?.validate as string}
                    </Button>
                    {IDTypes === 1 || IDTypes === 2 ? (
                      <InputField
                        label={translations?.iDVersionNo as string}
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
                  <InputField
                    label={translations?.iDExpiryDate as string}
                    placeholder=""
                    type="date"
                    onChange={handleChange}
                    defaultValue={data.idExpiryDate_gregorian}
                    name={"idExpiryDate_gregorian"}
                    required={true}
                  />

                  <InputField
                    label={translations?.fullName_en as string}
                    placeholder="zeshan"
                    type="text"
                    onChange={handleChange}
                    defaultValue={data.fullname_en}
                    name={"fullname_en"}
                    required={true}
                  />
                  {IDTypes === 1 || IDTypes === 2 ? (
                    <SelectField
                      label={translations?.issueCity as string}
                      name="idissuecity"
                      onChange={handleChange}
                      defaultValue={data.idissuecity}
                      required={true}
                    >
                      <>
                        <option value="" disabled>
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
                      defaultValue={data.idIssueCountry}
                      required={true}
                    >
                      <>
                        <option value="" disabled>
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
                    defaultValue={data.licenseNo}
                    name={"licenseNo"}
                    required={true}
                  />

                  <InputField
                    label={translations?.fullName_ar as string}
                    placeholder="zeshan"
                    type="text"
                    onChange={handleChange}
                    defaultValue={data.fullname_ar}
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
                    defaultValue={data.idExpiryDate_hijri}
                    required={true}
                  />
                  <InputField
                    label={translations?.licenseExphijri as string}
                    placeholder="HijriDate 20/04/1445"
                    type="text"
                    onChange={handleChange}
                    defaultValue={data.licExpiryDate_hijri}
                    name={"licExpiryDate_hijri"}
                    required={true}
                  />

                  <InputField
                    label={translations?.licenseExpiry as string}
                    placeholder=""
                    type="date"
                    onChange={handleChange}
                    defaultValue={data.licenseExpDate_gregorian}
                    name={"licenseExpDate_gregorian"}
                    required={true}
                  />

                  <InputField
                    label={translations?.mobileNumber as string}
                    placeholder="966581955852"
                    type="text"
                    value={data.mobileNo}
                    onChange={handleChange}
                    defaultValue={data.mobileNo}
                    name={"mobileNo"}
                    required={true}
                  />

                  <InputField
                    label={translations?.employer as string}
                    placeholder="zadip"
                    type="text"
                    defaultValue={data.employerName}
                    onChange={handleChange}
                    name={"employerName"}
                    required={true}
                  />

                  <SelectField
                    label={translations?.cityofresidence as string}
                    name="residentCity"
                    onChange={handleChange}
                    defaultValue={data.residentCity}
                    required={true}
                  >
                    <>
                      <option value="" disabled>
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
                    defaultValue={data.pricelist}
                    required={true}
                  >
                    <>
                      <option value="" disabled>
                        {translations?.pleaseSelectPriceList as string}{" "}
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
                    defaultValue={data.workPhone}
                    onChange={handleChange}
                    name={"workPhone"}
                    required={true}
                  />

                  <InputField
                    label={translations?.email as string}
                    placeholder="zeshan@gmail.com"
                    type="email"
                    onChange={handleChange}
                    defaultValue={data.email}
                    name={"email"}
                    classname="customer-email"
                    required={true}
                  />
                  <SelectField
                    label={translations?.nationality as string}
                    name="nationality"
                    onChange={handleChange}
                    defaultValue={data.nationality}
                    required={true}
                  >
                    <>
                      <option value="" disabled>
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
                    defaultValue={data.dob_hijri}
                    name={"dob_hijri"}
                    classname="nationality"
                    required={true}
                  />
                  <InputField
                    label={translations?.dateofBirth as string}
                    placeholder=""
                    type="date"
                    onChange={handleChange}
                    defaultValue={data.dob_gregorian}
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
                    defaultChecked={data.active === "Y" ? true : false}
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
                defaultValue={data.cA_buildingNo}
                onChange={handleChange}
                name={"cA_buildingNo"}
                required={true}
              />
              <InputField
                label={translations?.city as string}
                placeholder="Riyadh"
                type="text"
                defaultValue={data.cA_City}
                onChange={handleChange}
                name={"cA_City"}
                required={true}
              />
              <InputField
                label={translations?.streetName as string}
                placeholder="king fahad"
                type="text"
                defaultValue={data.cA_StreetName}
                onChange={handleChange}
                name={"cA_StreetName"}
                required={true}
              />{" "}
              <InputField
                label={translations?.country as string}
                placeholder="saudi arabia"
                type="text"
                defaultValue={data.cA_Country}
                onChange={handleChange}
                name={"cA_Country"}
                required={true}
              />
              <InputField
                label={translations?.district as string}
                placeholder="al malaz"
                type="text"
                defaultValue={data.cA_District}
                onChange={handleChange}
                name={"cA_District"}
                required={true}
              />
              <InputField
                label={translations?.zipcode1 as string}
                placeholder="12664"
                type="text"
                defaultValue={data.cA_PostalCode}
                onChange={handleChange}
                name={"cA_PostalCode"}
                required={true}
                classname="zip-code"
              />{" "}
              <InputField
                label={translations?.zipcode2 as string}
                placeholder="12664"
                type="text"
                defaultValue={data.cA_AdditionalPostalCode}
                onChange={handleChange}
                name={"cA_AdditionalPostalCode"}
                required={true}
                classname="zip-code"
              />
              <InputField
                label={translations?.additionalInformation as string}
                placeholder=""
                type="text"
                defaultValue={data.comments}
                onChange={handleChange}
                name={"comments"}
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
              {translations?.update as string}
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
export default EditCustomer;
