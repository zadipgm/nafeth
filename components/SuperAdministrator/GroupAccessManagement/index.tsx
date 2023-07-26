import * as React from "react";
import { Container, DataTableWrapper } from "./style";
import DataTable from "./GroupList";
import { Title } from "../compnaySettings/style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";

const GroupAccessManagement = () => {
  const { isDark }: any = useTheme();
  return (
    <>
      <Title color={isTheme().color}>Company Settings</Title>
      <Container>
        <DataTableWrapper>
          <DataTable />
        </DataTableWrapper>
      </Container>
    </>
  );
};
export default GroupAccessManagement;
