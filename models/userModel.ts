export interface IUser {
    message: string;
    result: IUserList[];
}
export interface IManager {
    id: number;
    name_ar: string;
    name_en: string;
}
export interface IGroup {
    id: number;
    name_ar: string;
    name_en: string;
}
export interface IBaseBranch {
    id: number;
    name_ar: string;
    name_en: string;
}
export interface IUserList {
    id: number;
    username: string;
    password: string;
    fullname_en: string;
    fullname_ar: string;
    idNumber: string;
    group: IGroup
    manager: IManager
    phone: number;
    email: string;
    designation: string;
    baseBranch: IBaseBranch;
    customPrice: string;
    active: string;
    image: string;
    language: string;
}

export interface ILookupBaseBranch {
    message: string;
    result: IBaseBranch[]
}
export interface ILookupManager {
    message: string;
    result: IManager[]
}
export interface ILookupGroup {
    message: string;
    result: IGroup[]
}
