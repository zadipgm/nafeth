interface IMenu {
    name_en: string
    name_ar: string
    icon: string
    menu: IMenuPages[]
}
interface IMenuPages {
    del: number,
    get: number
    id: number
    name_ar: string
    name_en: string
    post: number
    put: number
    url: string
}
export interface IGroups {
    message: string;
    result: {
        active: string;
        description_ar: null;
        description_en: string
        groupId: number;
        isBlockEnable: string
        isDateEnable: string
        isDeleteAvailable: string
        isDeleteContract: string
        isDiscountReceipt: string
        isQuickAddCustomer: string
        isReSendNozumAvailable: string
        isTajeerAvailable: string
        name_ar: string
        name_en: string
        role: string
        userId: number
        menu: IMenu[]
    }
}

