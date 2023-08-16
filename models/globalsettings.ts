import { ICity } from "./city";
import { ICountry } from "./country";
export interface IcompanyGlobal {
    companyName: string;
    companyAlias: string;
    expiryDate: string;
    registrationDate: string;
    sms: string;
    crNumber: string;
    country: ICountry;
    city: ICity;
    poBox: number;
    fax: number;
    phone: number;
    email: string;
    logo: string;
}
export interface ICompanyAddress {
    buildingNo: string;
    streetName: string;
    district: string;
    city: string;
    country: string;
    zipCode1: string;
    zipCode2: string;
}
export interface ICompanyNozhum {
    clientAlias: string;
    clientId: string;
    clientSecret: string;
    username: string;
    password: string;
    enabled: string;
}
export interface ICompanyCustom {
    freeGracehours: string;
    graceDay: string;
    graceStartTime: string;
    maxKMAdjustment: number;
    taxNo: string;
    terms_ar: string;
    terms_en: string;
    vat: number;
}
export interface ICompanyTajeer {
    tajeerAppId: string;
    tajeerAppKey: string;
    clientSecret: string;
    tajeerAuthorityLicense: string;
    tajeerUserCreditials: string;
}
export interface IGlobalSettings {
    message: "Success";
    result: [
        {
            companyGlobal: IcompanyGlobal;
            companyAddress: ICompanyAddress;
            companyNozhum: ICompanyNozhum;
            companyCustom: ICompanyCustom;
            companyTajeer: ICompanyTajeer;
        }
    ];
}
