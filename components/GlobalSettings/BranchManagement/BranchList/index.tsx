import { getKeysandValues } from "@/_helpers/getKeysAndValue";
import { IBranchModel } from "@/models/branch";
import TableComponent from "@/reuseableComponents/TableComponent";
import CollapsibleTable from "@/reuseableComponents/colapsibleTable";
import * as React from "react";
import { useTheme } from "styled-components";
import { isTheme } from "@/_helpers/getTheme";
import { Title } from "../style";
import DataTable from "@/reuseableComponents/DataTable";
import { branchKeys } from "@/constants";

interface IProps {
  branches: IBranchModel;
}
const BranchList = ({ branches }: IProps) => {
  const { translations, colors } = useTheme();

  return (
    <>
      <Title color={colors.sideBarBgColor}>
        <h2>{translations?.branchList}</h2>
      </Title>
      <DataTable
        data={branches.result}
        isDeleteAble={false}
        isEditAble={true}
        isDuplicate={false}
        isViewAble={true}
        linkPageUrl={"branches"}
        page_color={colors.sideBarBgColor}
        sideBarTitle={translations?.branchDetails as string}
        size="500px"
        showAddButton={true}
        addButtonText={translations?.addBranch as string}
        showFilter={true}
        keys={branchKeys}
      />
    </>
  );
};
export default BranchList;
