import { ICarModel } from "./carmodel";
import { ICitiesModel } from "./city";
import { ICountriesModel } from "./country";
import { ICategory, IPriceList } from "./customers";
import { IGroups } from "./groups";
import { ILookUp } from "./lookup";
import { IRegions } from "./regions";
import { IBaseBranch, IManager } from "./userModel";

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
}