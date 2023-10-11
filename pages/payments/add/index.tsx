import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import AddPayment from "@/components/payments/add";
import { AppDataProvider } from "@/context/appContext";
const Page: NextPageWithLayout = () => {
  return (
    <AppDataProvider>
      {" "}
      <AddPayment />
    </AppDataProvider>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
