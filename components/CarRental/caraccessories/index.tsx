import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { IAccessory } from "@/models/IAccessory";
import { IPriceList } from "@/models/customers";
import { ILoyality } from "@/models/loyality";
import { IPrices } from "@/models/pricelist";
import TableComponent from "@/reuseableComponents/TableComponent";
import * as React from "react";
import { useTheme } from "styled-components";
interface IProps {
  list: IAccessory;
}
const CarAccessoryList = ({ list }: IProps) => {
  console.log(list, "list");
  console.log(list);
  const { colors } = useTheme();

  return (
    <>
      <Title color={colors.nafethBlue}>
        <h2>Car Accessories List</h2>
      </Title>
      <TableComponent
        tableData={list.result}
        headerValue={[
          `accessories_en`,
          "accessories_ar",
          "description_en",
          "description_ar",
          "cost",
          "active",
        ]}
        isDeleteAble={true}
        isEditAble={true}
        isViewAble={false}
        isDuplicate={false}
        linkPageUrl={"caraccessories"}
        page_color={colors.nafethBlue}
        sideBarTitle="Car Accessories Details"
        size="400px"
        showAddButton={true}
        addButtonText="Add New   List"
      />
    </>
  );
};
export default CarAccessoryList;
