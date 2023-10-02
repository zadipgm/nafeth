export interface IContracts {
    message: string,
    result: Contract[]

}
export interface Contract {
    kMIn?: number
    extraKM?: number,
    kMCost?: number
    accessoriesCost?: number
    pricelistLoyalityDiscount?: number
    totalRentCost?: number,
    otherCost?: number,
    discount?: number,
    grossTotal?: number
    vATPercent?: number
    vATAmount?: number
    refunded?: number
    paid?: number
    netTotal?: number
    contractNo: number,
    customerID: number,
    driverID: number,
    carID: number,
    pricelistID: number,
    issueDate: string,
    timeOut: string,
    kmOut: number,
    disputedKMIn?: number
    dailyPrice: number,
    oilChangeCost?: number
    weeklyPrice: number,
    monthlyPrice: number,
    disputedBillingStatus?: string
    sparePartsCost?: number,
    graceHours: string,
    graceHoursPrice: number,
    kmLimit: number,
    extraKmPrice: number,
    advanceAmount: number,
    damageCost?: number,
    actualReturnDate: string,
    disputedSubmitedDatetime?: string
    actualTotalDays: number,
    issueComments: string,
    issueBranchID: number,
    issueBy: string,
    promotionDiscount: number,
    accessoriesID: string,
    status: string
}