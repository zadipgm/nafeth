import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { IPriceList } from "@/models/customers";
import { IPrices } from "@/models/pricelist";
import { IPromotions } from "@/models/promotions";
import DataTable from "@/reuseableComponents/DataTable";
import { DataTableContainer } from "@/reuseableComponents/DataTable/style";
import TableComponent from "@/reuseableComponents/TableComponent";
import * as React from "react";
import { useTheme } from "styled-components";
interface IProps {
  list: IPromotions;
}
const PromotionsList = ({ list }: IProps) => {
  console.log(list);
  const { colors } = useTheme();
  return (
    <DataTableContainer>
      <div></div>
      <Title color={colors.nafethBlue}>
        <h2>Promotion List</h2>
      </Title>
      <DataTable
        data={list.result}
        showFilter={true}
        isDeleteAble={false}
        isEditAble={true}
        isViewAble={true}
        isDuplicate={false}
        linkPageUrl={"promotions"}
        page_color={colors.nafethBlue}
        sideBarTitle="Promotions Details"
        size="800px"
        showAddButton={true}
        addButtonText="Add New List"
      />
    </DataTableContainer>
  );
};
export default PromotionsList;
