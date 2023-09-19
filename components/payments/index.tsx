import * as React from "react";
import { Title } from "../GlobalSettings/BranchManagement/style";
import TableComponent from "@/reuseableComponents/TableComponent";
import { useTheme } from "styled-components";
import { PaymentTable } from "@/global/fakeData";
import DataTable from "@/reuseableComponents/DataTable";
const Payments = () => {
  const { locale, colors }: any = useTheme();
  return (
    <>
      <Title color={colors.nafethBlue}>
        <h2>Payments</h2>
      </Title>
      <DataTable
        data={PaymentTable}
        isDeleteAble={false}
        isEditAble={false}
        isDuplicate={false}
        isViewAble={true}
        linkPageUrl={"payment"}
        page_color={colors.nafethBlue}
        sideBarTitle="Payment Details"
        size="400px"
        showAddButton={true}
        addButtonText="Add Receipt"
        showFilter={true}
      />
    </>
  );
};
export default Payments;
