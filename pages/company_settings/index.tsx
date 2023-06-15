import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "../_app";
import CompnaySettings from "@/components/SuperAdministrator/compnaySettings";

const Page: NextPageWithLayout = () => {
  return <CompnaySettings />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
