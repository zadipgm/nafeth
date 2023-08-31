import * as React from "react";
import {
  Address,
  BackICon,
  CarDetailsSubTitle,
  CarDetailsTitle,
  CarOtherDetails,
  Colors,
  OtherDetailsList,
  OtherDetailsTitleWrapper,
  RentList,
  RentListItem,
  RentWrapper,
} from "../../style";
import { Tooltip } from "@nextui-org/react";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";

import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import CardUserSvg from "@/public/icons/carduserSvg";

const SelectedCustomer = () => {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <RentWrapper className="customer-card">
      <RentList>
        <RentListItem>
          <CarDetailsTitle>Customer ID</CarDetailsTitle>
          <CarDetailsSubTitle>10000016</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>License Number</CarDetailsTitle>
          <CarDetailsSubTitle>25487977887</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>License Expiry</CarDetailsTitle>
          <CarDetailsSubTitle>22/06/1446</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Nationality</CarDetailsTitle>
          <CarDetailsSubTitle>Kuwait</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Mobile Number</CarDetailsTitle>
          <CarDetailsSubTitle>+966581955852</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Date of Birth</CarDetailsTitle>
          <CarDetailsSubTitle>04/05/1994</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>ID Type</CarDetailsTitle>
          <CarDetailsSubTitle>Resident</CarDetailsSubTitle>
        </RentListItem>

        <RentListItem>
          <CarDetailsTitle>Price List</CarDetailsTitle>
          <CarDetailsSubTitle>Testing</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>ID Expiry</CarDetailsTitle>
          <CarDetailsSubTitle>02/04/1445</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Employer</CarDetailsTitle>
          <CarDetailsSubTitle>Zadip</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>ID Version No</CarDetailsTitle>
          <CarDetailsSubTitle>2</CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>Place of issue</CarDetailsTitle>
          <CarDetailsSubTitle>Dammam</CarDetailsSubTitle>
        </RentListItem>
      </RentList>
      <CarOtherDetails>
        <OtherDetailsTitleWrapper>
          <div className="title">
            <h2>Muhammad zeshan</h2>
            <Address>Prince Fahad Ibn Ibrahim Al Saud Street, Riyadh</Address>
          </div>
        </OtherDetailsTitleWrapper>
        <CardUserSvg width="300px" height="300px" fill={colors.nafethBlue} />
        <OtherDetailsList>
          <RentListItem className="other-details">
            <CarDetailsTitle className="other-details">City</CarDetailsTitle>
            <CarDetailsSubTitle>Riyadh</CarDetailsSubTitle>
          </RentListItem>
          <RentListItem className="other-details">
            <CarDetailsTitle className="other-details">
              National ID
            </CarDetailsTitle>
            <CarDetailsSubTitle>2529283364</CarDetailsSubTitle>
          </RentListItem>
        </OtherDetailsList>
      </CarOtherDetails>
    </RentWrapper>
  );
};
export default SelectedCustomer;
