import * as React from "react";
import { Container, Title } from "./style";
import GroupList from "./GroupList";
const GroupAccessManagement = () => {
  return (
    <Container>
      <Title>Group Access Management</Title>
      <GroupList />
    </Container>
  );
};
export default GroupAccessManagement;
