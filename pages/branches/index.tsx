import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import BranchManagmentScreen from "@/components/SuperAdministrator/BranchManagement";
import { GetStaticProps } from "next";
import { encode as base64_encode } from "base-64";
import { IBranchList } from "@/models/branch";
import { NextPageWithLayout } from "../_app";
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
  let auth = base64_encode(`${"admin"}:${"admin"}`);
  const res = await fetch("https://appapi.nafeth.sa/api/settings/branches/", {
    headers: {
      Authorization: `Basic ${auth}`,
      company: "nafeth",
    },
  });
  const branches = await res.json();
  return { props: { branches } };
};
