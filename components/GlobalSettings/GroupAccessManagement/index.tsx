import * as React from "react";
import { Container, DataTableWrapper } from "./style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import TableComponent from "@/reuseableComponents/TableComponent";
import { IGroups } from "@/models/groups";
import { Title } from "../BranchManagement/style";
interface IProps {
  data: IGroups;
}
const GroupAccessManagement = ({ data }: IProps) => {
  const { colors }: any = useTheme();

  return (
    <>
      <Title color={colors.nafethBlue}>
        <h2>Group Access Management</h2>
      </Title>
      <Container color={isTheme().color} bcolor={isTheme().bcolor}>
        <DataTableWrapper>
          <TableComponent
            tableData={data.result}
            headerValue={["name_en", "description_en", "active"]}
            isDeleteAble={false}
            linkPageUrl={"groups"}
            page_color={colors.nafethBlue}
            isDuplicate={true}
            sideBarTitle="Group Details"
          />
        </DataTableWrapper>
      </Container>
    </>
  );
};
export default GroupAccessManagement;
