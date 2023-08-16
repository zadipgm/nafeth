import TableComponent from "@/reuseableComponents/TableComponent";
import * as React from "react";
import { useTheme } from "styled-components";
import { Title } from "../BranchManagement/style";
import { IUser } from "@/models/userModel";

interface IProps {
  data: IUser;
}
const UserList = ({ data }: IProps) => {
  const { locale, colors }: any = useTheme();

  return (
    <>
      <Title color={colors.darkYellow}>
        <h2>User List</h2>
      </Title>
      <TableComponent
        tableData={data}
        headerValue={[
          "username",
          `fullname_${locale}`,
          "idNumber",
          // "groupId",
          "email",
          "phone",
          "active",
          // "baseBranch",
        ]}
        isDeleteAble={false}
        isDuplicate={false}
        linkPageUrl={"Users"}
        page_color={colors.darkYellow}
        sideBarTitle="User Details"
      />
    </>
  );
};
export default UserList;
