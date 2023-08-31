import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/PageLayout";
import ErrorPage from "@/components/ErrorPage";
const Page: NextPageWithLayout = () => {
  return <ErrorPage />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
