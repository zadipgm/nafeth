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
import InputField from "@/reuseableComponents/customInputField/input";
const ReceiptSummary = () => {
  const { colors } = useTheme();
  return (
    <ReturnContainer className="summary">
      <Title color={colors.sideBarBgColor}>
        <h2>Summary</h2>
      </Title>
      <Summary className="summary">
        <RentSummary className="summary">
          <Description className="des">Description</Description>
          <Amount className="des">Amount</Amount>
        </RentSummary>
        <RentSummary>
          <Description>Rent Total</Description>
          <Amount>395.00</Amount>
        </RentSummary>
        <RentSummary>
          <Description>Discount</Description>
          <Amount className="discount">
            <InputField
              label=""
              classname="discount"
              type="number"
              required={true}
              name="discount"
              placeholder="0"
              defaultValue={0}
            />
          </Amount>
        </RentSummary>
        <RentSummary>
          <Description>VAT</Description>
          <Amount>15%</Amount>
        </RentSummary>
        <RentSummary className="rent">
          <Description>{"Rent (Inc VAT)"}</Description>
          <Amount>454.00</Amount>
        </RentSummary>
        <RentSummary className="other_charges">
          <Description>{"Other Charges (Inc VAT)"}</Description>
          <Amount className="positive">25.00</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{"Gross Total"}</Description>
          <Amount>479.00</Amount>
        </RentSummary>
        <RentSummary className="other_charges">
          <Description>{"Amount Paid"}</Description>
          <Amount className="negetive">100.00</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">{"Net Total"}</Description>
          <Amount className="total_amount">379.00</Amount>
        </RentSummary>
      </Summary>
    </ReturnContainer>
  );
};
export default ReceiptSummary;
