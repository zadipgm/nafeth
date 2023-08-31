import * as React from "react";
import { Title } from "../GlobalSettings/BranchManagement/style";
import TableComponent from "@/reuseableComponents/TableComponent";
import { useTheme } from "styled-components";
import { PaymentTable } from "@/global/fakeData";
const Payments = () => {
  const { locale, colors }: any = useTheme();
  return (
    <>
      <Title color={colors.nafethBlue}>
        <h2>Payments</h2>
      </Title>
      <TableComponent
        tableData={PaymentTable}
        headerValue={[
          `receipt_no`,
          "activity",
          "payment_type",
          "payment_date",
          "branch",
          "amount",
        ]}
        isDeleteAble={false}
        isEditAble={false}
        isDuplicate={false}
        linkPageUrl={"payment"}
        page_color={colors.nafethBlue}
        sideBarTitle="Payment Details"
        size="400px"
        showAddButton={true}
        addButtonText="Add Receipt"
      />
    </>
  );
};
export default Payments;
