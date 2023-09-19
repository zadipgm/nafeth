export interface IPromotions {
    message: string;
    result: [
        {
            id: number
            promotionName_ar: string
            promotionName_en: string
            startDate: string
            startTime: string
            endDate: string
            endTime: string,
            discount: number,
            carID: string
            active: string

        }
    ]
}