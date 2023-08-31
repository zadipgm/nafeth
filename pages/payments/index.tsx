import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import ContractPage from "@/components/contracts/individual";
import Payments from "@/components/payments";

const Page: NextPageWithLayout = () => {
  return <Payments />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
