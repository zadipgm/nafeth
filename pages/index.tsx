import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import Layout from "@/PageLayout";

const Page: NextPageWithLayout = () => {
  return <>Header</>;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
