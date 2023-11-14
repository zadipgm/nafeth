import * as React from "react";
import { useTheme } from "styled-components";
import { Box, Button } from "@mui/material";
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
import { CarPlateInArabicWrapper, CarPlateNumberInputWrapper } from "../style";
import { ILookUp } from "@/models/lookup";
import { fetchData } from "@/api/fetchapis/fetchData";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import Swal from "sweetalert2";
import { Update } from "@/api/putApis/update";
import { ICarModel } from "@/models/carmodel";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";
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
  const { colors, translations } = useTheme();
  const router = useRouter();
  const [data, setData] = React.useState(object);
  const [modelID, setModelID] = React.useState<ILookUp>();
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
  React.useEffect(() => {
    handleCarMakeID(data.makeID);
  }, [data.makeID]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `cars/${data.id}`;

    await Update(userName, userPassword, url, company, data).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire("Thank you!", "car has been Updated!.", "success");
          router.push("/cars");
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
  const years = Array.from(
    { length: 50 },
    (_, index) => new Date().getFullYear() - index
  );
  return (
    <Container>
      <Title color={colors.sideBarBgColor}>
        <h2>{translations?.editCar as string}</h2>
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
            <FormBox className="Car-plate">
              <CarPlateNumberInputWrapper>
                <InputField
                  label="ح"
                  placeholder="ح"
                  type="text"
                  name={"plateText1_ar"}
                  defaultValue={data.plateText1_ar}
                  onChange={handleChange}
                  required={true}
                  classname="car-plate-arabic"
                  maxLength={1}
                />
                <InputField
                  label="ب"
                  placeholder="ب"
                  type="text"
                  name={"plateText2_ar"}
                  defaultValue={data.plateText2_ar}
                  onChange={handleChange}
                  required={true}
                  classname="car-plate-arabic"
                  maxLength={1}
                />
                <InputField
                  label="ا"
                  placeholder="ا"
                  type="text"
                  name={"plateText3_ar"}
                  defaultValue={data.plateText3_ar}
                  onChange={handleChange}
                  required={true}
                  classname="car-plate-arabic"
                  maxLength={1}
                />
                <InputField
                  label={translations?.carPlateNumber as string}
                  placeholder="1234"
                  type="number"
                  name={"plateNo"}
                  defaultValue={data.plateNo}
                  onChange={handleChange}
                  required={true}
                  maxLength={4}
                />
                <InputField
                  label="J"
                  placeholder="J"
                  type="text"
                  name={"plateText1_en"}
                  defaultValue={data.plateText1_en}
                  onChange={handleChange}
                  required={true}
                  classname="car-plate-arabic"
                  maxLength={1}
                />
                <InputField
                  label="B"
                  placeholder="B"
                  type="text"
                  name={"plateText2_en"}
                  defaultValue={data.plateText2_en}
                  onChange={handleChange}
                  required={true}
                  classname="car-plate-arabic"
                  maxLength={1}
                />
                <InputField
                  label="A"
                  placeholder="A"
                  type="text"
                  name={"plateText3_en"}
                  defaultValue={data.plateText3_en}
                  onChange={handleChange}
                  required={true}
                  classname="car-plate-arabic"
                  maxLength={1}
                />
              </CarPlateNumberInputWrapper>
              <InputField
                label={translations?.chassisNumber as string}
                placeholder="WFER23453453"
                type="text"
                name={"chasisNo"}
                defaultValue={data.chasisNo}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.purchaseAmount as string}
                placeholder="23.00"
                type="number"
                name={"puchaseCost"}
                defaultValue={data.puchaseCost}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.buyingDate as string}
                placeholder=""
                type="date"
                name={"buyingDate"}
                defaultValue={data.buyingDate}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.serialnumber as string}
                placeholder="3453453"
                type="number"
                name={"sequenceNo"}
                defaultValue={data.sequenceNo}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label={translations?.make as string}
                name="makeID"
                onChange={handleCarMakeID}
                defaultValue={data.makeID}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.selectcarmake as string}
                  </option>
                  {carMake.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label={translations?.model as string}
                name="modelID"
                onChange={handleChange}
                defaultValue={data.modelID}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.selectcarmodel as string}
                  </option>
                  {modelID?.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label={translations?.Transmission as string}
                name="transmissionID"
                onChange={handleChange}
                defaultValue={data.transmissionID}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.pleaseSelecttransmission as string}
                  </option>
                  {carTransmission.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>

              <InputField
                label={translations?.mileage as string}
                placeholder="mileage"
                type="text"
                name={"mileage"}
                defaultValue={data.mileage}
                onChange={handleChange}
                required={true}
              />

              <SelectField
                label={translations?.color as string}
                name="colorID"
                onChange={handleChange}
                defaultValue={data.colorID}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.pleaseSelectcolor as string}
                  </option>
                  {carColor.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label={translations?.fuelType as string}
                name="fuelTypeID"
                onChange={handleChange}
                defaultValue={data.fuelTypeID}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.pleaseSelectfueltype as string}
                  </option>
                  {carFuel.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label={translations?.plateType as string}
                name="plateTypeID"
                onChange={handleChange}
                defaultValue={data.plateTypeID}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.pleaseSelectPlateType as string}
                  </option>
                  {carPlateType.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}{" "}
                </>
              </SelectField>
              <SelectField
                defaultValue={data.carTypeID}
                label={translations?.carType as string}
                name="carTypeID"
                onChange={handleChange}
                required={true}
              >
                <>
                  <option value="" disabled>
                    {translations?.pleaseselectcartype as string}
                  </option>
                  {carType.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>

              <SelectField
                label={translations?.branch as string}
                name="branchID"
                onChange={handleChange}
                defaultValue={data.branchID}
                required={true}
              >
                <>
                  <option value="" disabled>
                    {translations?.pleaseselectBranch as string}
                  </option>
                  {branches.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label={translations?.year as string}
                name="year"
                onChange={handleChange}
                defaultValue={data.year}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.pleaseselectyear as string}
                  </option>
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
            <h2>{translations?.rentalDetails as string}</h2>
          </Title>
          <FormBoxWrapper>
            <FormBox>
              <InputField
                label={translations?.dailyRent as string}
                placeholder="30"
                type="text"
                name={"dailyRent"}
                defaultValue={data.dailyRent}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.weeklyRent as string}
                placeholder="345"
                type="text"
                name={"weeklyRent"}
                defaultValue={data.weeklyRent}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.monthlyRent as string}
                placeholder="2122"
                type="text"
                name={"monthlyRent"}
                defaultValue={data.monthlyRent}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.minDailyRent as string}
                placeholder="70"
                type="text"
                name={"minDailyRent"}
                defaultValue={data.minDailyRent}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.perExtraKM as string}
                placeholder="0.25"
                type="text"
                name={"perExtraKM"}
                defaultValue={data.perExtraKM}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.dailyKMLimit as string}
                placeholder="200"
                type="text"
                name={"dailyKMlimit"}
                defaultValue={data.dailyKMlimit}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.graceHours as string}
                placeholder="3"
                type="text"
                name={"graceHours"}
                defaultValue={data.graceHours}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.falseullFuelCost as string}
                placeholder=""
                type="text"
                name={"fullFuelCost"}
                defaultValue={data.fullFuelCost}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.graceCharge as string}
                placeholder="3453453"
                type="text"
                name={"graceCharge"}
                defaultValue={data.graceCharge}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
          </FormBoxWrapper>
          <Title color={colors.sideBarBgColor}>
            <h2>{translations?.otherdetails as string}</h2>
          </Title>
          <FormBoxWrapper>
            <FormBox>
              <SelectField
                label={translations?.insuranceCompany as string}
                name="insuranceID"
                onChange={handleChange}
                defaultValue={data.insuranceID}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.pleaseselectinsurancecompany as string}
                  </option>
                  {carInsurance.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label={translations?.insuranceType as string}
                name="insuranceTypeID"
                onChange={handleChange}
                required={true}
                defaultValue={data.insuranceTypeID}
              >
                <>
                  <option value={""} disabled>
                    {translations?.pleaseselectinsurancetype as string}
                  </option>
                  {carInsuranceType.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name_en}
                    </option>
                  ))}
                </>
              </SelectField>
              <InputField
                label={translations?.policyNo as string}
                placeholder="3453453"
                type="text"
                name={"policyNo"}
                defaultValue={data.policyNo}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.insuranceExpiry as string}
                placeholder=""
                type="date"
                name={"insuranceExpDate"}
                defaultValue={data.insuranceExpDate}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.registrationExpiry as string}
                placeholder="14/02/1445"
                type="text"
                name={"registrationExpHijiri"}
                defaultValue={data.registrationExpHijiri}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.inspectionExpiry as string}
                placeholder="14/02/1445"
                type="text"
                name={"inspectionExpHijiri"}
                defaultValue={data.inspectionExpHijiri}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.insurancePenality as string}
                placeholder="100"
                type="text"
                name={"insurancePenality"}
                defaultValue={data.insurancePenality}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.operatingCardNo as string}
                placeholder="100"
                type="text"
                name={"operatingCardNo"}
                defaultValue={data.operatingCardNo}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.operatingCardIssueDate as string}
                placeholder="14/02/1445"
                type="text"
                name={"operatingCardIssueDate"}
                defaultValue={data.operatingCardIssueDate}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.operatingCardExpiryDate as string}
                placeholder="14/02/1445"
                type="text"
                name={"operatingCardExpDate"}
                defaultValue={data.operatingCardExpDate}
                onChange={handleChange}
                required={true}
              />

              <SwitchesComponent
                title={translations?.activeInactive as string}
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
    </Container>
  );
};
export default AddCar;
