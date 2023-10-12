import * as React from "react";
import { ListViewContainer } from "@/components/CarRental/style";
import List from "./list";
import { ICustomers } from "@/models/customers";
type Anchor = "top" | "left" | "bottom" | "right";
interface ICarProps {
  contracts?: any;
  cars?: any;
  customers?: ICustomers;
  toggleDrawer?: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit?: (param: any) => void;
  show: number;
  page: string;
  isViewable: boolean;
  isEditable: boolean;
  isExtendable: boolean;
  isDisputeable: boolean;
  isReturnable: boolean;
  isPrintAble: boolean;
  editLink: string;
}
const ContractListView = ({
  contracts,
  cars,
  show,
  customers,
  page,
  isViewable,
  isEditable,
  isDisputeable,
  isExtendable,
  isReturnable,
  isPrintAble,
  editLink,
  toggleDrawer,
}: ICarProps) => {
  return (
    <>
      {contracts?.slice(0, show)?.map((contract: any, i: any) => {
        return (
          <List
            key={i}
            contract={contract}
            cars={cars}
            page={page}
            customers={customers}
            toggleDrawer={toggleDrawer}
            isViewable={isViewable}
            isEditable={isEditable}
            isExtendable={isExtendable}
            isDisputeable={isDisputeable}
            isReturnable={isReturnable}
            isPrintAble={isPrintAble}
            editLink={editLink}
          />
        );
      })}
    </>
  );
};
export default ContractListView;
