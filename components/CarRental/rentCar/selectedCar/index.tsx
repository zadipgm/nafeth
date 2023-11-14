import * as React from "react";
import { Label, SelectedList, SelectedListItem, Value } from "../../style";
import CarPlate from "../../CarPlate";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { ICarModel } from "@/models/carmodel";
import IconComponent from "@/reuseableComponents/IconComponent";
import { Icustomprice } from "@/models/customerPrice";
<<<<<<< HEAD
=======
import SelectField from "@/reuseableComponents/customeSelectField/select";
import { bank } from "@/global/fakeData";
import InputField from "@/reuseableComponents/customInputField/input";
import { ILookUp } from "@/models/lookup";
import { FormWrapper } from "@/components/GlobalSettings/compnaySettings/style";
import { Box } from "@mui/material";
>>>>>>> e36af8fdde2b7bcd4aae9626346100a96686392a

interface IProps {
  car: ICarModel;
  customPrice: Icustomprice;
  onChange: (param: any) => void;
  tajeerData: ILookUp;
  speedometer_Keys: ILookUp;
  fuelType: ILookUp;
  availableFuel: ILookUp;
  carSeats: ILookUp;
  acStereoData: ILookUp;
}
const SelectedCar = ({
  car,
  customPrice,
  onChange,
  tajeerData,
  speedometer_Keys,
  fuelType,
  availableFuel,
  carSeats,
  acStereoData,
}: IProps) => {
  const { locale, translations } = useTheme();
  const carPlate = {
    plateText1_ar: car.result[0].plateText1_ar,
    plateText2_ar: car.result[0].plateText2_ar,
    plateText3_ar: car.result[0].plateText3_ar,
    plateNo: car.result[0].plateNo,
    plateText1_en: car.result[0].plateText1_en,
    plateText2_en: car.result[0].plateText2_en,
    plateText3_en: car.result[0].plateText3_en,
  };
  return (
<<<<<<< HEAD
    <SelectedList>
=======
    <SelectedList className="selected_car">
>>>>>>> e36af8fdde2b7bcd4aae9626346100a96686392a
      <SelectedListItem>
        <Label>{translations?.carID}</Label>
        <Value>{car.result[0].id}</Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.issueBranch}</Label>
        <Value>{car.result[0].branch[`name_${locale}`]}</Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.mileage}</Label>
        <Value>
          {customPrice?.mileage ? customPrice?.mileage : car.result[0].mileage}
        </Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.color}</Label>
        <Value>{car.result[0].color[`name_${locale}`]}</Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.rentedTimes}</Label>
        <Value>{car.result[0].timesRented}</Value>
      </SelectedListItem>

      <SelectedListItem>
        <Label>{translations?.insuranceType}</Label>
        <Value>{car.result[0].insuranceType[`name_${locale}`]}</Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.penalityFee}</Label>
        <Value>{car.result[0].insurancePenality}</Value>
      </SelectedListItem>

      <SelectedListItem>
        <Label>{translations?.minRate}</Label>
        <Value>
          {customPrice?.minDailyRent
            ? customPrice.minDailyRent
            : car.result[0].minDailyRent}
        </Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.fullTankPrice}</Label>
        <Value>
          {customPrice?.fullFuelCost
            ? customPrice?.fullFuelCost
            : car.result[0].fullFuelCost}
        </Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.dailyKMLimit}</Label>
        <Value>
          {customPrice?.dailyKMlimit
            ? customPrice?.dailyKMlimit
            : car.result[0].dailyKMlimit}
        </Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.extraPerKM}</Label>
        <Value>
          {customPrice?.perExtraKM
            ? customPrice?.perExtraKM
            : car.result[0].perExtraKM}
        </Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.graceHours}</Label>
        <Value>
          {customPrice?.graceHours
            ? customPrice?.graceHours
            : car.result[0].graceHours}
        </Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.graceCharge}</Label>
        <Value>
          {customPrice?.graceCharge
            ? customPrice?.graceCharge
            : car.result[0].graceCharge}
        </Value>
      </SelectedListItem>

      <SelectedListItem>
        <Label>{translations?.dailyRent}</Label>
        <Value>
          {customPrice?.dailyRent
            ? customPrice?.dailyRent
            : car.result[0].dailyRent}
        </Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.weeklyRent}</Label>
        <Value>
          {customPrice?.weeklyRent
            ? customPrice?.weeklyRent
            : car.result[0].weeklyRent}
        </Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.monthlyRent}</Label>
        <Value>
          {customPrice?.monthlyRent
            ? customPrice?.monthlyRent
            : car.result[0].monthlyRent}
        </Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.insurancepolicynumber}</Label>
        <Value>{car.result[0].policyNo}</Value>
      </SelectedListItem>

      <SelectedListItem>
        <Label>{translations?.makemodel}</Label>
        <Value>
          {car.result[0].make[`name_${locale}`]}/
          {car.result[0].model[`name_${locale}`]}
        </Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.year}</Label>
        <Value>{car.result[0].year}</Value>
      </SelectedListItem>
      <SelectedListItem>
        <Label>{translations?.color}</Label>
        <Value>{car.result[0].color[`name_${locale}`]}</Value>
      </SelectedListItem>
