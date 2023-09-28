export interface IContracts {
    message: string,
    result: Contract[]

}
export interface Contract {
    contractNo: number,
    customerID: number,
    driverID: number,
    carID: number,
    pricelistID: number,
    issueDate: string,
    timeOut: string,
    kmOut: number,
    dailyPrice: number,
    weeklyPrice: number,
    monthlyPrice: number,
    graceHours: string,
    graceHoursPrice: number,
    kmLimit: number,
    extraKmPrice: number,
    advanceAmount: number,
    actualReturnDate: string,
    actualTotalDays: number,
    issueComments: string,
    issueBranchID: number,
    issueBy: string,
    promotionDiscount: number,
    accessoriesID: string,
    status: string
}