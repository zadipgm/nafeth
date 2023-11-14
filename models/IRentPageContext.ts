import { IAccessory } from "./IAccessory";
import { ICitiesModel } from "./city";
import { ICountriesModel } from "./country";
import { ICategory, ICustomers, IPriceList, IidType } from "./customers";
import { ILookUp } from "./lookup";

export interface IRentPageContext {
    tajeerDropdownLookupData: ILookUp;
    speedometer_Keys: ILookUp,
    fuelType: ILookUp,
    availableFuel: ILookUp,
    carSeats: ILookUp,
    customer: ICustomers;
    accessories: IAccessory;
    category: ICategory;
    idTypes: IidType;
    cities: ICitiesModel;
    countries: ICountriesModel;
    pricelist: IPriceList;
    tajeer_Branches: ILookUp
    acStereoData: ILookUp
    tajeer_Contracttype: ILookUp
    tajeerrentpolicy: any
    tajeerextendedcoverage: any
    tajeerMainClosure: any
}