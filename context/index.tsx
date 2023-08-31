import React, { createContext } from "react";
import Cookies from "js-cookie";
// Global menu context
interface result {
  name_en: string;
  name_ar: string;
  icon: string;
  menu: [
    {
      id: number;
      name_en: string;
      name_ar: string;
      get: number;
      put: number;
      post: number;
      del: number;
      url: string;
    }
  ];
}
export interface userImenuContext {
  message: string;
  result: result[];
}
// // Global user context
interface userContext {
  userName: string;
  userPassword: string;
  company: string;
  menu: userImenuContext;
}

export const GlobalUserContext = createContext<userContext>({
  userName: "",
  userPassword: "",
  company: "",
  menu: {
    message: "",
    result: [
      {
        name_en: "",
        name_ar: "",
        icon: "",
        menu: [
          {
            id: 0,
            name_en: "",
            name_ar: "",
            get: 1,
            put: 1,
            post: 1,
            del: 1,
            url: "",
          },
        ],
      },
    ],
  },
});

export const LoginProvider = ({ children }: any) => {
  let userName = Cookies.get("userName") as string;
  let userPassword = Cookies.get("userPassword") as string;
  let company = Cookies.get("compnay") as string;

  let userMenu =
    typeof window !== "undefined"
      ? window.localStorage.getItem("menu") || "{}"
      : "{}";
  let menu = JSON.parse(userMenu);

  return (
    <GlobalUserContext.Provider
      value={{ userName, userPassword, company, menu }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};
