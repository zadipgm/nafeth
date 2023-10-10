import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import ContractPage from "@/components/contracts/individual";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import { IContracts } from "@/models/individualContracts";
import { ICarModel } from "@/models/carmodel";
import { ICustomers, IPriceList } from "@/models/customers";
import { IAccessory } from "@/models/IAccessory";
import { IBranchModel } from "@/models/branch";
const Page: NextPageWithLayout = (props: any) => {
  return (
    <ContractPage
      contracts={props.contracts}
      cars={props.cars}
      customers={props.customers}
      priceList={props.priceList}
      accessories={props.accessories}
      branches={props.branches}
      page={"individual"}
      title={"Open Contracts"}
      isDisputeable={true}
      isEditable={false}
      isExtendable={true}
      isReturnable={true}
      isViewable={true}
      isPrintAble={false}
      editLink="individualcontracts"
    />
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
export const getServerSideProps: GetServerSideProps<{
  contracts: IContracts;
  cars: ICarModel;
  customers: ICustomers;
  priceList: IPriceList;
  accessories: IAccessory;
  branches: IBranchModel;
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    "/contracts/Individual/open",
    company as string
  );
  const carRes = await fetchData(
    userName as string,
    userPassword as string,
    "/cars/",
    company as string
  );
  const customerRes = await fetchData(
    userName as string,
    userPassword as string,
    "/customers/Customers",
    company as string
  );
  const Pricelist = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/Pricelist",
    company as string
  );
  const accessories = await fetchData(
    userName as string,
    userPassword as string,
    "/cars/Accessories",
    company as string
  );
  const branch = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/Branches",
    company as string
  );
  const data = await res;
  return {
    props: {
      contracts: data,
      cars: carRes,
      customers: customerRes,
      priceList: Pricelist,
      accessories: accessories,
      branches: branch,
    },
  };
};
