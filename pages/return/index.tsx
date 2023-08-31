import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import ReturnContract from "@/components/contracts/returnContract";

const Page: NextPageWithLayout = () => {
  return <ReturnContract />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
