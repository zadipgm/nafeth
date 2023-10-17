export interface IContractPayment {
    message: string;
    result: IContractPaymentResult[];
}
export interface IContractPaymentResult {

    date: string,
    amount: string
    comments: string
    contractNo: string
    activity: number
    activity_en: string
    activity_ar: string




}