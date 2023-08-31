import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import BranchManagmentScreen from "@/components/GlobalSettings/BranchManagement";
import { GetServerSideProps } from "next";
import { NextPageWithLayout } from "../_app";
import { IBranchModel } from "@/models/branch";
import { fetchData } from "@/api/fetchapis/fetchData";
const Page: NextPageWithLayout = (branches: any) => {
  return <BranchManagmentScreen branches={branches} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
export const getServerSideProps: GetServerSideProps<{
  data: IBranchModel[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    "/settings/branches",
    company as string
  );
  const branches = await res;
  return { props: branches };
};
