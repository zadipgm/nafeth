import { getKeysandValues } from "@/_helpers/getKeysAndValue";
import { IBranchModel } from "@/models/branch";
import TableComponent from "@/reuseableComponents/TableComponent";
import CollapsibleTable from "@/reuseableComponents/colapsibleTable";
import * as React from "react";
import { useTheme } from "styled-components";
import { isTheme } from "@/_helpers/getTheme";
import { Title } from "../style";
import DataTable from "@/reuseableComponents/DataTable";

interface IProps {
  branches: IBranchModel;
}
const BranchList = ({ branches }: IProps) => {
  const { locale, colors }: any = useTheme();

  return (
    <>
      <Title color={colors.purple}>
        <h2>Branch List</h2>
      </Title>
      {/* <TableComponent
        tableData={branches.result}
        headerValue={[`name_${locale}`, "email", "address", "phone", "active"]}
        isDeleteAble={false}
        isDuplicate={false}
        linkPageUrl={"branches"}
        page_color={colors.purple}
        sideBarTitle="Branch Details"
      /> */}
      <DataTable
        data={branches.result}
        isDeleteAble={false}
        isEditAble={false}
        isDuplicate={false}
        isViewAble={true}
        linkPageUrl={"branches"}
        page_color={colors.purple}
        sideBarTitle="Branch Details"
        size="600px"
        showAddButton={true}
        addButtonText="Add Branch"
        showFilter={true}
      />
    </>
  );
};
export default BranchList;
