import * as React from "react";
import { Title } from "../GlobalSettings/BranchManagement/style";
import TableComponent from "@/reuseableComponents/TableComponent";
import { useTheme } from "styled-components";
import { PaymentTable } from "@/global/fakeData";
import DataTable from "@/reuseableComponents/DataTable";
import { Container, PaymentContainer } from "./style";
import { useAppData } from "@/context/appContext";
import { AppContexts } from "@/models/appContext";
const Payments = () => {
  const { locale, colors }: any = useTheme();

  return (
    <PaymentContainer>
      <Title color={colors.sideBarBgColor}>
        <h2>Payments</h2>
      </Title>
      <Container>
        <DataTable
          data={PaymentTable}
          isDeleteAble={false}
          isEditAble={false}
          isDuplicate={false}
          isViewAble={true}
          linkPageUrl={"payments"}
          page_color={colors.sideBarBgColor}
          sideBarTitle="Payment Details"
          size="600px"
          showAddButton={true}
          addButtonText="Add Receipt"
          showFilter={true}
          paymentButton={true}
        />
      </Container>
    </PaymentContainer>
  );
};
export default Payments;
