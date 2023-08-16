import * as React from "react";
import BranchList from "./BranchList";
import { IBranchModel } from "@/models/branch";
import { ICountriesModel } from "@/models/country";
interface IProps {
  branches: IBranchModel;
}
const BranchManagmentScreen = ({ branches }: IProps) => {
  return <BranchList branches={branches} />;
};
export default BranchManagmentScreen;
