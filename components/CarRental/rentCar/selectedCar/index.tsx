import * as React from "react";
import { Label, SelectedList, SelectedListItem, Value } from "../../style";
import CarPlate from "../../CarPlate";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { ICarModel } from "@/models/carmodel";
import IconComponent from "@/reuseableComponents/IconComponent";
import { Icustomprice } from "@/models/customerPrice";

interface IProps {
  car: ICarModel;
  customPrice: Icustomprice;
}
const SelectedCar = ({ car, customPrice }: IProps) => {
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
    <SelectedList>
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
        <Label>Car Plate</Label>
        <Value className="car_plate">
          <CarPlate car={carPlate} />
        </Value>
      </SelectedListItem>
    </SelectedList>
  );
};
export default SelectedCar;
