import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import AddBranch from "@/components/SuperAdministrator/BranchManagement/AddBranch";

const Page: NextPageWithLayout = () => {
  return <AddBranch />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
