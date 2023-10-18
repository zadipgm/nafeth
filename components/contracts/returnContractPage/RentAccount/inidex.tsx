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
  const { colors } = useTheme();
  return (
    <ReturnContainer className="summary">
      <Title color={colors.sideBarBgColor}>
        <h2>Rent Account</h2>
      </Title>
      <Summary className="summary">
        <RentSummary className="summary">
          <Description className="des">Description</Description>
          <Amount className="des">Amount</Amount>
        </RentSummary>
        <RentSummary>
          <Description>Return Date</Description>
          <Amount>2023-10-18</Amount>
        </RentSummary>

        <RentSummary>
          <Description>Issue Date</Description>
          <Amount>2023-02-13</Amount>
        </RentSummary>
        <RentSummary>
          <Description>Number of days</Description>
          <Amount>14</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">Price</Description>
          <Amount className="total_amount">575.00</Amount>
        </RentSummary>
        <RentSummary>
          <Description>Check-in time</Description>
          <Amount>15:31</Amount>
        </RentSummary>

        <RentSummary>
          <Description>Checkout time</Description>
          <Amount>11:37</Amount>
        </RentSummary>
        <RentSummary>
          <Description>Extra time</Description>
          <Amount>03:54:00</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">Price</Description>
          <Amount className="total_amount">33.33</Amount>
        </RentSummary>
        <RentSummary>
          <Description>KM In</Description>
          <Amount>15</Amount>
        </RentSummary>

        <RentSummary>
          <Description>KM Out</Description>
          <Amount>17</Amount>
        </RentSummary>
        <RentSummary>
          <Description>Extra KM</Description>
          <Amount>2</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">Price</Description>
          <Amount className="total_amount">12.00</Amount>
        </RentSummary>

        <RentSummary className="net_total">
          <Description className="total_amount">Total</Description>
          <Amount className="total_amount">620.33</Amount>
        </RentSummary>
        <RentSummary>
          <Description>Accessories</Description>
          <Amount className="positive">32.00</Amount>
        </RentSummary>
        <RentSummary>
          <Description>Loyality/Pricelist</Description>
          <Amount className="negetive">247.33</Amount>
        </RentSummary>
        <RentSummary>
          <Description>Discount</Description>
          <Amount className="negetive">10.00</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">Total Rent</Description>
          <Amount className="total_amount">395.00</Amount>
        </RentSummary>
      </Summary>
    </ReturnContainer>
  );
};
export default RentAccount;
