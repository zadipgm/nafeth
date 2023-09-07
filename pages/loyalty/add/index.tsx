import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import AddLoyalityList from "@/components/customers/loyaltyProgram/add";
const Page: NextPageWithLayout = (props) => {
  return <AddLoyalityList />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
