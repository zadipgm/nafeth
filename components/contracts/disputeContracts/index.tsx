import * as React from "react";
import ContractPage from "../individual";
import { IContracts } from "@/models/individualContracts";
import { ICarModel } from "@/models/carmodel";
import { ICustomers, IPriceList } from "@/models/customers";
import { IAccessory } from "@/models/IAccessory";
import { IBranchModel } from "@/models/branch";
import { DisputedContainer } from "../style";
interface IProps {
  contracts: IContracts;
  cars: ICarModel;
  customers: ICustomers;
  priceList: IPriceList;
  accessories: IAccessory;
  branches: IBranchModel;
}
const DisputedContracts = ({
  contracts,
  cars,
  customers,
  priceList,
  accessories,
  branches,
}: IProps) => {
  console.log("here is obh", contracts);
  return (
    <DisputedContainer>
      <ContractPage
        contracts={contracts}
        cars={cars}
        customers={customers}
        priceList={priceList}
        accessories={accessories}
        branches={branches}
        page={"disputed"}
        title="Disputed Contract"
        isViewable={true}
        editLink={"disputecontracts"}
        isEditable={true}
        isExtendable={false}
        isDisputeable={false}
        isReturnable={true}
        isPrintAble={false}
      />
    </DisputedContainer>
  );
};
export default DisputedContracts;
