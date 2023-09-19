import * as React from "react";
import {
  BackICon,
  CarDetailsSubTitle,
  CarDetailsTitle,
  CarOtherDetails,
  CarplateSvgWrapper,
  Colors,
  OtherDetailsList,
  OtherDetailsTitleWrapper,
  RentList,
  RentListItem,
  RentWrapper,
} from "../../style";
import CarPlate from "../../CarPlate";
import { Tooltip } from "@nextui-org/react";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import SedanSvg from "@/public/icons/Sedan";
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
  const { locale } = useTheme();
  const router = useRouter();
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
    <RentWrapper className="car-card">
      <RentList>
        <RentListItem>
          <CarDetailsTitle>Car ID</CarDetailsTitle>
          <CarDetailsSubTitle>{car.result[0].id}</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Issue Branch</CarDetailsTitle>
          <CarDetailsSubTitle>
            {car.result[0].branch[`name_${locale}`]}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Mileage</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.mileage
              ? customPrice?.mileage
              : car.result[0].mileage}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>color</CarDetailsTitle>
          <CarDetailsSubTitle>
            {car.result[0].color[`name_${locale}`]}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Rented times</CarDetailsTitle>
          <CarDetailsSubTitle>{car.result[0].timesRented}</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Insurance policy number</CarDetailsTitle>
          <CarDetailsSubTitle>{car.result[0].policyNo}</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Insurance Type</CarDetailsTitle>
          <CarDetailsSubTitle>
            {car.result[0].insuranceType[`name_${locale}`]}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Penality Fee</CarDetailsTitle>
          <CarDetailsSubTitle>
            {car.result[0].insurancePenality}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Insurance company</CarDetailsTitle>
          <CarDetailsSubTitle>
            {car.result[0].insurance[`name_${locale}`]}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Min Rate</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.minDailyRent
              ? customPrice.minDailyRent
              : car.result[0].minDailyRent}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Full Tank Price</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.fullFuelCost
              ? customPrice?.fullFuelCost
              : car.result[0].fullFuelCost}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Daily KM Limit</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.dailyKMlimit
              ? customPrice?.dailyKMlimit
              : car.result[0].dailyKMlimit}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Extra per KM</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.perExtraKM
              ? customPrice?.perExtraKM
              : car.result[0].perExtraKM}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Grace Hours</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.graceHours
              ? customPrice?.graceHours
              : car.result[0].graceHours}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Grace Charge</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.graceCharge
              ? customPrice?.graceCharge
              : car.result[0].graceCharge}
          </CarDetailsSubTitle>
        </RentListItem>

        <RentListItem>
          <CarDetailsTitle>Daily Rent</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.dailyRent
              ? customPrice?.dailyRent
              : car.result[0].dailyRent}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Weekly Rent</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.weeklyRent
              ? customPrice?.weeklyRent
              : car.result[0].weeklyRent}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Monthly Rent</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.monthlyRent
              ? customPrice?.monthlyRent
              : car.result[0].monthlyRent}
          </CarDetailsSubTitle>
        </RentListItem>
      </RentList>
      <CarOtherDetails>
        <OtherDetailsList className="other-details">
          <RentListItem className="other-detail">
            <CarDetailsTitle className="other-detail">
              Make/Model
            </CarDetailsTitle>
            <CarDetailsSubTitle className="other-detail">
              {car.result[0].make[`name_${locale}`]}/
              {car.result[0].model[`name_${locale}`]}
            </CarDetailsSubTitle>
          </RentListItem>
          <RentListItem className="other-detail">
            <CarDetailsTitle className="other-detail">Year</CarDetailsTitle>
            <CarDetailsSubTitle className="other-detail">
              {car.result[0].year}
            </CarDetailsSubTitle>
          </RentListItem>
        </OtherDetailsList>
        <CarplateSvgWrapper>
          <IconComponent
            width="150px"
            height="150px"
            fill={car.result[0].color[`name_${locale}`]}
            icon={car.result[0].carType.name_en.trim()}
            stroke="gray"
          />
          <CarPlate car={carPlate} classname="rent-page" />
        </CarplateSvgWrapper>
        <OtherDetailsList>
          <RentListItem className="other-details">
            <CarDetailsTitle className="other-details">Color</CarDetailsTitle>
            <CarDetailsSubTitle
              className="other-details"
              color={car.result[0].color[`name_${locale}`]}
            >
              {car.result[0].color[`name_${locale}`]}
            </CarDetailsSubTitle>
          </RentListItem>
          <RentListItem className="other-details">
            <CarDetailsTitle className="other-details">Mileage</CarDetailsTitle>
            <CarDetailsSubTitle>{car.result[0].mileage}</CarDetailsSubTitle>
          </RentListItem>
        </OtherDetailsList>
      </CarOtherDetails>
    </RentWrapper>
  );
};
export default SelectedCar;
