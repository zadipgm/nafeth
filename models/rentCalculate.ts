export interface IRentCalculation {
    message: string,
    result: {
        contractNo: number,
        dateIn: string,
        dateOut: string,
        timeIn: string,
        timeOut: string,
        kmIn: number,
        kmOut: number,
        daily: number,
        weekly: number,
        monthly: number,
        gracehours: string,
        gracecharges: number,
        kmlimit: number,
        extrakmcharge: number,
        pricelistDiscount: number,
        promoDiscount: number,
        accessoriesCost: number,
        otherCost: number,
        rentwithVat: number,
        extratime: string,
        timeCost: number,
        extraKM: number,
        kmCost: number,
        totalDays: number,
        dayCost: number,
        rentalTotal: number,
        discount: number,
        grossTotal: number,
        amountPaid: number,
        amountRefund: number,
        vat: number,
        vatAmount: number,
        netAmount: number
    }
}
