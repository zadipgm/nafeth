import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import AddLoyalityList from "@/components/customers/loyaltyProgram/add";
import AddAccessoryList from "@/components/CarRental/caraccessories/add";
const Page: NextPageWithLayout = (props) => {
  return <AddAccessoryList />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
