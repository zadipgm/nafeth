export interface IBranch {
    id?: string | number;
    name_en?: string;
    name_ar?: string;
    countryId?: number;
    cityId?: number;
    address: string;
    email: string;
    phone: number;
    poBox: number;
    fax: number;
    tajeerLicenseNo: string;
    latitude: string;
    longitude: string;
    active: string;
    userID: number;
}
export interface IBranches {
    branches: IBranch[];
}
export interface IBranchList {
    name_en?: string;
    name_ar?: string;
    address?: string;
    email: string;
    phone: number;
    active: string;
}
