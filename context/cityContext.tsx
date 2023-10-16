import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { fetchData } from "@/api/fetchapis/fetchData";
import Cookies from "js-cookie";
import { createContext, useContext, useState, useEffect } from "react";

// Create a context
const DataContext = createContext({});

// Create a provider component
export function DataProvider({ children }: any) {
  const [data, setData] = useState({});

  // Simulate fetching data once when the component mounts
  useEffect(() => {
    // Replace this with your actual data fetching logic
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = "/cars/";
    const fetchCarData = async () => {
      const response = await fetchData(userName, userPassword, url, company);
      const result = await response;
      setData(result);
    };

    fetchCarData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// Create a custom hook to access the context
export function useData() {
  return useContext(DataContext);
}
