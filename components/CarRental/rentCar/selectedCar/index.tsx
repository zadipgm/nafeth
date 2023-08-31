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

const SelectedCar = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const car = {
    plateText1_ar: "ا",
    plateText2_ar: "ا",
    plateText3_ar: "ن",
    plateNo: "4321",
    plateText1_en: "A",
    plateText2_en: "A",
    plateText3_en: "N",
  };
  return (
    <RentWrapper className="car-card">
      <RentList>
        <RentListItem>
          <CarDetailsTitle>Car ID</CarDetailsTitle>
          <CarDetailsSubTitle>80011</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Issue Branch</CarDetailsTitle>
          <CarDetailsSubTitle>Head Branch</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Mileage</CarDetailsTitle>
          <CarDetailsSubTitle>1234</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>color</CarDetailsTitle>
          <CarDetailsSubTitle>Blue</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Rented times</CarDetailsTitle>
          <CarDetailsSubTitle>4</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Insurance policy number</CarDetailsTitle>
          <CarDetailsSubTitle>1234567</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Insurance Type</CarDetailsTitle>
          <CarDetailsSubTitle>شامل</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Penality Fee</CarDetailsTitle>
          <CarDetailsSubTitle>123</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Insurance company</CarDetailsTitle>
          <CarDetailsSubTitle>Sanad</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Min Rate</CarDetailsTitle>
          <CarDetailsSubTitle>80.00</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Full Tank Price</CarDetailsTitle>
          <CarDetailsSubTitle>87.00</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Daily KM Limit</CarDetailsTitle>
          <CarDetailsSubTitle>220.00</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Extra per hour</CarDetailsTitle>
          <CarDetailsSubTitle>23.00</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Free hour</CarDetailsTitle>
          <CarDetailsSubTitle>01.00</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Extra hour</CarDetailsTitle>
          <CarDetailsSubTitle>03.00</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Daily Rent</CarDetailsTitle>
          <CarDetailsSubTitle>120.00</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Weekly Rent</CarDetailsTitle>
          <CarDetailsSubTitle>120.00</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Monthly Rent</CarDetailsTitle>
          <CarDetailsSubTitle>300.00</CarDetailsSubTitle>
        </RentListItem>
      </RentList>
      <CarOtherDetails>
        <OtherDetailsList className="other-details">
          <RentListItem className="other-detail">
            <CarDetailsTitle className="other-detail">
              Make/Model
            </CarDetailsTitle>
            <CarDetailsSubTitle className="other-detail">
              Hyundai/Accent
            </CarDetailsSubTitle>
          </RentListItem>
          <RentListItem className="other-detail">
            <CarDetailsTitle className="other-detail">Year</CarDetailsTitle>
            <CarDetailsSubTitle className="other-detail">
              2023
            </CarDetailsSubTitle>
          </RentListItem>
        </OtherDetailsList>
        <CarplateSvgWrapper>
          <SedanSvg width="150px" height="150px" fill={"Blue"} />
          <CarPlate car={car} classname="rent-page" />
        </CarplateSvgWrapper>
        <OtherDetailsList>
          <RentListItem className="other-details">
            <CarDetailsTitle className="other-details">Color</CarDetailsTitle>
            <CarDetailsSubTitle className="other-details">
              Blue
            </CarDetailsSubTitle>
          </RentListItem>
          <RentListItem className="other-details">
            <CarDetailsTitle className="other-details">Mileage</CarDetailsTitle>
            <CarDetailsSubTitle>1234</CarDetailsSubTitle>
          </RentListItem>
        </OtherDetailsList>
      </CarOtherDetails>
    </RentWrapper>
  );
};
export default SelectedCar;
