export interface ICustomers {
    message: string;
    result: customer[];
}
export interface IPriceList {
    message: string,
    result: [
        { id: 1, name_en: string, name_ar: string },
        { id: 2, name_en: string, name_ar: string }
    ]

}
export interface ICategory {
    message: string,
    result: [
        { id: 1, name_en: string, name_ar: string },
        { id: 2, name_en: string, name_ar: string }
    ]
}
export interface IidType {
    message: string,
    result: [
        { id: 1, name_en: string, name_ar: string },
        { id: 2, name_en: string, name_ar: string }
    ]
}
export interface customer {
    id: number;
    category: {
        id: number;
        name_en: string;
        name_ar: string;
    };
    idType: {
        id: number;
        name_en: string;
        name_ar: string;
    };
    idNumber: string;
    version: number;
    idissuecity: {
        id: number;
        name_en: string;
        name_ar: string;
    };
    idExpiryDate_hijri: string;
    idExpiryDate_gregorian: string;
    licenseNo: string;
    licExpiryDate_hijri: string;
    licenseExpDate_gregorian: string;
    fullname_en: string;
    fullname_ar: string;
    mobileNo: number;
    email: string;
    dob_hijri: string;
    dob_gregorian: string;
    idIssueCountry: {
        id: number;
        name_en: string;
        name_ar: string;
    };
    employerName: string;
    pricelist: {
        id: number;
        name_en: string;
        name_ar: string;
    };
    nationality: {
        id: number;
        name_en: string;
        name_ar: string;
    };
    residentCity: {
        id: number;
        name_en: string;
        name_ar: string;
    };
    homePhone: string;
    workPhone: string;
    comments: string;
    active: string;
    cA_buildingNo: number;
    cA_StreetName: number;
    cA_District: number;
    cA_City: number;
    cA_Country: number;
    cA_PostalCode: number;
    cA_AdditionalPostalCode: number;
    vatNumber: number;

}
