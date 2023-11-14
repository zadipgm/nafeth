import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { fetchData } from "@/api/fetchapis/fetchData";
import { IRentPageContext } from "@/models/IRentPageContext";
import { createContext, useContext, useState, useEffect } from "react";
const RentCarContext = createContext<any>({});
export function RentCarDataProvider({ children }: any) {
  const [rentCarData, setRentCarData] = useState<IRentPageContext>();
  useEffect(() => {
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    const fetchCarData = async () => {
      const tajeerDropdownLookupData = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/SafetyTriangle_FireExtinguisher_FirstAidKit_SpareTireTools",
        company as string
      );
      const Speedometer_Keys = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Speedometer_Keys",
        company as string
      );
      const FuelType = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/FuelType",
        company as string
      );
      const AvailableFuel = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/AvailableFuel",
        company as string
      );
      const CarSeats = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/CarSeats",
        company as string
      );
      const customers = await fetchData(
        userName as string,
        userPassword as string,
        "/customers",
        company as string
      );
      const accessories = await fetchData(
        userName as string,
        userPassword as string,
        "/cars/Accessories",
        company as string
      );
      const categories = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Categories",
        company as string
      );
      const idType = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/IDType",
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
      const Pricelist = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Pricelist",
        company as string
      );
      const Tajeer_Branches = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Tajeer_Branches",
        company as string
      );
      const acStereoData = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/AC_RadioStereo_Screen_Tire_SpareTire",
        company as string
      );
      const Tajeer_Contracttype = await fetchData(
        userName as string,
        userPassword as string,
        "/lookup/Tajeer_Contracttype",
        company as string
      );
      const tajeerrentpolicy = await fetchData(
        userName as string,
        userPassword as string,
        "/contracts/Individual/tajeerrentpolicy",
        company as string
      );
      const tajeerextendedcoverage = await fetchData(
        userName as string,
        userPassword as string,
        "/contracts/Individual/tajeerextendedcoverage",
        company as string
      );
      const tajeerMainClosure = await fetchData(
        userName as string,
        userPassword as string,
        "/contracts/Individual/tajeerMainClosure",
        company as string
      );
      setRentCarData({
        tajeerDropdownLookupData: tajeerDropdownLookupData,
        speedometer_Keys: Speedometer_Keys,
        fuelType: FuelType,
        availableFuel: AvailableFuel,
        carSeats: CarSeats,
        customer: customers,
        accessories: accessories,
        category: categories,
        idTypes: idType,
        cities: cityResponse,
        countries: countryResponse,
        pricelist: Pricelist,
        tajeer_Branches: Tajeer_Branches,
        acStereoData: acStereoData,
        tajeer_Contracttype: Tajeer_Contracttype,
        tajeerrentpolicy: tajeerrentpolicy,
        tajeerextendedcoverage: tajeerextendedcoverage,
        tajeerMainClosure: tajeerMainClosure,
      });
    };

    fetchCarData();
  }, []);

  return (
    <RentCarContext.Provider value={rentCarData!}>
      {children}
    </RentCarContext.Provider>
  );
}

// Create a custom hook to access the context
export function useRentCarData() {
  return useContext(RentCarContext);
}
