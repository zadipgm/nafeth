import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import ContractPage from "@/components/contracts/individual";

const Page: NextPageWithLayout = () => {
  return <ContractPage />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
