import { ICity } from "./city"
import { ICountry } from "./country"
import { IRegionsResult } from "./regions"

interface Ibranch {
    id: 2,
    name_en: string
    name_ar: string
    address: string
    email: string
    phone: 0,
    poBox: 96651313131,
    fax: 0,
    tajeerLicenseNo: string
    latitude: string
    longitude: string
    active: string
    userID: 0,
    country: ICountry,
    city: ICity
    region: IRegionsResult
}

export interface IBranchModel {
    message: string;
    result: Ibranch[]

}
