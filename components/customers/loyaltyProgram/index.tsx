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
      <Title color={colors.sideBarBgColor}>
        <h2>List of Memberships</h2>
      </Title>
      <DataTable
        data={list.result}
        isDeleteAble={true}
        isEditAble={true}
        isViewAble={false}
        isDuplicate={false}
        linkPageUrl={"loyalty"}
        page_color={colors.sideBarBgColor}
        sideBarTitle="loyalty Details"
        size="400px"
        showFilter={true}
        showAddButton={true}
        addButtonText="Add New List"
        classname={"certificate"}
      />
    </LoyaltyContainer>
  );
};
export default LoyaltyList;
