import * as React from "react";
import { AddBranchContainer, Title } from "../style";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "../../compnaySettings/style";
import { Box, Button } from "@mui/material";
import { tajeerLicense } from "@/global/fakeData";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { useRouter } from "next/router";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import SimpleGoogleMap from "@/reuseableComponents/map/googlemap";
import { IBranchModel } from "@/models/branch";
import { ICountriesModel } from "@/models/country";
import { ICitiesModel } from "@/models/city";
import { IRegions } from "@/models/regions";
import { Update } from "@/api/putApis/update";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import Swal from "sweetalert2";
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";

interface IProps {
  branches: IBranchModel;
  countries: ICountriesModel;
  cities: ICitiesModel;
  regions: IRegions;
}
const EditBranch = ({ branches, countries, cities, regions }: IProps) => {
  const router = useRouter();
  const { translations, isLTR, colors } = useTheme();
  const [data, setData] = React.useState(branches.result[0]);
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
    let body = {
      name_en: data.name_en,
      name_ar: data.name_ar,
      regionId: data.region.id,
      countryId: data.country.id,
      cityId: data.city.id,
      address: data.address,
      email: data.email,
      phone: data.phone,
      poBox: data.poBox,
      fax: data.fax,
      tajeerLicenseNo: data.tajeerLicenseNo,
      latitude: data.latitude,
      longitude: data.longitude,
      active: data.active,
    };
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `settings/branches/${data.id}`;

    await Update(userName, userPassword, url, company, body).then(
      (res: any) => {
        if (res.data.message === "Success") {
          Swal.fire("Thank you!", "Branch has been Updated!.", "success");
          router.push("/branches");
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

  return (
    <>
      <AddBranchContainer>
        <Title color={colors.sideBarBgColor}>
          <h2>{translations?.updateBranchInformation}</h2>
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
              <FormBox>
                <InputField
                  label={translations?.fullName_en as string}
                  placeholder="English Name"
                  type="text"
                  value={data?.name_en}
                  name={"name_en"}
                  onChange={handleChange}
                  required={true}
                />
                <InputField
                  label={translations?.fullName_ar as string}
                  placeholder="Arabic Name"
                  type="text"
                  name={"name_ar"}
                  value={data?.name_ar}
                  onChange={handleChange}
                  required={true}
                />
                <SelectField
                  label={translations?.city as string}
                  name="cityId"
                  onChange={handleChange}
                  defaultValue={data?.city.id}
                  required
                >
                  <>
                    <option value={""} disabled>
                      {translations?.pleaseSelectCity as string}
                    </option>
                    {cities.result.map((option) => (
                      <option key={option.id} value={option.id}>
                        {isLTR ? option.name_en : option.name_en}
                      </option>
                    ))}
                  </>
                </SelectField>
                <SelectField
                  label={translations?.country as string}
                  name="countryId"
                  defaultValue={data?.country.id}
                  required
                  onChange={handleChange}
                >
                  <>
                    <option value="" disabled>
                      {translations?.pleaseSelectCountry as string}
                    </option>
                    {countries.result.map((option) => (
                      <option key={option.id} value={option.id}>
                        {isLTR ? option.name_en : option.name_en}
                      </option>
                    ))}
                  </>
                </SelectField>
                <InputField
                  label={translations?.mobileNumber as string}
                  placeholder="0581955852"
                  type="text"
                  value={!Number(data?.phone) ? "" : data?.phone}
                  name={"phone"}
                  onChange={handleChange}
                  required={true}
                />
                <SelectField
                  label={translations?.tajeerLicenseNo as string}
                  onChange={handleChange}
                  defaultValue={data.tajeerLicenseNo}
                  value={data.tajeerLicenseNo}
                  name="tajeerLicenseNo"
                  required
                >
                  <>
                    <option value="" disabled>
                      {translations?.pleaseSelectTajeerLicenseNumber as string}
                    </option>
                    {tajeerLicense.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>

                <InputField
                  label={translations?.address as string}
                  placeholder="7001234576"
                  type="text"
                  value={data?.address}
                  name={"address"}
                  onChange={handleChange}
                  required={true}
                />
                <InputField
                  label={translations?.faxNumber as string}
                  placeholder="966114003880"
                  type="text"
                  value={!Number(data?.fax) ? "" : data?.fax}
                  name={"fax"}
                  onChange={handleChange}
                  required={true}
                />
                <InputField
                  label={translations?.latitude as string}
                  placeholder="24.716318063611002"
                  type="text"
                  value={data?.latitude}
                  name={"latitude"}
                  onChange={handleChange}
                  required={true}
                />
                <InputField
                  label={translations?.longitude as string}
                  placeholder="24.716318063611002"
                  type="text"
                  value={data?.longitude}
                  name={"longitude"}
                  onChange={handleChange}
                  required={true}
                />

                <InputField
                  label={translations?.email as string}
                  placeholder="abc@gmail.com"
                  type="email"
                  value={data?.email}
                  name={"email"}
                  onChange={handleChange}
                  required={true}
                />
                <InputField
                  label={translations?.pOBoxNumber as string}
                  placeholder="966114003880"
                  type="text"
                  name={"poBox"}
                  value={!Number(data?.poBox) ? "" : data?.poBox}
                  onChange={handleChange}
                  required={true}
                />

                <SelectField
                  label={translations?.region as string}
                  defaultValue={regions.result[0].id}
                  name="regionId"
                  value={data.region.id}
                  onChange={handleChange}
                >
                  <>
                    <option value="" disabled>
                      {translations?.pleaseSelectRegion as string}
                    </option>
                    {regions.result.map((option) => (
                      <option key={option.id} value={option.id}>
                        {isLTR ? option.name_en : option.name_en}
                      </option>
                    ))}
                  </>
                </SelectField>
                <SwitchesComponent
                  title={translations?.activeInactive as string}
                  info={""}
                  onchange={(e) => handleChangeStatus(e)}
                  name={"active"}
                  classname={"branch-switch"}
                  defaultChecked={data.active === "Y" ? true : false}
                  value={data.active}
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
                {translations?.update}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => router.back()}
              >
                {translations?.cancel}
              </Button>
            </GroupButtons>
          </Box>
        </FormWrapper>
      </AddBranchContainer>
      <SimpleGoogleMap
        lat={Number(data?.latitude)}
        long={Number(data?.longitude)}
        height={"50vh"}
        isLoading={true}
      />
    </>
  );
};
export default EditBranch;
