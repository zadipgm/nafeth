import { IAccessory } from "@/models/IAccessory";
import { IBranchModel } from "@/models/branch";
import { ICarModel } from "@/models/carmodel";
import { ICustomers, IPriceList } from "@/models/customers";
import { IUser } from "@/models/userModel";

export const filterCar = (cars: ICarModel, id: number) => {
    let filterCar = cars.result.filter((item) => item.id === id);
    return filterCar
}
export const filterCustomer = (customers: ICustomers, id: number) => {
    let filterCustomer = customers.result.filter((item) => item.id === id);
    return filterCustomer
}
export const filterBranch = (branches: IBranchModel, id: number) => {
    let filterBranch = branches.result.filter((item) => item.id === id);
    return filterBranch
}
export const filterPriceList = (price: IPriceList, id: number) => {
    let filterPrice = price.result.filter((item) => item.id === id);
    return filterPrice
}
export const filterAccessory = (accessories: any, accessoriesID: string) => {
    let acc = accessories.result.filter((item: any) => {
        return accessoriesID
            .split(",")
            .includes(item.id.toString());
    });
    if (acc.length > 1) {
        acc = acc.reduce((acc: any, current: any) => (acc.cost = acc.cost + current.cost));
    } else {
        acc = acc.map((item: { cost: any; }) => {
            return item.cost
        })
    }
    return acc
}
export const filterUser =
    (user: IUser, id: number) => {
        let filterU = user.result.filter((item) => item.id === id);
        return filterU

    }
export const filterUserByName =
    (user: IUser, name: string) => {
        let filterUName = user.result.filter((item) => item.username.toLocaleLowerCase() === name.toLocaleLowerCase());
        console.log(`filterUserByName`, filterUName)
        return filterUName

    }
export const filterCarMakeModel = (isLTR: boolean, cars: ICarModel, id: number) => {
    let makeModel = `${isLTR
        ? filterCar(cars, id)[0].make.name_en
        : filterCar(cars, id)[0].make.name_ar
        }/${isLTR
            ? filterCar(cars, id)[0].model.name_en
            : filterCar(cars, id)[0].model.name_ar
        }`;
    return makeModel
} 