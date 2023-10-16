import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { fetchData } from "@/api/fetchapis/fetchData";
import { AppContexts } from "@/models/appContext";
import { createContext, useContext, useState, useEffect } from "react";

const AppDataContext = createContext({});

export function AppDataProvider({ children }: any) {
  const [appData, setAppData] = useState<AppContexts>();

  useEffect(() => {
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    const fetchCarData = async () => {
      const cars = await fetchData(
        userName as string,
        userPassword as string,
        "/cars/",
        company as string
      );
      const PaymentType = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/PaymentType",
        company as string
      );
      const PaymentCategory = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/PaymentCategory",
        company as string
      );
      const contracts = await fetchData(
        userName as string,
        userPassword as string,
        "/contracts/Individual/open",
        company as string
      );
      const customers = await fetchData(
        userName as string,
        userPassword as string,
        "/customers",
        company as string
      );
      const PaymentMethods = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/PaymentMethods",
        company as string
      );
      const banks = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Banks",
        company as string
      );
      const user = await fetchData(
        userName as string,
        userPassword as string,
        "/settings/Users",
        company as string
      );
      setAppData({
        cars: cars,
        contracts: contracts,
        paymentType: PaymentType,
        paymentCategory: PaymentCategory,
        Customers: customers,
        paymentMethods: PaymentMethods,
        banks: banks,
        user: user,
      });
    };

    fetchCarData();
  }, []);

  return (
    <AppDataContext.Provider value={appData!}>
      {children}
    </AppDataContext.Provider>
  );
}

// Create a custom hook to access the context
export function useAppData() {
  return useContext(AppDataContext);
}
