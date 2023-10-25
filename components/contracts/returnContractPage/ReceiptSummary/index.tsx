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
import { IRentCalculation } from "@/models/rentCalculate";
interface IProps {
  handleChange?: (e: any) => void;
  discount?: number;
  rentCalculation?: IRentCalculation;
}
const ReceiptSummary = ({
  handleChange,
  discount,
  rentCalculation,
}: IProps) => {
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
          <Amount>{rentCalculation?.result?.rentalTotal}</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.discount}</Description>
          <Amount className="discount">
            <InputField
              label=""
              classname="discount"
              type="number"
              onBlur={handleChange}
              required={true}
              name="discount"
              placeholder="0"
              defaultValue={discount}
            />
          </Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.VAT}</Description>
          <Amount>{rentCalculation?.result?.vat}</Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.VatAmount}</Description>
          <Amount>{rentCalculation?.result?.vatAmount}</Amount>
        </RentSummary>
        <RentSummary className="rent">
          <Description>{translations?.rentIncVAT}</Description>
          <Amount>{rentCalculation?.result?.rentwithVat}</Amount>
        </RentSummary>
        <RentSummary className="other_charges">
          <Description>{translations?.otherChargesIncVAT}</Description>
          <Amount className="positive">
            {rentCalculation?.result?.otherCost}
          </Amount>
        </RentSummary>
        <RentSummary>
          <Description>{translations?.grossTotal}</Description>
          <Amount>{rentCalculation?.result?.grossTotal}</Amount>
        </RentSummary>
        <RentSummary className="other_charges">
          <Description>{translations?.amountPaid}</Description>
          <Amount className="negetive">
            {rentCalculation?.result?.amountPaid}
          </Amount>
        </RentSummary>
        <RentSummary className="net_total">
          <Description className="total_amount">
            {translations?.netTotal}
          </Description>
          <Amount className="total_amount">
            {rentCalculation?.result?.netAmount}
          </Amount>
        </RentSummary>
      </Summary>
    </ReturnContainer>
  );
};
export default ReceiptSummary;
