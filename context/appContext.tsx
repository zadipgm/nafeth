import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { fetchData } from "@/api/fetchapis/fetchData";
import { AppContexts } from "@/models/appContext";
import { ICarModel } from "@/models/carmodel";
import { ILookUp } from "@/models/lookup";
import { IGroup } from "@/models/userModel";
import Cookies from "js-cookie";
import { createContext, useContext, useState, useEffect } from "react";

// Create a context
const DataContext = createContext({});

// Create a provider component
export function DataProvider({ children }: any) {
  const [appData, setAppData] = useState<AppContexts>();

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
      const CarTransmission = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/CarTransmission",
        company as string
      );
      const CarInsuranceType = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/CarInsuranceType",
        company as string
      );
      const CarPlateType = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/CarPlateType",
        company as string
      );
      const Branches = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Branches",
        company as string
      );
      const CarInsurance = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/CarInsurance",
        company as string
      );
      const CarFuel = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/CarFuel",
        company as string
      );
      const CarColor = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/CarColor",
        company as string
      );
      const CarType = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/CarType",
        company as string
      );
      const CarMake = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/CarMake",
        company as string
      );
      const cityResponse = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/cities",
        company as string
      );
      const countryResponse = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/countries",
        company as string
      );
      const regionResponse = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/regions",
        company as string
      );
      const categories = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Categories",
        company as string
      );
      const Pricelist = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Pricelist",
        company as string
      );
      const managerResponse = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Managers",
        company as string
      );
      const groupResponse = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Groups",
        company as string
      );
      setAppData({
        cars: result,
        groups: groupResponse,
        manager: managerResponse,
        categories: categories,
        branches: Branches,
        pricelist: Pricelist,
        countries: countryResponse,
        cities: cityResponse,
        regions: regionResponse,
        carTransmission: CarTransmission,
        carInsuranceType: CarInsuranceType,
        carPlateType: CarPlateType,
        carInsurance: CarInsurance,
        carFuel: CarFuel,
        carColor: CarColor,
        carType: CarType,
        carMake: CarMake,
      });
    };

    fetchCarData();
  }, []);

  return (
    <DataContext.Provider value={appData!}>{children}</DataContext.Provider>
  );
}

// Create a custom hook to access the context
export function useData() {
  return useContext(DataContext);
}
