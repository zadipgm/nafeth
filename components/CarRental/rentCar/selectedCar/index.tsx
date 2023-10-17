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
import { CarPlateWrapper } from "@/components/payments/style";

interface IProps {
  car: ICarModel;
  customPrice: Icustomprice;
}
const SelectedCar = ({ car, customPrice }: IProps) => {
  const { locale, translations } = useTheme();
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
          <CarDetailsTitle>{translations?.carID}</CarDetailsTitle>
          <CarDetailsSubTitle>{car.result[0].id}</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.issueBranch}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {car.result[0].branch[`name_${locale}`]}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.mileage}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.mileage
              ? customPrice?.mileage
              : car.result[0].mileage}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.color}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {car.result[0].color[`name_${locale}`]}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.rentedTimes}</CarDetailsTitle>
          <CarDetailsSubTitle>{car.result[0].timesRented}</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>
            {translations?.insurancepolicynumber}
          </CarDetailsTitle>
          <CarDetailsSubTitle>{car.result[0].policyNo}</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.insuranceType}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {car.result[0].insuranceType[`name_${locale}`]}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.penalityFee}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {car.result[0].insurancePenality}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.insuranceCompany}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {car.result[0].insurance[`name_${locale}`]}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.minRate}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.minDailyRent
              ? customPrice.minDailyRent
              : car.result[0].minDailyRent}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.fullTankPrice}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.fullFuelCost
              ? customPrice?.fullFuelCost
              : car.result[0].fullFuelCost}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.dailyKMLimit}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.dailyKMlimit
              ? customPrice?.dailyKMlimit
              : car.result[0].dailyKMlimit}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.extraPerKM}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.perExtraKM
              ? customPrice?.perExtraKM
              : car.result[0].perExtraKM}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.graceHours}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.graceHours
              ? customPrice?.graceHours
              : car.result[0].graceHours}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.graceCharge}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.graceCharge
              ? customPrice?.graceCharge
              : car.result[0].graceCharge}
          </CarDetailsSubTitle>
        </RentListItem>

        <RentListItem>
          <CarDetailsTitle>{translations?.dailyRent}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.dailyRent
              ? customPrice?.dailyRent
              : car.result[0].dailyRent}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.weeklyRent}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customPrice?.weeklyRent
              ? customPrice?.weeklyRent
              : car.result[0].weeklyRent}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.monthlyRent}</CarDetailsTitle>
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
              {translations?.makemodel}
            </CarDetailsTitle>
            <CarDetailsSubTitle className="other-detail">
              {car.result[0].make[`name_${locale}`]}/
              {car.result[0].model[`name_${locale}`]}
            </CarDetailsSubTitle>
          </RentListItem>
          <RentListItem className="other-detail">
            <CarDetailsTitle className="other-detail">
              {translations?.year}
            </CarDetailsTitle>
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
          <CarPlateWrapper>
            <CarPlate car={carPlate} classname="rent-page" />
          </CarPlateWrapper>
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
            <CarDetailsTitle className="other-details">
              {translations?.mileage}
            </CarDetailsTitle>
            <CarDetailsSubTitle>{car.result[0].mileage}</CarDetailsSubTitle>
          </RentListItem>
        </OtherDetailsList>
      </CarOtherDetails>
    </RentWrapper>
  );
};
export default SelectedCar;
