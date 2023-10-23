import * as React from "react";
import { Title } from "../GlobalSettings/BranchManagement/style";
import TableComponent from "@/reuseableComponents/TableComponent";
import { useTheme } from "styled-components";
import { PaymentTable } from "@/global/fakeData";
import DataTable from "@/reuseableComponents/DataTable";
import { Container, PaymentContainer } from "./style";
import { useAppData } from "@/context/paymentLookupContext";
import { AppContexts } from "@/models/appContext";
import { IPayments } from "@/models/payments";
import { paymentKeys } from "@/constants";
interface IProps {
  payments: IPayments;
}
const Payments = ({ payments }: IProps) => {
  console.log("here is payment", payments);
  const { locale, colors }: any = useTheme();

  return (
    <PaymentContainer>
      <Title color={colors.sideBarBgColor}>
        <h2>Payments</h2>
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
          showAddButton={true}
          addButtonText="Add Receipt"
          showFilter={true}
          paymentButton={false}
          keys={paymentKeys}
        />
      </Container>
    </PaymentContainer>
  );
};
export default Payments;
