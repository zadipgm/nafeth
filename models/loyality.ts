export interface ILoyality {
    message: string;
    result: [
        {
            id: number
            packageName: string,
            rentalIncome: number,
            extraKM: number,
            extraHours: number,
            discount: number,
            active: string
        }
    ]
}