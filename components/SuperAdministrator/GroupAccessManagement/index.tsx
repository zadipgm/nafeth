import * as React from "react";
import { Container, DataTableWrapper } from "./style";
import { Title } from "../compnaySettings/style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import TableComponent from "@/reuseableComponents/TableComponent";
import { IGroups } from "@/models/groups";
interface IProps {
  data: IGroups;
}
const GroupAccessManagement = ({ data }: IProps) => {
  const { isDark }: any = useTheme();

  return (
    <>
      <Title color={isTheme().color}>Group Access Management</Title>
      <Container color={isTheme().color} bcolor={isTheme().bcolor}>
        <DataTableWrapper>
          <TableComponent
            tableData={data.result}
            headerValue={["name_en", "description_en", "active"]}
            isDeleteAble={false}
          />
        </DataTableWrapper>
      </Container>
    </>
  );
};
export default GroupAccessManagement;
