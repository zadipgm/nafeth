import { getKeysandValues } from "@/_helpers/getKeysAndValue";
import { IBranch, IBranchList } from "@/models/branch";
import TableComponent from "@/reuseableComponents/TableComponent";
import CollapsibleTable from "@/reuseableComponents/colapsibleTable";
import * as React from "react";
import { useTheme } from "styled-components";
import { Title } from "../../compnaySettings/style";
import { isTheme } from "@/_helpers/getTheme";

interface IProps {
  branch: IBranchList[];
}
const BranchList = ({ branch }: IProps) => {
  const { locale }: any = useTheme();

  return (
    <>
      <Title color={isTheme().color}>Company Settings</Title>
      <TableComponent
        tableData={branch}
        headerValue={[`name_${locale}`, "email", "phone", "active"]}
      />
    </>
  );
};
export default BranchList;
