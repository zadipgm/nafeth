import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import EditBranch from "@/components/SuperAdministrator/BranchManagement/EditBranch";
import { NextPageWithLayout } from "@/pages/_app";
import React from "react";

const Page: NextPageWithLayout = ({ branch }: any) => {
  return <EditBranch branches={branch} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export async function getServerSideProps({ params }: any) {
  const res = await fetch(
    `https://appapi.nafeth.sa/api/branches/beta,${params.id}`
  );
  const branches = await res.json();
  return {
    props: { branch: branches },
  };
}
