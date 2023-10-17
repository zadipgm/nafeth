import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { fetchData } from "@/api/fetchapis/fetchData";
import { AppContexts, IReturnPageContexts } from "@/models/appContext";
import { createContext, useContext, useState, useEffect } from "react";

const ReturnPageDataContext = createContext({});

export function AppDataProvider({ children }: any) {
  const [returnPageData, setReturnPageData] = useState<IReturnPageContexts>();

  useEffect(() => {
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    const fetchCarData = async () => {
      const activities = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/billActivity",
        company as string
      );

      setReturnPageData({
        activity: activities,
      });
    };

    fetchCarData();
  }, []);

  return (
    <ReturnPageDataContext.Provider value={returnPageData!}>
      {children}
    </ReturnPageDataContext.Provider>
  );
}

// Create a custom hook to access the context
export function useReturnPageData() {
  return useContext(ReturnPageDataContext);
}
