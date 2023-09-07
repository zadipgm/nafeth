import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { IPriceList } from "@/models/customers";
import { IPrices } from "@/models/pricelist";
import TableComponent from "@/reuseableComponents/TableComponent";
import * as React from "react";
import { useTheme } from "styled-components";
interface IProps {
  list: IPrices;
}
const PriceListComponent = ({ list }: IProps) => {
  console.log(list);
  const { colors } = useTheme();
  return (
    <>
      <Title color={colors.nafethBlue}>
        <h2>Price Lists</h2>
      </Title>
      <TableComponent
        tableData={list.result}
        headerValue={[`priceList_en`, "priceList_ar", "discount", "active"]}
        isDeleteAble={false}
        isEditAble={true}
        isViewAble={false}
        isDuplicate={false}
        linkPageUrl={"pricelist"}
        page_color={colors.nafethBlue}
        sideBarTitle="Pricelist Details"
        size="400px"
        showAddButton={true}
        addButtonText="Add New List"
      />
    </>
  );
};
export default PriceListComponent;
