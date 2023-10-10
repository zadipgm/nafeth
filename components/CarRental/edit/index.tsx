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
import { ILookUp } from "@/models/lookup";
import { fetchData } from "@/api/fetchapis/fetchData";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import Swal from "sweetalert2";
import { Update } from "@/api/putApis/update";
import { ICarModel } from "@/models/carmodel";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
interface IProps {
  cars: ICarModel;
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
  cars,
  carColor,
  carFuel,
  carInsurance,
  carInsuranceType,
  carMake,
  carPlateType,
  carTransmission,
  carType,
  branches,
}: IProps) => {
  let object = {
    id: cars.result[0].id,
    plateNo: cars.result[0].plateNo,
    plateText1_en: cars.result[0].plateText1_en.trim(),
    plateText2_en: cars.result[0].plateText2_en.trim(),
    plateText3_en: cars.result[0].plateText3_en.trim(),
    plateText1_ar: cars.result[0].plateText1_ar.trim(),
    plateText2_ar: cars.result[0].plateText2_ar.trim(),
    plateText3_ar: cars.result[0].plateText3_ar.trim(),
    plateTypeID: cars.result[0].plateType.id,
    chasisNo: cars.result[0].chasisNo,
    sequenceNo: cars.result[0].sequenceNo,
    buyingDate: cars.result[0].buyingDate,
    colorID: cars.result[0].color.id,
    carTypeID: cars.result[0].carType.id,
    transmissionID: cars.result[0].transmission.id,
    makeID: cars.result[0].make.id,
    modelID: cars.result[0].model.id,
    year: cars.result[0].year,
    mileage: cars.result[0].mileage,
    dailyRent: cars.result[0].dailyRent,
    weeklyRent: cars.result[0].weeklyRent,
    monthlyRent: cars.result[0].monthlyRent,
    minDailyRent: cars.result[0].minDailyRent,
    perExtraKM: cars.result[0].perExtraKM,
    dailyKMlimit: cars.result[0].dailyKMlimit,
    graceHours: cars.result[0].graceHours,
    graceCharge: cars.result[0].graceCharge,
    insuranceID: cars.result[0].insurance.id,
    insuranceTypeID: cars.result[0].insuranceType.id,
    policyNo: cars.result[0].policyNo,
    insurancePenality: cars.result[0].insurancePenality,
    insuranceExpDate: cars.result[0].insuranceExpDate,
    registrationExpHijiri: cars.result[0].registrationExpHijiri,
    inspectionExpHijiri: cars.result[0].inspectionExpHijiri,
    branchID: cars.result[0].branch.id,
    fuelTypeID: cars.result[0].fuelType.id,
    puchaseCost: cars.result[0].puchaseCost,
    fullFuelCost: cars.result[0].fullFuelCost,
    operatingCardNo: cars.result[0].operatingCardNo,
    operatingCardIssueDate: cars.result[0].operatingCardIssueDate,
    operatingCardExpDate: cars.result[0].operatingCardExpDate,
    active: cars.result[0].active,
  };
  const [data, setData] = React.useState(object);
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
    console.log(e.target.name, e.target.value);
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
  React.useEffect(() => {
    handleCarMakeID(data.makeID);
  }, [data.makeID]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `cars//${data.id}`;

    await Update(userName, userPassword, url, company, data).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire("Thank you!", "car has been Updated!.", "success");
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
              <div className="car-plate-number">
                <label htmlFor="carPalte arabic">Car Plate in Arabic</label>
                <CarPlateInArabicWrapper>
                  <InputComponent
                    label="ح"
                    placeholder="ح"
                    type="text"
                    name={"plateText1_ar"}
                    defaultValue={data.plateText1_ar}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                  <InputComponent
                    label="ب"
                    placeholder="ب"
                    type="text"
                    name={"plateText2_ar"}
                    defaultValue={data.plateText2_ar}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                  <InputComponent
                    label="ا"
                    placeholder="ا"
                    type="text"
                    name={"plateText3_ar"}
                    defaultValue={data.plateText3_ar}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                </CarPlateInArabicWrapper>
              </div>

              <div className="car-plate-number">
                <label htmlFor="carPalte arabic">Car Plate in English</label>
                <CarPlateInArabicWrapper>
                  <InputComponent
                    label="J"
                    placeholder="J"
                    type="text"
                    name={"plateText1_en"}
                    defaultValue={data.plateText1_en}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                  <InputComponent
                    label="B"
                    placeholder="B"
                    type="text"
                    name={"plateText2_en"}
                    defaultValue={data.plateText2_en}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                  <InputComponent
                    label="A"
                    placeholder="A"
                    type="text"
                    name={"plateText3_en"}
                    defaultValue={data.plateText3_en}
                    onChange={handleChange}
                    required={true}
                    classname="car-plate-arabic"
                  />
                </CarPlateInArabicWrapper>
              </div>
              <div className="car-plate-number">
                <label htmlFor="carPalte arabic">Plate Number</label>
                <CarPlateInArabicWrapper>
                  <InputComponent
                    label="Pate number"
                    placeholder="1234"
                    type="text"
                    name={"plateNo"}
                    defaultValue={data.plateNo}
                    onChange={handleChange}
                    required={true}
                  />
                  <InputComponent
                    label="Chassis Number"
                    placeholder="WFER23453453"
                    type="text"
                    name={"chasisNo"}
                    defaultValue={data.chasisNo}
                    onChange={handleChange}
                    required={true}
                  />
                </CarPlateInArabicWrapper>
              </div>
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Purchase Amount"
                placeholder=""
                type="text"
                name={"puchaseCost"}
                defaultValue={data.puchaseCost}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Buying Date"
                type="date"
                name={"buyingDate"}
                defaultValue={data.buyingDate}
                onChange={handleChange}
                required={true}
              />

              <InputComponent
                label="Serial number"
                placeholder="3453453"
                type="text"
                name={"sequenceNo"}
                defaultValue={data.sequenceNo}
                onChange={handleChange}
                required={true}
              />
              <TextField
                select
                label="make"
                name="makeID"
                onChange={handleChange}
                defaultValue={data.makeID}
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
                defaultValue={data.transmissionID}
              >
                {carTransmission.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>

              <InputComponent
                label="mileage"
                placeholder="mileage"
                type="text"
                name={"mileage"}
                defaultValue={data.mileage}
                onChange={handleChange}
                required={true}
              />
              <TextField
                select
                label="model"
                name="modelID"
                onChange={handleChange}
                defaultValue={data.modelID}
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
                defaultValue={data.colorID}
              >
                {carColor.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Fuel Type"
                name="fuelTypeID"
                onChange={handleChange}
                defaultValue={data.fuelTypeID}
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
                defaultValue={data.plateTypeID}
              >
                {carPlateType.result.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name_en}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                defaultValue={data.carTypeID}
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

              <TextField
                select
                label="Branch"
                name="branchID"
                onChange={handleChange}
                defaultValue={data.branchID}
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
                defaultValue={data.year}
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
                defaultValue={data.dailyRent}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Weekly Rent"
                placeholder="345"
                type="text"
                name={"weeklyRent"}
                defaultValue={data.weeklyRent}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="monthlyRent"
                placeholder="2122"
                type="text"
                name={"monthlyRent"}
                defaultValue={data.monthlyRent}
                onChange={handleChange}
                required={true}
              />

              <InputComponent
                label="Min Daily Rent"
                placeholder="3453453"
                type="text"
                name={"minDailyRent"}
                defaultValue={data.minDailyRent}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Per Extra KM"
                placeholder="0.25"
                type="text"
                name={"perExtraKM"}
                defaultValue={data.perExtraKM}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Daily KM limit"
                placeholder="200"
                type="text"
                name={"dailyKMlimit"}
                defaultValue={data.dailyKMlimit}
                onChange={handleChange}
                required={true}
              />

              <InputComponent
                label="Grace Hours"
                placeholder="3"
                type="text"
                name={"graceHours"}
                defaultValue={data.graceHours}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Full Fuel Cost"
                placeholder=""
                type="text"
                name={"fullFuelCost"}
                defaultValue={data.fullFuelCost}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Grace Charge"
                placeholder="3453453"
                type="text"
                name={"graceCharge"}
                defaultValue={data.graceCharge}
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
                defaultValue={data.insuranceID}
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
                defaultValue={data.insuranceTypeID}
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
                defaultValue={data.policyNo}
                onChange={handleChange}
                required={true}
              />

              <InputComponent
                label="Insurance Expiry"
                type="date"
                name={"insuranceExpDate"}
                defaultValue={data.insuranceExpDate}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Registration Expiry "
                placeholder="dd/mm/yyyy"
                type="text"
                name={"registrationExpHijiri"}
                defaultValue={data.registrationExpHijiri}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Inspection Expiry"
                placeholder="dd/mm/yyyy"
                type="text"
                name={"inspectionExpHijiri"}
                defaultValue={data.inspectionExpHijiri}
                onChange={handleChange}
                required={true}
              />

              <InputComponent
                label="Insurance Penality"
                placeholder="100"
                type="text"
                name={"insurancePenality"}
                defaultValue={data.insurancePenality}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Operating Card No"
                placeholder="100"
                type="text"
                name={"operatingCardNo"}
                defaultValue={data.operatingCardNo}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Operating Card IssueDate"
                placeholder="100"
                type="text"
                name={"operatingCardIssueDate"}
                defaultValue={data.operatingCardIssueDate}
                onChange={handleChange}
                required={true}
              />

              <InputComponent
                label="Operating Card Expiry Date"
                placeholder="100"
                type="text"
                name={"operatingCardExpDate"}
                defaultValue={data.operatingCardExpDate}
                onChange={handleChange}
                required={true}
              />

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
export default AddCar;
