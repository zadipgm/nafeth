import type { ReactElement } from "react";

import LoginScreen from "@/components/LoginScreen";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return <LoginScreen />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Page;
