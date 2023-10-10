import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { IAccessory } from "@/models/IAccessory";
import { IPriceList } from "@/models/customers";
import { ILoyality } from "@/models/loyality";
import { IPrices } from "@/models/pricelist";
import DataTable from "@/reuseableComponents/DataTable";
import TableComponent from "@/reuseableComponents/TableComponent";
import * as React from "react";
import { useTheme } from "styled-components";
import { Container } from "../style";
interface IProps {
  list: IAccessory;
}
const CarAccessoryList = ({ list }: IProps) => {
  console.log(list, "list");
  console.log(list);
  const { colors } = useTheme();

  return (
    <Container>
      <Title color={colors.sideBarBgColor}>
        <h2>Car Accessories List</h2>
      </Title>
      <DataTable
        data={list.result}
        showFilter={true}
        isDeleteAble={true}
        isEditAble={true}
        isViewAble={false}
        isDuplicate={false}
        linkPageUrl={"caraccessories"}
        page_color={colors.sideBarBgColor}
        sideBarTitle="Car Accessories Details"
        size="400px"
        showAddButton={true}
        addButtonText="Add New   List"
      />
    </Container>
  );
};
export default CarAccessoryList;
