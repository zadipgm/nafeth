import * as React from "react";
import { useTheme } from "styled-components";
import { Box, Button, MenuItem } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
import { useRouter } from "next/router";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Container } from "@/components/GlobalSettings/usersSettings/style";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { CarPlateInArabicWrapper } from "../style";
import { bodyObjectCar } from "@/global/fakeData";
import { ILookUp } from "@/models/lookup";
import { fetchData } from "@/api/fetchapis/fetchData";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import Swal from "sweetalert2";
import { createPost } from "@/api/postApis/createBranch";
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";
interface IProps {
  carTransmission: ILookUp;
  carInsuranceType: ILookUp;
  carPlateType: ILookUp;
  branches: ILookUp;
  carInsurance: ILookUp;
  carFuel: ILookUp;
  carColor: ILookUp;
  carType: ILookUp;
  carMake: ILookUp;
}
const AddCar = ({
  carTransmission,
  carInsurance,
  carPlateType,
  branches,
  carInsuranceType,
  carFuel,
  carColor,
  carType,
  carMake,
}: IProps) => {
  let obj = bodyObjectCar;
  const [data, setData] = React.useState(obj);
  const [modelID, setModelID] = React.useState<ILookUp>();
  const { colors } = useTheme();
  const router = useRouter();
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
  const handleCarMakeID = async (id: number) => {
    let username = getName() as string;
    let password = getPassword() as string;
    let company = getCompany() as string;
    await fetchData(username, password, `/lookup/CarModel/${id}`, company).then(
      (data) => setModelID(data)
    );
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = "cars/";
    await createPost(userName, userPassword, url, company, data).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire("Thank you!", "car has been Created!.", "success");
          router.push("/cars");
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

  const years = Array.from(
    { length: 50 },
    (_, index) => new Date().getFullYear() - index
  );
  return (
    <Container>
      <Title color={colors.sideBarBgColor}>
        <h2>Add New Car</h2>
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
            <FormBox color={isTheme().color} className="Car-plate">
              <InputField
                label="ح"
                placeholder="ح"
                type="text"
                name={"plateText1_ar"}
                value={data.plateText1_ar}
                onChange={handleChange}
                required={true}
                classname="car-plate-arabic"
              />
              <InputField
                label="ب"
                placeholder="ب"
                type="text"
                name={"plateText2_ar"}
                value={data.plateText2_ar}
                onChange={handleChange}
                required={true}
                classname="car-plate-arabic"
              />
              <InputField
                label="ا"
                placeholder="ا"
                type="text"
                name={"plateText3_ar"}
                value={data.plateText3_ar}
                onChange={handleChange}
                required={true}
                classname="car-plate-arabic"
              />

              <InputField
                label="J"
                placeholder="J"
                type="text"
                name={"plateText1_en"}
                value={data.plateText1_en}
                onChange={handleChange}
                required={true}
                classname="car-plate-arabic"
              />
              <InputField
                label="B"
                placeholder="B"
                type="text"
                name={"plateText2_en"}
                value={data.plateText2_en}
                onChange={handleChange}
                required={true}
                classname="car-plate-arabic"
              />
              <InputField
                label="A"
                placeholder="A"
                type="text"
                name={"plateText3_en"}
                value={data.plateText3_en}
                onChange={handleChange}
                required={true}
                classname="car-plate-arabic"
              />

              <InputField
                label="Pate number"
                placeholder="1234"
                type="text"
                name={"plateNo"}
                value={data.plateNo}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Chassis Number"
                placeholder="WFER23453453"
                type="text"
                name={"chasisNo"}
                value={data.chasisNo}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label="Purchase Amount"
                placeholder=""
                type="text"
                name={"puchaseCost"}
                value={data.puchaseCost}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Buying Date"
                placeholder=""
                type="date"
                name={"buyingDate"}
                value={data.buyingDate}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label="Serial number"
                placeholder="3453453"
                type="text"
                name={"sequenceNo"}
                value={data.sequenceNo}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label="make"
                name="makeID"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {carMake.result.map((option) => (
                    <option
                      key={option.id}
                      value={option.id}
                      onClick={() => handleCarMakeID(option.id)}
                    >
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label="model"
                name="modelID"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {modelID?.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label="Transmission"
                name="transmissionID"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {carTransmission.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>

              <InputField
                label="mileage"
                placeholder="mileage"
                type="text"
                name={"mileage"}
                value={data.mileage}
                onChange={handleChange}
                required={true}
              />

              <SelectField
                label="color"
                name="colorID"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {carColor.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label="Fuel Type"
                name="fuelTypeID"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {carFuel.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label="Plate Type"
                name="plateTypeID"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {carPlateType.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}{" "}
                </>
              </SelectField>
              <SelectField
                defaultValue={""}
                label="Car Type"
                name="carTypeID"
                onChange={handleChange}
              >
                <>
                  {carType.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>

              <SelectField
                label="Branch"
                name="branchID"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {branches.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label="year"
                name="year"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </>
              </SelectField>
            </FormBox>
          </FormBoxWrapper>
          <Title color={colors.sideBarBgColor}>
            <h2>Rental Details</h2>
          </Title>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputField
                label="Daily Rent"
                placeholder="30"
                type="text"
                name={"dailyRent"}
                value={data.dailyRent}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Weekly Rent"
                placeholder="345"
                type="text"
                name={"weeklyRent"}
                value={data.weeklyRent}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="monthlyRent"
                placeholder="2122"
                type="text"
                name={"monthlyRent"}
                value={data.monthlyRent}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label="Min Daily Rent"
                placeholder="3453453"
                type="text"
                name={"minDailyRent"}
                value={data.minDailyRent}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Per Extra KM"
                placeholder="0.25"
                type="text"
                name={"perExtraKM"}
                value={data.perExtraKM}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Daily KM limit"
                placeholder="200"
                type="text"
                name={"dailyKMlimit"}
                value={data.dailyKMlimit}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label="Grace Hours"
                placeholder="3"
                type="text"
                name={"graceHours"}
                value={data.graceHours}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Full Fuel Cost"
                placeholder=""
                type="text"
                name={"fullFuelCost"}
                value={data.fullFuelCost}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Grace Charge"
                placeholder="3453453"
                type="text"
                name={"graceCharge"}
                value={data.graceCharge}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
          </FormBoxWrapper>
          <Title color={colors.sideBarBgColor}>
            <h2>Other details</h2>
          </Title>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <SelectField
                label="Insurance Company"
                name="insuranceID"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {carInsurance.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label="Insurance Type"
                name="insuranceTypeID"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {carInsuranceType.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <InputField
                label="Policy No"
                placeholder="3453453"
                type="text"
                name={"policyNo"}
                value={data.policyNo}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label="Insurance Expiry"
                placeholder=""
                type="date"
                name={"insuranceExpDate"}
                value={data.insuranceExpDate}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Registration Expiry "
                placeholder="dd/mm/yyyy"
                type="text"
                name={"registrationExpHijiri"}
                value={data.registrationExpHijiri}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Inspection Expiry"
                placeholder="dd/mm/yyyy"
                type="text"
                name={"inspectionExpHijiri"}
                value={data.inspectionExpHijiri}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label="Insurance Penality"
                placeholder="100"
                type="text"
                name={"insurancePenality"}
                value={data.insurancePenality}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Operating Card No"
                placeholder="100"
                type="text"
                name={"operatingCardNo"}
                value={data.operatingCardNo}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Operating Card IssueDate"
                placeholder="dd/mm/yyyy"
                type="text"
                name={"operatingCardIssueDate"}
                value={data.operatingCardIssueDate}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label="Operating Card Expiry Date"
                placeholder="dd/mm/yyyy"
                type="text"
                name={"operatingCardExpDate"}
                value={data.operatingCardExpDate}
                onChange={handleChange}
                required={true}
              />

              <SelectField
                label="Insurance Type"
                name="insuranceTypeID"
                onChange={handleChange}
                defaultValue={""}
              >
                <>
                  {carInsuranceType.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>

              <SwitchesComponent
                title="Active/Inactive"
                info={""}
                onchange={(e) => handleChangeStatus(e)}
                name={"active"}
                value={data.active}
              />
            </FormBox>
          </FormBoxWrapper>
          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              className="add-car-save-button"
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
export default AddCar;
