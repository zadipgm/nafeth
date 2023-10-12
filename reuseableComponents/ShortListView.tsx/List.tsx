import {
  CardPlateWrapper,
  ContractCustomer,
  ModelListViewWrapper,
} from "@/components/CarRental/style";
import { ICarModel } from "@/models/carmodel";
import { ICustomers } from "@/models/customers";
import CarContractNumberSvg from "@/public/icons/carContractNumberSvg";
import * as React from "react";
import { useTheme } from "styled-components";
import IconComponent from "../IconComponent";
import { filterCar, filterCustomer } from "@/_helpers/filters";
import CarPlate from "@/components/CarRental/CarPlate";
import { CloseSvgWrapper, ContractCustomerName, ContractNumber } from "./style";
import CloseSvg from "@/public/icons/closeSvg";
interface IProps {
  contract: any;
  cars?: ICarModel;
  customers?: ICustomers;
  close: () => void;
}
const ListView = ({ contract, cars, customers, close }: IProps) => {
  const { colors, locale } = useTheme();

  const handleSelected = () => {
    setTimeout(() => {
      close();
    }, 500);
  };
  return (
    <div onClick={handleSelected}>
      <ModelListViewWrapper className={`short-list-view`}>
        <ContractCustomer className="short-list-view">
          <ContractNumber>
            <CarContractNumberSvg
              fill={colors.sideBarBgColor}
              width="25px"
              height="25px"
            />
            <span className="make-model">{contract.contractNo}</span>
          </ContractNumber>
          <ContractCustomerName>
            <IconComponent
              width={"25px"}
              height="25px"
              fill={colors.sideBarBgColor}
              icon={"carduserSvg"}
            />
            <span className="contract-customer">
              {
                filterCustomer(customers!, contract.customerID)[0][
                  `fullname_${locale}`
                ]
              }
            </span>
          </ContractCustomerName>
        </ContractCustomer>
        <CardPlateWrapper className="short-list-view">
          <CarPlate car={filterCar(cars!, contract.carID)[0]} />
        </CardPlateWrapper>
      </ModelListViewWrapper>
    </div>
  );
};
export default ListView;