<<<<<<< HEAD
=======

      <SelectedListItem>
        <SelectField
          label={translations?.fuelType as string}
          name="tajeer_FuelType"
          onChange={onChange}
          required={true}
          defaultValue={1}
        >
          <>
            {fuelType?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_FuelLevel as string}
          name="tajeer_FuelLevel"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {availableFuel?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <InputField
          label={translations?.tajeer_OilType as string}
          name="tajeer_OilType"
          onChange={onChange}
          required={true}
        />
      </SelectedListItem>
      <SelectedListItem>
        <InputField
          label={translations?.tajeer_OilchangeDate as string}
          name="tajeer_OilchangeDate"
          type="date"
          onChange={onChange}
          required={true}
          defaultValue={1}
        />
      </SelectedListItem>
      <SelectedListItem>
        <InputField
          label={translations?.tajeer_OilChangeKM as string}
          name="tajeer_OilChangeKM"
          type="number"
          onChange={onChange}
          required={true}
        />
      </SelectedListItem>
      <SelectedListItem>
        <InputField
          label={translations?.tajeer_Odometer as string}
          name="tajeer_Odometer"
          type="number"
          onChange={onChange}
          required={true}
        />
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_AC as string}
          name="tajeer_AC"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {acStereoData?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_Stereo as string}
          name="tajeer_Stereo"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {acStereoData?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_Screen as string}
          name="tajeer_Screen"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {acStereoData?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_Speedometer as string}
          name="tajeer_Speedometer"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {speedometer_Keys?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_CarSeat as string}
          name="tajeer_CarSeat"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {carSeats?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_SpareTire as string}
          name="tajeer_SpareTire"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {acStereoData?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_SpareTireTools as string}
          name="tajeer_SpareTireTools"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {tajeerData?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_Tires as string}
          name="tajeer_Tires"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {acStereoData?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_FirstAid as string}
          name="tajeer_FirstAid"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {tajeerData?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_Keys as string}
          name="tajeer_Keys"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {speedometer_Keys?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_FireExtinguisher as string}
          name="tajeer_FireExtinguisher"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {tajeerData?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>
      <SelectedListItem>
        <SelectField
          label={translations?.tajeer_SafetyTriangle as string}
          name="tajeer_SafetyTriangle"
          onChange={onChange}
          defaultValue={1}
          required={true}
        >
          <>
            {tajeerData?.result.map((option) => (
              <option key={option.id} value={option.id}>
                {option[`name_${locale}`]}
              </option>
            ))}
          </>
        </SelectField>
      </SelectedListItem>

>>>>>>> e36af8fdde2b7bcd4aae9626346100a96686392a
      <SelectedListItem className="car_plate">
        <Label>{translations?.carType}</Label>
        <Value>
          <IconComponent
            width="150px"
            height="150px"
            fill={car.result[0].color[`name_${locale}`]}
            icon={car.result[0].carType.name_en.trim()}
            stroke="gray"
            classname={"selected_car"}
          />
        </Value>
      </SelectedListItem>
      <SelectedListItem className="car_plate">
<<<<<<< HEAD
        <Label>Car Plate</Label>
=======
        <Label>{translations?.carPlateNumber}</Label>
>>>>>>> e36af8fdde2b7bcd4aae9626346100a96686392a
        <Value className="car_plate">
          <CarPlate car={carPlate} />
        </Value>
      </SelectedListItem>
    </SelectedList>
  );
};
export default SelectedCar;
