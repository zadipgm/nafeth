import * as React from "react";
import { Container, DataTableWrapper, Title } from "./style";
import DataTable from "./GroupList";

const GroupAccessManagement = () => {
  return (
    <Container>
      <Title>Group Access Management</Title>
      <DataTableWrapper>
        <DataTable />
      </DataTableWrapper>
    </Container>
  );
};
export default GroupAccessManagement;
