import * as React from "react";
import { Label, SelectedList, SelectedListItem, Value } from "../../style";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { ICustomers } from "@/models/customers";
interface IProps {
  customer?: ICustomers | any;
  type: string;
}
const SelectedCustomer = ({ customer, type }: IProps) => {
  const { translations, isLTR, locale } = useTheme();
  return (
    <>
      {type === "customer" && (
        <SelectedList>
          <SelectedListItem>
            <Label>{translations?.customerID}</Label>
            <Value>{customer?.[0].idNumber}</Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.iDType}</Label>
            <Value>{customer?.[0].idType[`name_${locale}`]}</Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.iDExpiry}</Label>
            <Value>
              {isLTR
                ? customer?.[0].idExpiryDate_gregorian
                : customer?.[0].idExpiryDate_hijri}
            </Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.customerName}</Label>
            <Value>{customer?.[0][`fullname_${locale}`]}</Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.dateofBirth}</Label>
            <Value>
              {isLTR ? customer?.[0].dob_gregorian : customer?.[0].dob_hijri}
            </Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.mobileNumber}</Label>
            <Value>{customer?.[0].mobileNo}</Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.nationality}</Label>
            <Value>{customer?.[0].nationality[`name_${locale}`]}</Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.email}</Label>
            <Value>{customer?.[0].email}</Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.licenseNumber}</Label>
            <Value>{customer?.[0].licenseNo}</Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.city}</Label>
            <Value>{customer?.[0].cA_City}</Value>
          </SelectedListItem>
        </SelectedList>
      )}
      {type === "driver" && (
        <SelectedList>
          <SelectedListItem>
            <Label>{translations?.driverID}</Label>
            <Value>{customer?.[0].idNumber}</Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.driverIDType}</Label>
            <Value>{customer?.[0].idType[`name_${locale}`]}</Value>
          </SelectedListItem>

          <SelectedListItem>
            <Label>{translations?.driverName}</Label>
            <Value>{customer?.[0][`fullname_${locale}`]}</Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.dateofBirth}</Label>
            <Value>
              {isLTR ? customer?.[0].dob_gregorian : customer?.[0].dob_hijri}
            </Value>
          </SelectedListItem>

          <SelectedListItem>
            <Label>{translations?.licenseNumber}</Label>
            <Value>{customer?.[0].licenseNo}</Value>
          </SelectedListItem>
          <SelectedListItem>
            <Label>{translations?.address}</Label>
            <Value>
              {customer?.[0].cA_District}
              {" ,"}
              {customer?.[0].cA_StreetName} {","}
              {customer?.[0].cA_buildingNo}
              {" ,"} {customer?.[0].cA_City}
              {" ,"}
              {customer?.[0].cA_Country}
              {" ,"} {customer?.[0].cA_PostalCode}
            </Value>
          </SelectedListItem>
        </SelectedList>
      )}
    </>
  );
};
export default SelectedCustomer;
