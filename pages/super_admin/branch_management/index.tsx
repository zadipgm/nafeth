import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "../../_app";
import BranchManagmentScreen from "@/components/SuperAdministrator/BranchManagement";
import { GetStaticProps } from "next";
import { IBranchList } from "@/models/branch";
const Page: NextPageWithLayout = ({ branches }: any) => {
  return <BranchManagmentScreen branches={branches} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export const getStaticProps: GetStaticProps<{
  branches: IBranchList;
}> = async () => {
  const res = await fetch("https://appapi.nafeth.sa/api/branches/beta");
  const branches = await res.json();
  return { props: { branches } };
};
