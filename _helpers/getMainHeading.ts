export const GetMainHeading = (heading: string) => {
    let mainHeading = "Dashboard";
    if (heading === "cars") return mainHeading = "Cars";
    if (heading === "branchtransfer") return mainHeading = "Branch transfer";
    if (heading === "caraccessories") return mainHeading = "car accessories";
    if (heading === "caralerts") return mainHeading = "car alerts"
    if (heading === "workshop") return mainHeading = "workshop"
    if (heading === "individualcontracts")
        return mainHeading = "Open contracts"
    if (heading === "disputecontracts")
        return mainHeading = "disputed contracts"
    if (heading === "promotions")
        return mainHeading = "promotions"
    if (heading === "companycontracts")
        return mainHeading = "company contracts"
    if (heading === "einvoice")
        return mainHeading = "e invoice"
    if (heading === "customers")
        return mainHeading = "customers"
    if (heading === "pricelist")
        return mainHeading = "pricelist"
    if (heading === "loyalty")
        return mainHeading = "loyalty"
    if (heading === "payments")
        return mainHeading = "payments"
    if (heading === "globalsettings")
        return mainHeading = "global settings"
    if (heading === "branches")
        return mainHeading = "branches"
    if (heading === "groups")
        return mainHeading = "groups"
    if (heading === "Users")
        return mainHeading = "Users"
    if (heading === "maintenaceservices")
        return mainHeading = "maintenace services"
    if (heading === "workshopbranches")
        return mainHeading = "workshop branches"

};
