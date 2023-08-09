import { fetchModules } from "@/api/fetchmodules";
import { IModuleTypes } from "@/models/module";
import Cookies from "js-cookie";
import React, { createContext } from "react";

// GroupMenu context
interface IModules {
  message: string;
  result: IModuleTypes[];
}
export const ModuleContext = createContext<IModules>({
  message: "",
  result: [
    {
      name_en: "",
      name_ar: "",
      icon: "",
      menu: [
        {
          del: 0,
          get: 0,
          id: 0,
          name_ar: "",
          name_en: "",
          post: 0,
          put: 0,
          url: "",
        },
      ],
    },
  ],
});

export const ModuleProvider = ({ children }: any) => {
  //fech the menu
  const [menu, setMenu] = React.useState<IModuleTypes[]>();
  const [loading, setLoading] = React.useState(true);
  let userName = Cookies.get("userName") as string;
  let userPassword = Cookies.get("userPassword") as string;
  let company = Cookies.get("company") as string;
  const fetch = async () => {
    // debugger;
    setLoading(true);
    await fetchModules(userName, userPassword, "/settings/modules", company)
      .then((modules) => setMenu(modules))
      .catch((err) => console.log(err));
    setLoading(false);
  };
  React.useEffect(() => {
    fetch();
    setLoading(() => false);
  }, [loading]);

  return loading ? (
    <>Fetching data...</>
  ) : (
    <ModuleContext.Provider value={{ message: "success", result: menu ?? [] }}>
      {children}
    </ModuleContext.Provider>
  );
};
