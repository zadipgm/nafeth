import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { IPriceList } from "@/models/customers";
import { IPrices } from "@/models/pricelist";
import DataTable from "@/reuseableComponents/DataTable";
import TableComponent from "@/reuseableComponents/TableComponent";
import * as React from "react";
import { useTheme } from "styled-components";
import { LoyaltyContainer } from "../style";
interface IProps {
  list: IPrices;
}
const PriceListComponent = ({ list }: IProps) => {
  console.log(list);
  const { colors } = useTheme();
  return (
    <LoyaltyContainer>
      <Title color={colors.sideBarBgColor}>
        <h2>Price Lists</h2>
      </Title>
      <DataTable
        data={list.result}
        isDeleteAble={false}
        isEditAble={true}
        isViewAble={false}
        isDuplicate={false}
        linkPageUrl={"pricelist"}
        page_color={colors.sideBarBgColor}
        sideBarTitle="Pricelist Details"
        size="400px"
        showAddButton={true}
        addButtonText="Add New List"
        showFilter={true}
      />
    </LoyaltyContainer>
  );
};
export default PriceListComponent;
