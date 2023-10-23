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
const RentAccount = () => {
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
          <Amount>2023-10-18</Amount>
        </RentSummary>

        <RentSummary>
          <Description>{translations?.issueDate}</Description>
          <Amount>2023-02-13</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.NumberofDays}</Description>
          <Amount>14</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.price}
          </Description>
          <Amount className="total_amount">575.00</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.checkInTime}</Description>
          <Amount>15:31</Amount>
        </RentSummary>

        <RentSummary>
          <Description>{translations?.checkOutTime}</Description>
          <Amount>11:37</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.ExtraTime}</Description>
          <Amount>03:54:00</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.price}
          </Description>
          <Amount className="total_amount">33.33</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.kMIn}</Description>
          <Amount>15</Amount>
        </RentSummary>

        <RentSummary>
          <Description>{translations?.kmout}</Description>
          <Amount>17</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.extraKM}</Description>
          <Amount>2</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.price}
          </Description>
          <Amount className="total_amount">12.00</Amount>
        </RentSummary>

        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.total}
          </Description>
          <Amount className="total_amount">620.33</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.accessories}</Description>
          <Amount className="positive">32.00</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.loyalityPricelist}</Description>
          <Amount className="negetive">247.33</Amount>
        </RentSummary>

        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.totalRent}
          </Description>
          <Amount className="total_amount">395.00</Amount>
        </RentSummary>
      </Summary>
    </ReturnContainer>
  );
};
export default RentAccount;
