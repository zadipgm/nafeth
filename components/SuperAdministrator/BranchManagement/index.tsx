import * as React from "react";
import BranchList from "./BranchList";
import { getBranches } from "@/fetchApi";
import { IBranch, IBranchList, IBranches } from "@/models/branch";
interface IProps {
  branches: IBranchList[];
}
const BranchManagmentScreen = ({ branches }: IProps) => {
  return <BranchList branch={branches} />;
};
export default BranchManagmentScreen;
