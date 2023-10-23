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
  const { colors, translations } = useTheme();
  return (
    <ReturnContainer className="summary">
      <Title color={colors.sideBarBgColor}>
        <h2>{translations?.Summary}</h2>
      </Title>
      <Summary className="summary">
        <RentSummary className="summary">
          <Description className="des">{translations?.description}</Description>
          <Amount className="des">{translations?.ammount}</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.totalRent}</Description>
          <Amount>395.00</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.discount}</Description>
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
          <Description>{translations?.VAT}</Description>
          <Amount>15%</Amount>
        </RentSummary>
        <RentSummary className="rent">
          <Description>{translations?.rentIncVAT}</Description>
          <Amount>454.00</Amount>
        </RentSummary>
        <RentSummary className="other_charges">
          <Description>{translations?.otherChargesIncVAT}</Description>
          <Amount className="positive">25.00</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.grossTotal}</Description>
          <Amount>479.00</Amount>
        </RentSummary>
        <RentSummary className="other_charges">
          <Description>{translations?.amountPaid}</Description>
          <Amount className="negetive">100.00</Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.netTotal}
          </Description>
          <Amount className="total_amount">379.00</Amount>
        </RentSummary>
      </Summary>
    </ReturnContainer>
  );
};
export default ReceiptSummary;
