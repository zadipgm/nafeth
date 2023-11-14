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
import { CarPlateInArabicWrapper, CarPlateNumberInputWrapper } from "../style";
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
  const { colors, translations } = useTheme();
  const router = useRouter();
  const [data, setData] = React.useState(obj);
  const [modelID, setModelID] = React.useState<ILookUp>();
  const [makeID, setMakeID] = React.useState(0);
  let userName = getName() as string;
  let userPassword = getPassword() as string;
  let company = getCompany() as string;
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
  const handleCarMakeID = async (e: { target: { value: any } }) => {
    let id = Number(e.target.value);

    setMakeID(id);
    await fetchData(
      userName,
      userPassword,
      `/lookup/CarModel/${id}`,
      company
    ).then((data) => setModelID(data));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      plateNo: data.plateNo,
      plateText1_en: data.plateText1_en,
      plateText2_en: data.plateText2_en,
      plateText3_en: data.plateText3_en,
      plateText1_ar: data.plateText1_ar,
      plateText2_ar: data.plateText2_ar,
      plateText3_ar: data.plateText3_ar,
      plateTypeID: data.plateTypeID,
      chasisNo: data.chasisNo,
      sequenceNo: data.sequenceNo,
      buyingDate: data.buyingDate,
      colorID: data.colorID,
      carTypeID: data.carTypeID,
      transmissionID: data.transmissionID,
      makeID: makeID,
      modelID: modelID?.result[0].id,
      year: data.year,
      mileage: data.mileage,
      dailyRent: data.dailyRent,
      weeklyRent: data.weeklyRent,
      monthlyRent: data.monthlyRent,
      minDailyRent: data.minDailyRent,
      perExtraKM: data.perExtraKM,
      dailyKMlimit: data.dailyKMlimit,
      graceHours: data.graceHours,
      graceCharge: data.graceCharge,
      insuranceID: data.insuranceID,
      insuranceTypeID: data.insuranceTypeID,
      policyNo: data.policyNo,
      insurancePenality: data.insurancePenality,
      insuranceExpDate: data.insuranceExpDate,
      registrationExpHijiri: data.registrationExpHijiri,
      inspectionExpHijiri: data.inspectionExpHijiri,
      branchID: data.branchID,
      fuelTypeID: data.fuelTypeID,
      puchaseCost: data.puchaseCost,
      fullFuelCost: data.fullFuelCost,
      operatingCardNo: data.operatingCardNo,
      operatingCardIssueDate: data.operatingCardExpDate,
      operatingCardExpDate: data.operatingCardExpDate,
      active: data.active,
    };

    let url = "cars/";
    await createPost(userName, userPassword, url, company, body).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire("Thank you!", "car has been Created!.", "success");
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
        <h2>{translations?.addNewCar}</h2>
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
                  value={data.plateText1_ar}
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
                  value={data.plateText2_ar}
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
                  value={data.plateText3_ar}
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
                  value={data.plateNo}
                  onChange={handleChange}
                  required={true}
                  maxLength={4}
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
                  maxLength={1}
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
                  maxLength={1}
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
                  maxLength={1}
                />
              </CarPlateNumberInputWrapper>
              <InputField
                label={translations?.chassisNumber as string}
                placeholder="WFER23453453"
                type="text"
                name={"chasisNo"}
                value={data.chasisNo}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.purchaseAmount as string}
                placeholder="23.00"
                type="number"
                name={"puchaseCost"}
                value={data.puchaseCost}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.buyingDate as string}
                placeholder=""
                type="date"
                name={"buyingDate"}
                value={data.buyingDate}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.serialnumber as string}
                placeholder="3453453"
                type="number"
                name={"sequenceNo"}
                value={data.sequenceNo}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label={translations?.make as string}
                name="makeID"
                onChange={handleCarMakeID}
                defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={""}
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
                value={data.mileage}
                onChange={handleChange}
                required={true}
              />

              <SelectField
                label={translations?.color as string}
                name="colorID"
                onChange={handleChange}
                defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={""}
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
                defaultValue={""}
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
                value={data.dailyRent}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.weeklyRent as string}
                placeholder="345"
                type="text"
                name={"weeklyRent"}
                value={data.weeklyRent}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.monthlyRent as string}
                placeholder="2122"
                type="text"
                name={"monthlyRent"}
                value={data.monthlyRent}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.minDailyRent as string}
                placeholder="70"
                type="text"
                name={"minDailyRent"}
                value={data.minDailyRent}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.perExtraKM as string}
                placeholder="0.25"
                type="text"
                name={"perExtraKM"}
                value={data.perExtraKM}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.dailyKMLimit as string}
                placeholder="200"
                type="text"
                name={"dailyKMlimit"}
                value={data.dailyKMlimit}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.graceHours as string}
                placeholder="3"
                type="text"
                name={"graceHours"}
                value={data.graceHours}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.falseullFuelCost as string}
                placeholder=""
                type="text"
                name={"fullFuelCost"}
                value={data.fullFuelCost}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.graceCharge as string}
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
            <h2>{translations?.otherdetails as string}</h2>
          </Title>
          <FormBoxWrapper>
            <FormBox>
              <SelectField
                label={translations?.insuranceCompany as string}
                name="insuranceID"
                onChange={handleChange}
                defaultValue={""}
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
                defaultValue={""}
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
                value={data.policyNo}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.insuranceExpiry as string}
                placeholder=""
                type="date"
                name={"insuranceExpDate"}
                value={data.insuranceExpDate}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.registrationExpiry as string}
                placeholder="14/02/1445"
                type="text"
                name={"registrationExpHijiri"}
                value={data.registrationExpHijiri}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.inspectionExpiry as string}
                placeholder="14/02/1445"
                type="text"
                name={"inspectionExpHijiri"}
                value={data.inspectionExpHijiri}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.insurancePenality as string}
                placeholder="100"
                type="text"
                name={"insurancePenality"}
                value={data.insurancePenality}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.operatingCardNo as string}
                placeholder="100"
                type="text"
                name={"operatingCardNo"}
                value={data.operatingCardNo}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.operatingCardIssueDate as string}
                placeholder="14/02/1445"
                type="text"
                name={"operatingCardIssueDate"}
                value={data.operatingCardIssueDate}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.operatingCardExpiryDate as string}
                placeholder="14/02/1445"
                type="text"
                name={"operatingCardExpDate"}
                value={data.operatingCardExpDate}
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
export default AddCar;
