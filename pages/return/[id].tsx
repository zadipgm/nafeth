import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import ContractExtention from "@/components/contracts/contractExtention";
import { fetchData } from "@/api/fetchapis/fetchData";
import { GetServerSideProps } from "next";
import { ICarModel } from "@/models/carmodel";
import { ICustomers, IPriceList } from "@/models/customers";
import { IContracts } from "@/models/individualContracts";
import ReturnContract from "@/components/contracts/returnContractPage";
import { IBranchModel } from "@/models/branch";
import { IAccessory } from "@/models/IAccessory";
import { AppDataProvider } from "@/context/returnpageContext";
import { RentCarDataProvider } from "@/context/rentPageLookup";

const Page: NextPageWithLayout = (props: any) => {
  return (
    <RentCarDataProvider>
      <AppDataProvider>
        <ReturnContract contract={props.contract} />
      </AppDataProvider>
    </RentCarDataProvider>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export const getServerSideProps: GetServerSideProps<{
  contract: IContracts;
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

  return {
    props: {
      contract: contract,
    },
  };
};
