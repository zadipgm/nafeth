import * as React from "react";
import { Title } from "../GlobalSettings/BranchManagement/style";

import { useTheme } from "styled-components";
import DataTable from "@/reuseableComponents/DataTable";
import { Container, PaymentContainer } from "./style";
import { IPayments } from "@/models/payments";
import { paymentKeys } from "@/constants";
interface IProps {
  payments: IPayments;
}
const Payments = ({ payments }: IProps) => {
  const { translations, colors } = useTheme();

  return (
    <PaymentContainer>
      <Title color={colors.sideBarBgColor}>
        <h2>{translations?.Payments}</h2>
      </Title>
      <Container>
        <DataTable
          data={payments.result}
          isDeleteAble={false}
          isEditAble={false}
          isDuplicate={false}
          isViewAble={false}
          page_color={colors.sideBarBgColor}
          size="600px"
          linkPageUrl="payments"
          showAddButton={true}
          addButtonText={translations?.addReceipt}
          showFilter={true}
          paymentButton={false}
          keys={paymentKeys}
        />
      </Container>
    </PaymentContainer>
  );
};
export default Payments;
