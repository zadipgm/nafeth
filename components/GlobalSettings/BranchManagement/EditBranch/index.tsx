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
  const { isLTR, colors } = useTheme();
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
        console.log("updated", res.data.message);
        if (res.data.message === "Success") {
          Swal.fire("Thank you!", "Branch has been Updated!.", "success");
          router.push("/branches");
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

  return (
    <>
      <AddBranchContainer>
        <Title color={colors.sideBarBgColor}>
          <h2>Update branch information</h2>
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
                <InputField
                  label="English Name"
                  placeholder="English Name"
                  type="text"
                  value={data?.name_en}
                  name={"name_en"}
                  onChange={handleChange}
                  required={true}
                />
                <SelectField
                  label="City"
                  name="cityId"
                  onChange={handleChange}
                  defaultValue={data?.city.id}
                  required
                >
                  <>
                    {cities.result.map((option) => (
                      <option key={option.id} value={option.id}>
                        {isLTR ? option.name_en : option.name_en}
                      </option>
                    ))}
                  </>
                </SelectField>
                <InputField
                  label="Phone"
                  placeholder="0581955852"
                  type="text"
                  value={!Number(data?.phone) ? "" : data?.phone}
                  name={"phone"}
                  onChange={handleChange}
                  required={true}
                />
                <SelectField
                  label="License Number - Tajeer"
                  onChange={handleChange}
                  defaultValue={data.tajeerLicenseNo}
                  value={data.tajeerLicenseNo}
                  name="tajeerLicenseNo"
                  required
                >
                  <>
                    {tajeerLicense.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>

                <InputField
                  label="Arabic Name"
                  placeholder="Arabic Name"
                  type="text"
                  name={"name_ar"}
                  value={data?.name_ar}
                  onChange={handleChange}
                  required={true}
                />
                <InputField
                  label="Address"
                  placeholder="7001234576"
                  type="text"
                  value={data?.address}
                  name={"address"}
                  onChange={handleChange}
                  required={true}
                />
                <InputField
                  label="Fax Number"
                  placeholder="966114003880"
                  type="text"
                  value={!Number(data?.fax) ? "" : data?.fax}
                  name={"fax"}
                  onChange={handleChange}
                  required={true}
                />
                <InputField
                  label="Latitude"
                  placeholder="24.716318063611002"
                  type="text"
                  value={data?.latitude}
                  name={"latitude"}
                  onChange={handleChange}
                  required={true}
                />

                <SelectField
                  label="Country"
                  name="countryId"
                  defaultValue={data?.country.id}
                  required
                  onChange={handleChange}
                >
                  <>
                    {countries.result.map((option) => (
                      <option key={option.id} value={option.id}>
                        {isLTR ? option.name_en : option.name_en}
                      </option>
                    ))}
                  </>
                </SelectField>
                <InputField
                  label="Email"
                  placeholder="abc@gmail.com"
                  type="email"
                  value={data?.email}
                  name={"email"}
                  onChange={handleChange}
                  required={true}
                />
                <InputField
                  label="PO BOX"
                  placeholder="966114003880"
                  type="text"
                  name={"poBox"}
                  value={!Number(data?.poBox) ? "" : data?.poBox}
                  onChange={handleChange}
                  required={true}
                />
                <InputField
                  label="Longitude"
                  placeholder="24.716318063611002"
                  type="text"
                  value={data?.longitude}
                  name={"longitude"}
                  onChange={handleChange}
                  required={true}
                />

                <SwitchesComponent
                  title="Active/Inactive"
                  info={""}
                  onchange={(e) => handleChangeStatus(e)}
                  name={"active"}
                  classname={"branch-switch"}
                  defaultChecked={data.active === "Y" ? true : false}
                  value={data.active}
                />
                <SelectField
                  label="Region"
                  defaultValue={regions.result[0].id}
                  name="regionId"
                  value={data.region.id}
                  onChange={handleChange}
                >
                  <>
                    {regions.result.map((option) => (
                      <option key={option.id} value={option.id}>
                        {isLTR ? option.name_en : option.name_en}
                      </option>
                    ))}
                  </>
                </SelectField>
              </FormBox>
            </FormBoxWrapper>

            <GroupButtons>
              <Button
                variant="contained"
                color="success"
                className="add-branch-save-button"
                type="submit"
              >
                update
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
        lat={Number(data?.latitude)}
        long={Number(data?.longitude)}
        height={"50vh"}
        isLoading={true}
      />
    </>
  );
};
export default EditBranch;
