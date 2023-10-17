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
import { ICustomers, customer } from "@/models/customers";
interface IProps {
  customer: customer;
  type: string;
}
const SelectedCustomer = ({ customer, type }: IProps) => {
  const { translations, isLTR, locale } = useTheme();
  const router = useRouter();

  return (
    <RentWrapper className={`${type}-card`}>
      <RentList className="customer-selected">
        <RentListItem>
          <CarDetailsTitle>{type} ID</CarDetailsTitle>
          <CarDetailsSubTitle>{customer.id}</CarDetailsSubTitle>
        </RentListItem>
        {type === "Customer" && (
          <RentListItem>
            <CarDetailsTitle>{translations?.licenseNumber}</CarDetailsTitle>
            <CarDetailsSubTitle>{customer.licenseNo}</CarDetailsSubTitle>
          </RentListItem>
        )}
        {type === "Customer" && (
          <RentListItem>
            <CarDetailsTitle>{translations?.licenseExpiry}</CarDetailsTitle>
            <CarDetailsSubTitle>
              {isLTR
                ? customer.licenseExpDate_gregorian
                : customer.licExpiryDate_hijri}
            </CarDetailsSubTitle>
          </RentListItem>
        )}
        {type === "Customer" && (
          <RentListItem>
            <CarDetailsTitle>{translations?.nationality}</CarDetailsTitle>
            <CarDetailsSubTitle>
              {customer.nationality[`name_${locale}`]}
            </CarDetailsSubTitle>
          </RentListItem>
        )}
        {type === "Customer" && (
          <RentListItem>
            <CarDetailsTitle>{translations?.mobileNumber}</CarDetailsTitle>
            <CarDetailsSubTitle>{customer.mobileNo}</CarDetailsSubTitle>
          </RentListItem>
        )}
        <RentListItem>
          <CarDetailsTitle>{translations?.dateofBirth}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {isLTR ? customer.dob_gregorian : customer.dob_hijri}
          </CarDetailsSubTitle>
        </RentListItem>
        <RentListItem>
          <CarDetailsTitle>{translations?.iDType}</CarDetailsTitle>
          <CarDetailsSubTitle>
            {customer.idType[`name_${locale}`]}
          </CarDetailsSubTitle>
        </RentListItem>

        {type === "Customer" && (
          <RentListItem>
            <CarDetailsTitle>{translations?.priceList}</CarDetailsTitle>
            <CarDetailsSubTitle>
              {customer.pricelist[`name_${locale}`]}
            </CarDetailsSubTitle>
          </RentListItem>
        )}
        {type === "Customer" && (
          <RentListItem>
            <CarDetailsTitle>{translations?.iDExpiry}</CarDetailsTitle>
            <CarDetailsSubTitle>
              {isLTR
                ? customer.idExpiryDate_gregorian
                : customer.idExpiryDate_hijri}
            </CarDetailsSubTitle>
          </RentListItem>
        )}
        {type === "Customer" && (
          <RentListItem>
            <CarDetailsTitle>{translations?.employer}</CarDetailsTitle>
            <CarDetailsSubTitle>{customer.employerName}</CarDetailsSubTitle>
          </RentListItem>
        )}
        {type === "Driver" && (
          <RentListItem>
            <CarDetailsTitle>
              {type}
              {translations?.nationalID}
            </CarDetailsTitle>
            <CarDetailsSubTitle>{customer.idNumber}</CarDetailsSubTitle>
          </RentListItem>
        )}
        {type === "Driver" && (
          <RentListItem>
            <CarDetailsTitle>{translations?.city}</CarDetailsTitle>
            <CarDetailsSubTitle>{customer.cA_City}</CarDetailsSubTitle>
          </RentListItem>
        )}
        {type === "Customer" && (
          <RentListItem>
            <CarDetailsTitle>{translations?.iDVersionNo}</CarDetailsTitle>
            <CarDetailsSubTitle>{customer.version}</CarDetailsSubTitle>
          </RentListItem>
        )}
        {type === "Customer" && (
          <RentListItem>
            <CarDetailsTitle>{translations?.placeofissue}</CarDetailsTitle>
            <CarDetailsSubTitle>
              {customer.idissuecity[`name_${locale}`]}
            </CarDetailsSubTitle>
          </RentListItem>
        )}
      </RentList>
      <CarOtherDetails>
        <OtherDetailsTitleWrapper>
          <div className="title">
            <h2>{customer[`fullname_${locale}`]}</h2>
            <Address>
              {customer.cA_StreetName},{customer.cA_District},
              {customer.cA_PostalCode} {customer.cA_City} {customer.cA_Country}
            </Address>
          </div>
        </OtherDetailsTitleWrapper>
        {type === "Customer" && (
          <CardUserSvg width="200px" height="200px" fill={"#000000ad"} />
        )}
        {type === "Customer" && (
          <OtherDetailsList>
            <RentListItem className="other-details">
              <CarDetailsTitle className="other-details">
                {translations?.city}
              </CarDetailsTitle>
              <CarDetailsSubTitle>{customer.cA_City}</CarDetailsSubTitle>
            </RentListItem>
            <RentListItem className="other-details">
              <CarDetailsTitle className="other-details">
                {translations?.nationalID}
              </CarDetailsTitle>
              <CarDetailsSubTitle>{customer.idNumber}</CarDetailsSubTitle>
            </RentListItem>
          </OtherDetailsList>
        )}
      </CarOtherDetails>
    </RentWrapper>
  );
};
export default SelectedCustomer;
