export interface IAccessory {
    message: string;
    result:
    IAccessoryResult[]

}
export interface IAccessoryResult {

    id: number
    accessories_en: string,
    accessories_ar: number,
    description_en: number,
    description_ar: number,
    cost: number,
    active: string


}