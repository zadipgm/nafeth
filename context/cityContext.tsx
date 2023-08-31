import { fetchData } from "@/api/fetchapis/fetchData";
import { ICitiesModel, ICity } from "@/models/city";
import Cookies from "js-cookie";
import React from "react";

export const CitiesContext = React.createContext(
  {
    message: "",
    result: [
      {
        id: 17,
        name_en: "",
        name_ar: "",
      },
    ],
  } // Initial value
);

export const CityProvider = (props: any) => {
  const [cities, setCities] = React.useState<ICitiesModel>();
  let userName = Cookies.get("userName") as string;
  let userPassword = Cookies.get("userPassword") as string;
  let company = Cookies.get("company") as string;
  const fetchMyData = async () => {
    const res = await fetchData(
      userName,
      userPassword,
      "/lookup/cities",
      company
    );

    if (res) {
      setCities(res);
    } else {
      console.log("No data");
    }
  };
  React.useEffect(() => {
    fetchMyData();
  }, []);
  return (
    <CitiesContext.Provider
      value={{
        message: cities?.message as string,
        result: cities?.result as ICity[],
      }}
    >
      {props.children}
    </CitiesContext.Provider>
  );
};
