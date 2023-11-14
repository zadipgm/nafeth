import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { promotionKeys } from "@/constants";
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
  const { colors, translations } = useTheme();
  return (
    <DataTableContainer>
      <div></div>
      <Title color={colors.sideBarBgColor}>
        <h2>{translations?.promotionList}</h2>
      </Title>
      <DataTable
        data={list.result}
        showFilter={true}
        isDeleteAble={false}
        isEditAble={true}
        isViewAble={false}
        isDuplicate={false}
        linkPageUrl={"promotions"}
        page_color={colors.sideBarBgColor}
        sideBarTitle="Promotions Details"
        size="800px"
        showAddButton={true}
        addButtonText={translations?.addNewList}
        keys={promotionKeys}
        classname="small_size"
      />
    </DataTableContainer>
  );
};
export default PromotionsList;
