import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import Dashboard from "@/components/Dashboard";
const Page: NextPageWithLayout = () => {
  return <Dashboard />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
