import * as React from "react";
import { Container, DataTableWrapper } from "./style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import TableComponent from "@/reuseableComponents/TableComponent";
import { IGroups } from "@/models/groups";
import { Title } from "../BranchManagement/style";
import DataTable from "@/reuseableComponents/DataTable";
import { groupKeys } from "@/constants";
interface IProps {
  data: IGroups;
}
const GroupAccessManagement = ({ data }: IProps) => {
  const { colors, translations } = useTheme();

  return (
    <>
      <Title color={colors.sideBarBgColor}>
        <h2>{translations?.groupAccessManagement}</h2>
      </Title>
      <Container color={isTheme().color} bcolor={isTheme().bcolor}>
        <DataTableWrapper>
          <DataTable
            isDeleteAble={false}
            linkPageUrl={"groups"}
            page_color={colors.sideBarBgColor}
            isDuplicate={true}
            sideBarTitle={translations?.groupDetails as string}
            data={data.result}
            isEditAble={true}
            isViewAble={true}
            size="600px"
            showAddButton={true}
            addButtonText={translations?.addGroup}
            showFilter={true}
            keys={groupKeys}
          />
        </DataTableWrapper>
      </Container>
    </>
  );
};
export default GroupAccessManagement;
