import { ICarModel } from "./carmodel";
import { ICitiesModel } from "./city";
import { ICountriesModel } from "./country";
import { ICategory, ICustomers, IPriceList } from "./customers";
import { IGroups } from "./groups";
import { IContracts } from "./individualContracts";
import { ILookUp } from "./lookup";
import { IRegions } from "./regions";
import { IBaseBranch, IManager, IUser } from "./userModel";

export interface AppContexts {
    cars?: ICarModel,
    groups?: IGroups,
    manager?: IManager,
    categories?: ICategory,
    branches?: ILookUp,
    pricelist?: IPriceList,
    countries?: ICountriesModel,
    cities?: ICitiesModel,
    regions?: IRegions,
    carTransmission?: ILookUp,
    carInsuranceType?: ILookUp,
    carPlateType?: ILookUp,
    carInsurance?: ILookUp,
    carFuel?: ILookUp,
    carColor?: ILookUp,
    carType?: ILookUp,
    carMake?: ILookUp,
    paymentType?: ILookUp,
    paymentCategory?: ILookUp,
    contracts?: IContracts
    Customers?: ICustomers
    paymentMethods?: ILookUp
    banks?: ILookUp
    user?: IUser
}
export interface IReturnPageContexts {
    activity?: ILookUp
}