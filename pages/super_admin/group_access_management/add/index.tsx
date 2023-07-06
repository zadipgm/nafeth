import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import GroupEditForm from "@/components/SuperAdministrator/GroupAccessManagement/GroupEditList";

const Page: NextPageWithLayout = () => {
  return <GroupEditForm title={"Group Access"} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
