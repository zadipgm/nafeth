import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import ContractExtention from "@/components/contracts/contractExtention";
import { fetchData } from "@/api/fetchapis/fetchData";
import { GetServerSideProps } from "next";
import { ICarModel } from "@/models/carmodel";
import { ICustomers } from "@/models/customers";
import { IContracts } from "@/models/individualContracts";
import { IBranchModel } from "@/models/branch";

const Page: NextPageWithLayout = (props: any) => {
  return (
    <ContractExtention
      contract={props.contract}
      cars={props.cars}
      customers={props.customers}
      branches={props.branches}
    />
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export const getServerSideProps: GetServerSideProps<{
  contract: IContracts;
  cars: ICarModel;
  customers: ICustomers;
  branches: IBranchModel;
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const contract = await fetchData(
    userName as string,
    userPassword as string,
    `/contracts/Individual/${ctx.query.id}`,
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
  const branches = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/Branches",
    company as string
  );

  return {
    props: {
      contract: contract,
      cars: carRes,
      customers: customerRes,
      branches: branches,
    },
  };
};
