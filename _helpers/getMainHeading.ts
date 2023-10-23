export const GetMainHeading = (heading: string) => {
    let mainHeading = "Dashboard";
    if (heading.startsWith("/cars")) return mainHeading = "Cars";
    if (heading.startsWith("/branchtransfer")) return mainHeading = "Branch transfer";
    if (heading.startsWith("caraccessories")) return mainHeading = "car accessories";
    if (heading.startsWith("caralerts")) return mainHeading = "car alerts"
    if (heading.startsWith("workshop")) return mainHeading = "workshop"
    if (heading.startsWith("individualcontracts"))
        return mainHeading = "Open contract"
    if (heading.startsWith("disputecontracts"))
        return mainHeading = "disputed contracts"
    if (heading.startsWith("return[id"))
        return mainHeading = "Return contracts"
    if (heading.startsWith("promotions"))
        return mainHeading = "promotions"
    if (heading.startsWith("companycontracts"))
        return mainHeading = "company contracts"
    if (heading.startsWith("einvoice"))
        return mainHeading = "e invoice"
    if (heading.startsWith("customers"))
        return mainHeading = "customers"
    if (heading.startsWith("pricelist"))
        return mainHeading = "price list"
    if (heading.startsWith("loyalty"))
        return mainHeading = "loyalty"
    if (heading.startsWith("payments"))
        return mainHeading = "payments"
    if (heading.startsWith("globalsettings"))
        return mainHeading = "global settings"
    if (heading.startsWith("branches"))
        return mainHeading = "branches"
    if (heading.startsWith("groups"))
        return mainHeading = "groups"
    if (heading.startsWith("Users"))
        return mainHeading = "Users"
    if (heading.startsWith("maintenaceservices"))
        return mainHeading = "maintenace services"
    if (heading.startsWith("workshopbranches"))
        return mainHeading = "workshop branches"
    return mainHeading
};
