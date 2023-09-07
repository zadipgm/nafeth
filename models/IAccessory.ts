export interface IAccessory {
    message: string;
    result: [
        {
            id: number
            accessories_en: string,
            accessories_ar: number,
            description_en: number,
            description_ar: number,
            cost: number,
            active: string
        }
    ]
}