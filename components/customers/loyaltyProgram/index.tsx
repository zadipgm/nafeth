import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { IPriceList } from "@/models/customers";
import { ILoyality } from "@/models/loyality";
import { IPrices } from "@/models/pricelist";
import DataTable from "@/reuseableComponents/DataTable";
import TableComponent from "@/reuseableComponents/TableComponent";
import * as React from "react";
import { useTheme } from "styled-components";
import { LoyaltyContainer } from "../style";
interface IProps {
  list: ILoyality;
}
const LoyaltyList = ({ list }: IProps) => {
  console.log(list, "list");
  console.log(list);
  const { colors } = useTheme();
  return (
    <LoyaltyContainer>
      <Title color={colors.nafethBlue}>
        <h2>List of Memberships</h2>
      </Title>
      <DataTable
        data={list.result}
        isDeleteAble={true}
        isEditAble={true}
        isViewAble={false}
        isDuplicate={false}
        linkPageUrl={"loyalty"}
        page_color={colors.nafethBlue}
        sideBarTitle="loyalty Details"
        size="400px"
        showFilter={true}
        showAddButton={true}
        addButtonText="Add New List"
        classname={"certificate"}
      />
      {/* <TableComponent
        tableData={list.result}
        headerValue={[
          `packageName`,
          "rentalIncome",
          "extraKM",
          "extraHours",
          "discount",
          "active",
        ]}
        isDeleteAble={true}
        isEditAble={true}
        isViewAble={false}
        isDuplicate={false}
        linkPageUrl={"loyalty"}
        page_color={colors.nafethBlue}
        sideBarTitle="loyalty Details"
        size="400px"
        showAddButton={true}
        addButtonText="Add New List"
      /> */}
    </LoyaltyContainer>
  );
};
export default LoyaltyList;
