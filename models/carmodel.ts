export interface IPlateType {
    id: number,
    name_en: string,
    name_ar: string
}
export interface IColor {
    id: number
    name_en: string
    name_ar: string
}
export interface ICarType {
    id: number
    name_en: string
    name_ar: string
}
export interface ITransmission {
    id: number
    name_en: string
    name_ar: string
}
export interface IMake {
    id: number
    name_en: string
    name_ar: string
}
export interface IModel {
    id: number
    name_en: string
    name_ar: string
}
export interface IInsurance {
    id: number
    name_en: string
    name_ar: string
}
export interface IInsuranceType {
    id: number
    name_en: string
    name_ar: string
}
export interface IBranch {
    id: number
    name_en: string
    name_ar: string
}
export interface IFuelType {
    id: number
    name_en: string
    name_ar: string
}
export interface ICarModel {
    message: string
    result: [
        {
            id: number,
            plateNo: number,
            plateText1_en: string
            plateText2_en: string
            plateText3_en: string
            plateText1_ar: string
            plateText2_ar: string
            plateText3_ar: string
            plateType: IPlateType,
            chasisNo: string
            sequenceNo: string
            buyingDate: string
            color: IColor,
            carType: ICarType
            transmission: ITransmission
            make: IMake
            model: IModel
            year: number,
            mileage: string
            dailyRent: number
            weeklyRent: number
            monthlyRent: number
            minDailyRent: number
            perExtraKM: number
            dailyKMlimit: number
            graceHours: number
            graceCharge: number
            insurance: IInsurance
            insuranceType: IInsuranceType
            policyNo: string
            insurancePenality: string
            insuranceExpDate: string
            registrationExpHijiri: string
            inspectionExpHijiri: string
            branch: IBranch
            timesRented: number
            status: string
            fuelType: IFuelType
            lastRentedDate: string
            puchaseCost: number
            fullFuelCost: string
            operatingCardNo: string
            operatingCardIssueDate: string
            operatingCardExpDate: string
            active: string
        },
    ]
}