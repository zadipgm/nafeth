import * as React from "react";
import {
  Amount,
  Description,
  RentSummary,
  ReturnContainer,
  Summary,
} from "../../style";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { useTheme } from "styled-components";
import { IRentCalculation } from "@/models/rentCalculate";
interface IProps {
  rentCalculation?: IRentCalculation;
}
const RentAccount = ({ rentCalculation }: IProps) => {
  const { colors, translations } = useTheme();
  return (
    <ReturnContainer className="summary">
      <Title color={colors.sideBarBgColor}>
        <h2>{translations?.rentAccount}</h2>
      </Title>
      <Summary className="summary">
        <RentSummary className="summary">
          <Description className="des">{translations?.description}</Description>
          <Amount className="des">{translations?.ammount}</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.returnDate}</Description>
          <Amount>{rentCalculation?.result?.dateIn}</Amount>
        </RentSummary>

        <RentSummary>
          <Description>{translations?.issueDate}</Description>
          <Amount>{rentCalculation?.result?.dateOut}</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.NumberofDays}</Description>
          <Amount>{rentCalculation?.result?.totalDays}</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.price}
          </Description>
          <Amount className="total_amount">
            {rentCalculation?.result?.dayCost}
          </Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.checkInTime}</Description>
          <Amount>{rentCalculation?.result?.timeIn}</Amount>
        </RentSummary>

        <RentSummary>
          <Description>{translations?.checkOutTime}</Description>
          <Amount>{rentCalculation?.result?.timeOut}</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.ExtraTime}</Description>
          <Amount>{rentCalculation?.result?.extratime}</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.price}
          </Description>
          <Amount className="total_amount">
            {rentCalculation?.result?.timeCost}
          </Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.kMIn}</Description>
          <Amount>{rentCalculation?.result?.kmIn}</Amount>
        </RentSummary>

        <RentSummary>
          <Description>{translations?.kmout}</Description>
          <Amount>{rentCalculation?.result?.kmOut}</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.extraKM}</Description>
          <Amount>{rentCalculation?.result?.extraKM}</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.price}
          </Description>
          <Amount className="total_amount">
            {rentCalculation?.result?.kmCost}
          </Amount>
        </RentSummary>

        <RentSummary>
          <Description>{translations?.accessories}</Description>
          <Amount className="positive">
            {rentCalculation?.result?.accessoriesCost}
          </Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.loyalityPricelist}</Description>
          <Amount className="negetive">
            {rentCalculation?.result?.pricelistDiscount}
          </Amount>
        </RentSummary>

        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.totalRent}
          </Description>
          <Amount className="total_amount">
            {rentCalculation?.result?.rentalTotal}
          </Amount>
        </RentSummary>
      </Summary>
    </ReturnContainer>
  );
};
export default RentAccount;
