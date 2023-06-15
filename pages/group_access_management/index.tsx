import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "../_app";
import GroupAccessManagement from "@/components/SuperAdministrator/GroupAccessManagement";

const Page: NextPageWithLayout = () => {
  return <GroupAccessManagement />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
