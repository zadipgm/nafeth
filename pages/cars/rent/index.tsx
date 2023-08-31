import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";

import RentCar from "@/components/CarRental/rentCar";
const Page: NextPageWithLayout = () => {
  return <RentCar />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
