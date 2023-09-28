import * as React from "react";
import ContractPage from "../individual";
import { IContracts } from "@/models/individualContracts";
import { ICarModel } from "@/models/carmodel";
import { ICustomers, IPriceList } from "@/models/customers";
import { IAccessory } from "@/models/IAccessory";
import { IBranchModel } from "@/models/branch";
interface IProps {
  contracts: IContracts;
  cars: ICarModel;
  customers: ICustomers;
  priceList: IPriceList;
  accessories: IAccessory;
  branches: IBranchModel;
}
const ReturnContracts = ({
  contracts,
  cars,
  customers,
  priceList,
  accessories,
  branches,
}: IProps) => {
  return (
    <div>
      <ContractPage
        contracts={contracts}
        cars={cars}
        customers={customers}
        priceList={priceList}
        accessories={accessories}
        branches={branches}
        page={"return"}
        title="Return Contract"
        isViewable={true}
        isEditable={false}
        isExtendable={false}
        isDisputeable={false}
        isReturnable={false}
        isPrintAble={true}
      />
    </div>
  );
};
export default ReturnContracts;
