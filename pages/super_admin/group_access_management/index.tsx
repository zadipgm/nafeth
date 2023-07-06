import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import GroupAccessManagement from "@/components/SuperAdministrator/GroupAccessManagement";
import { NextPageWithLayout } from "@/pages/_app";

const Page: NextPageWithLayout = () => {
  return <GroupAccessManagement />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
