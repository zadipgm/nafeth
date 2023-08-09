import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import CarRent from "@/components/CarRental";
const Page: NextPageWithLayout = () => {
  return <CarRent />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
