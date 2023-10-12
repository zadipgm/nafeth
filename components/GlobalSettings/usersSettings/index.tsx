import TableComponent from "@/reuseableComponents/TableComponent";
import * as React from "react";
import { useTheme } from "styled-components";
import { Title } from "../BranchManagement/style";
import { IUser } from "@/models/userModel";
import DataTable from "@/reuseableComponents/DataTable";

interface IProps {
  data: IUser;
}
const UserList = ({ data }: IProps) => {
  const { locale, colors } = useTheme();

  return (
    <>
      <Title color={colors.sideBarBgColor}>
        <h2>User List</h2>
      </Title>

      <DataTable
        data={data}
        isDeleteAble={false}
        isDuplicate={false}
        linkPageUrl={"Users"}
        page_color={colors.sideBarBgColor}
        sideBarTitle="User Details"
        showFilter={true}
        showAddButton={true}
        addButtonText="Add User"
        isEditAble={true}
      />
    </>
  );
};
export default UserList;
