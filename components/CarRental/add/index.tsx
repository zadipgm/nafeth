import * as React from "react";
import { useTheme } from "styled-components";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
import InputComponent from "@/reuseableComponents/InputField";
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
    let url = "cars/Cars";
    await createPost(userName, userPassword, url, company, data).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire("Thank you!", "car has been Created!.", "success");
          // router.push("/cars");
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
      <Title color={colors.cyan}>
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
              <div>
                <label htmlFor="carPalte arabic">Car Plate in Arabic</label>
                <CarPlateInArabicWrapper>
                  <InputComponent
                    label="ح"
                    placeholder="ح"
                    type="text"
                    name={"plateText1_ar"}
                    value={data.plateText1_ar}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                  <InputComponent
                    label="ب"
                    placeholder="ب"
                    type="text"
                    name={"plateText2_ar"}
                    value={data.plateText2_ar}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                  <InputComponent
                    label="ا"
                    placeholder="ا"
                    type="text"
                    name={"plateText3_ar"}
                    value={data.plateText3_ar}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                </CarPlateInArabicWrapper>
              </div>
              <div>
                <label htmlFor="carPalte arabic">Plate Number</label>
                <InputComponent
                  label="Pate number"
                  placeholder="1234"
                  type="text"
                  name={"plateNo"}
                  value={data.plateNo}
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <div>
                <label htmlFor="carPalte arabic">Car Plate in English</label>
                <CarPlateInArabicWrapper>
                  <InputComponent
                    label="J"
                    placeholder="J"
                    type="text"
                    name={"plateText1_en"}
                    value={data.plateText1_en}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                  <InputComponent
                    label="B"
                    placeholder="B"
                    type="text"
                    name={"plateText2_en"}
                    value={data.plateText2_en}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                  <InputComponent
                    label="A"
                    placeholder="A"
                    type="text"
                    name={"plateText3_en"}
                    value={data.plateText3_en}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                </CarPlateInArabicWrapper>
              </div>
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Chassis Number"
                placeholder="WFER23453453"
                type="text"
                name={"chasisNo"}
                value={data.chasisNo}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Purchase Amount"
                placeholder=""
                type="text"
                name={"puchaseCost"}
                value={data.puchaseCost}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label=""
                placeholder=""
                type="date"
                name={"buyingDate"}
                value={data.buyingDate}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Serial number"
                placeholder="3453453"
                type="text"
                name={"sequenceNo"}
                value={data.sequenceNo}
                onChange={handleChange}
                required={true}
              />
              <TextField
                select
                label="make"
                name="makeID"
                onChange={handleChange}
                defaultValue={""}
              >
                {carMake.result.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.id}
                    onClick={() => handleCarMakeID(option.id)}
                  >
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Transmission"
                name="transmissionID"
                onChange={handleChange}
                defaultValue={""}
              >
                {carTransmission.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="mileage"
                placeholder="mileage"
                type="text"
                name={"mileage"}
                value={data.mileage}
                onChange={handleChange}
                required={true}
              />
              <TextField
                select
                label="model"
                name="modelID"
                onChange={handleChange}
                defaultValue={""}
              >
                {modelID?.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="color"
                name="colorID"
                onChange={handleChange}
                defaultValue={""}
              >
                {carColor.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox color={isTheme().color} className="car-fuel-types-section">
              <TextField
                select
                label="Fuel Type"
                name="fuelTypeID"
                onChange={handleChange}
                defaultValue={""}
              >
                {carFuel.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Plate Type"
                name="plateTypeID"
                onChange={handleChange}
                defaultValue={""}
              >
                {carPlateType.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                defaultValue={""}
                label="Car Type"
                name="carTypeID"
                onChange={handleChange}
              >
                {carType.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox color={isTheme().color} className="car-typeID">
              <TextField
                select
                label="Branch"
                name="branchID"
                onChange={handleChange}
                defaultValue={""}
              >
                {branches.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="year"
                name="year"
                onChange={handleChange}
                defaultValue={""}
              >
                {years.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </FormBox>
          </FormBoxWrapper>
          <Title color={colors.cyan}>
            <h2>Rental Details</h2>
          </Title>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Daily Rent"
                placeholder="30"
                type="text"
                name={"dailyRent"}
                value={data.dailyRent}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Weekly Rent"
                placeholder="345"
                type="text"
                name={"weeklyRent"}
                value={data.weeklyRent}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="monthlyRent"
                placeholder="2122"
                type="text"
                name={"monthlyRent"}
                value={data.monthlyRent}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Min Daily Rent"
                placeholder="3453453"
                type="text"
                name={"minDailyRent"}
                value={data.minDailyRent}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Per Extra KM"
                placeholder="0.25"
                type="text"
                name={"perExtraKM"}
                value={data.perExtraKM}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Daily KM limit"
                placeholder="200"
                type="text"
                name={"dailyKMlimit"}
                value={data.dailyKMlimit}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Grace Hours"
                placeholder="3"
                type="text"
                name={"graceHours"}
                value={data.graceHours}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Full Fuel Cost"
                placeholder=""
                type="text"
                name={"fullFuelCost"}
                value={data.fullFuelCost}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
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
          <Title color={colors.cyan}>
            <h2>Other details</h2>
          </Title>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <TextField
                select
                label="Insurance Company"
                name="insuranceID"
                onChange={handleChange}
                defaultValue={""}
              >
                {carInsurance.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Insurance Type"
                name="insuranceTypeID"
                onChange={handleChange}
                defaultValue={""}
              >
                {carInsuranceType.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
              <InputComponent
                label="Policy No"
                placeholder="3453453"
                type="text"
                name={"policyNo"}
                value={data.policyNo}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Insurance Expiry"
                placeholder=""
                type="date"
                name={"insuranceExpDate"}
                value={data.insuranceExpDate}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Registration Expiry "
                placeholder="dd/mm/yyyy"
                type="text"
                name={"registrationExpHijiri"}
                value={data.registrationExpHijiri}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Inspection Expiry"
                placeholder="dd/mm/yyyy"
                type="text"
                name={"inspectionExpHijiri"}
                value={data.inspectionExpHijiri}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Insurance Penality"
                placeholder="100"
                type="text"
                name={"insurancePenality"}
                value={data.insurancePenality}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Operating Card No"
                placeholder="100"
                type="text"
                name={"operatingCardNo"}
                value={data.operatingCardNo}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Operating Card IssueDate"
                placeholder="dd/mm/yyyy"
                type="text"
                name={"operatingCardIssueDate"}
                value={data.operatingCardIssueDate}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Operating Card Expiry Date"
                placeholder="dd/mm/yyyy"
                type="text"
                name={"operatingCardExpDate"}
                value={data.operatingCardExpDate}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <TextField
                select
                label="Insurance Type"
                name="insuranceTypeID"
                onChange={handleChange}
                defaultValue={""}
              >
                {carInsuranceType.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
            </FormBox>
            <FormBox color={isTheme().color}>
              <SwitchesComponent
                title="Active/Inactive"
                info={""}
                onchange={(e) => handleChangeStatus(e)}
                name={"active"}
                classname={"car-switch"}
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
