import * as React from "react";
import { Container, DataTableWrapper } from "./style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import TableComponent from "@/reuseableComponents/TableComponent";
import { IGroups } from "@/models/groups";
import { Title } from "../BranchManagement/style";
import DataTable from "@/reuseableComponents/DataTable";
interface IProps {
  data: IGroups;
}
const GroupAccessManagement = ({ data }: IProps) => {
  const { colors }: any = useTheme();

  return (
    <>
      <Title color={colors.sideBarBgColor}>
        <h2>Group Access Management</h2>
      </Title>
      <Container color={isTheme().color} bcolor={isTheme().bcolor}>
        <DataTableWrapper>
          <DataTable
            isDeleteAble={false}
            linkPageUrl={"groups"}
            page_color={colors.sideBarBgColor}
            isDuplicate={true}
            sideBarTitle="Group Details"
            data={data.result}
            isEditAble={true}
            isViewAble={true}
            size="600px"
            showAddButton={true}
            addButtonText="Add Group"
            showFilter={true}
          />
        </DataTableWrapper>
      </Container>
    </>
  );
};
export default GroupAccessManagement;
