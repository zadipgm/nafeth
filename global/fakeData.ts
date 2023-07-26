export const minutes = [
    { value: "00", label: "00" },
    { value: "01", label: "02" },
    { value: "03", label: "03" },
    { value: "04", label: "04" },
    { value: "05", label: "05" },
    { value: "06", label: "06" },
    { value: "07", label: "07" },
    { value: "08", label: "08" },
    { value: "09", label: "09" },
    { value: "10", label: "10" },
];
export const hours = [
    { value: "00", label: "00" },
    { value: "01", label: "02" },
    { value: "03", label: "03" },
    { value: "04", label: "04" },
    { value: "05", label: "05" },
    { value: "06", label: "06" },
    { value: "07", label: "07" },
    { value: "08", label: "08" },
    { value: "09", label: "09" },
    { value: "10", label: "10" },
];
export const days = [
    { value: "Sunday", label: "Sunday" },
    { value: "Monday", label: "Monday" },
    { value: "Tuesday", label: "Tuesday" },
    { value: "Wednesday", label: "Wednesday" },
    { value: "Thursday", label: "Thursday" },
    { value: "Friday", label: "Friday" },
    { value: "Saturday", label: "Saturday" },
];
export const TAMM_Authorization = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
];
export const nodhom = [
    { value: "enable", label: "Enable" },
    { value: "disable", label: "Disable" },
];
export const countries = [
    { value: 183, label: "Saudi Arabia" },
    { value: 184, label: "Bahrain" },
    { value: 185, label: "UAE" },
];
export const tajeerLicense = [
    { value: "11001100110011", label: "11001100110011" },
    { value: "11002300110011", label: "11002300110011" },
];
export const cities = [
    { value: 83, label: "Riyadh" },
    { value: 31, label: "Dammam" },
    { value: 32, label: "Tabuk" },
    { value: 33, label: "Jeddah" },
    { value: 34, label: "Madinah" },
    { value: 35, label: "makkah" },
];
export const access = [
    { value: "0", label: "No Access" },
    { value: "1", label: "View Only" },
    { value: "2", label: "Create" },
    { value: "3", label: "Edit" },
    { value: "4", label: "Full Access" },
];
export const accessModule = [
    { value: "0", label: "No Access" },
    { value: "1", label: "Access" },
];
export const GroupData = [
    { module: "Dashboard", icon: "dashboard", subpages: [] },
    {
        module: "Car Rental",
        icon: "carRentSvg",
        subpages: [
            {
                page_name_ar: "",
                page_name_en: "Rent A Car",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: " Contract Management",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Returned Car",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Promotion",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Disputed Contracts",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
        ],
    },
    {
        module: "Company Rental",
        icon: "BuildingSvg",
        subpages: [
            {
                page_name_ar: "",
                page_name_en: "Company Contracts",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Company Closed List",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Balance Statements",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
        ],
    },
    {
        module: "Customer",
        icon: "client_partnerSvg",
        subpages: [
            {
                page_name_ar: "",
                page_name_en: "Customer List",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Price List",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Loyalty",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
        ],
    },
    {
        module: "Car Management",
        icon: "carManageSvg",
        subpages: [
            {
                page_name_ar: "",
                page_name_en: "Car List",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Send/Receive Cars",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Car Alert",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Accessories",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Car Service Alert",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Bulk Pricing",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
        ],
    },
    {
        module: "Payments",
        icon: "PaymentSvg",

        subpages: [
            {
                page_name_ar: "",
                page_name_en: "Receivables",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Payables",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "E-Invoices",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
        ],
    },
    {
        module: "Workshop",
        icon: "workshopSvg",
        subpages: [],
    },
    {
        module: "Analytics",
        icon: "analyticsSvg",
        subpages: [],
    },
    {
        module: "User Management",
        icon: "usersSvg",
        subpages: [],
    },
    {
        module: "Reports",
        icon: "reportSvg",
        subpages: [],
    },
    {
        module: "Super Administrator",
        icon: "superAdminSvg",
        subpages: [
            {
                page_name_ar: "",
                page_name_en: "Company settings",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Branch Management",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Group Access Management",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Maintenance Branch",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Notification settings",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                page_name_ar: "",
                page_name_en: "Super Administrator",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
        ],
    },
];

export const sideMenuData = [
    {
        module: "Car",
        pages: [
            {
                module_name: "Car Rental",
                icon: "carRentSvg",
                page: [
                    {
                        page_name: "Rent a Car",
                        page_link: "/",
                        icon: "",
                    },
                    {
                        page_name: "Contract Management",
                        page_link: "",
                        icon: "",
                    },
                    {
                        page_name: "Returned",
                        page_link: "",
                        icon: "",
                    },
                    {
                        page_name: "Promotion",
                        page_link: "",
                        icon: "",
                    },
                    {
                        page_name: "Dispute Contract",
                        page_link: "/dashboard/all_users",
                        icon: "",
                    },
                ],
                panel: "panel1",
            },
            {
                module_name: "Car Management",
                icon: "carManageSvg",
                page: [
                    {
                        page_name: "Car List",
                        page_link: "",
                        icon: "",
                    },
                    {
                        page_name: "Send/Receive Cars",
                        page_link: "",
                        icon: "",
                    },
                    {
                        page_name: "Car Alerts",
                        page_link: "",
                        icon: "",
                    },
                    {
                        page_name: "Accessories",
                        page_link: "",
                        icon: "",
                    },
                    {
                        page_name: "Car Service List",
                        page_link: "",
                        icon: "",
                    },
                    {
                        page_name: "Bulk Pricing",
                        page_link: "",
                        icon: "",
                    },
                ],
                panel: "panel2",
            },
            {
                module_name: "Workshops",
                icon: "workshopSvg",
                page: [
                    {
                        page_name: "Workshop",
                        page_link: "",
                        icon: "",
                    },
                ],
                panel: "panel3",
            },
        ],
    },

    // {
    //     module_name: "Company Rental",
    //     icon: "BuildingSvg",
    //     page_name: "Trainers",
    //     page_link: "/dashboard/trainers",
    //     page: [
    //         {
    //             page_name: "Company Contracts",
    //             page_link: "",
    //             icon: "",
    //         },
    //         {
    //             page_name: "Company Close List",
    //             page_link: "",
    //             icon: "",
    //         },
    //         {
    //             page_name: "Balance Statements",
    //             page_link: "",
    //             icon: "",
    //         },
    //     ],
    //     panel: "panel2",
    // },
    // {
    //     module_name: "Customers",
    //     icon: "client_partnerSvg",
    //     page: [
    //         {
    //             page_name: "Customers List",
    //             page_link: "",
    //             icon: "",
    //         },
    //         {
    //             page_name: "Price List",
    //             page_link: "",
    //             icon: "",
    //         },
    //         {
    //             page_name: "Loyalty",
    //             page_link: "",
    //             icon: "",
    //         },
    //     ],
    //     panel: "panel3",
    // },

    // {
    //     module_name: "Payments",
    //     icon: "PaymentSvg",
    //     page: [
    //         {
    //             page_name: "Receivables",
    //             page_link: "",
    //             icon: "",
    //         },
    //         {
    //             page_name: "Payables",
    //             page_link: "",
    //             icon: "",
    //         },
    //         {
    //             page_name: "E-Invoices",
    //             page_link: "",
    //             icon: "",
    //         },
    //     ],
    //     panel: "panel5",
    // },
    // {
    //     module_name: "Workshops",
    //     icon: "workshopSvg",
    //     page: [
    //         {
    //             page_name: "Workshop",
    //             page_link: "",
    //             icon: "",
    //         },
    //     ],
    //     panel: "panel6",
    // },
    // {
    //     module_name: "Analytics",
    //     icon: "analyticsSvg",
    //     page: [
    //         {
    //             page_name: "Analytics",
    //             page_link: "",
    //             icon: "",
    //         },
    //     ],
    //     panel: "panel7",
    // },
    // {
    //     module_name: "User Management",
    //     icon: "usersSvg",
    //     page: [
    //         {
    //             page_name: "User Management",
    //             page_link: "",
    //             icon: "",
    //         },
    //     ],
    //     panel: "panel8",
    // },
    // {
    //     module_name: "Reports",
    //     icon: "reportSvg",
    //     page: [
    //         {
    //             page_name: "Reports",
    //             page_link: "",
    //             icon: "",
    //         },
    //     ],
    //     panel: "panel9",
    // },
    // {
    //     module_name: "Super Administrator",
    //     icon: "superAdminSvg",
    //     page: [
    //         {
    //             page_name: "Compnay Settings",
    //             page_link: "/super_admin/company_settings",
    //             icon: "",
    //         },
    //         {
    //             page_name: "Branch management",
    //             page_link: "/super_admin/branch_management",
    //             icon: "",
    //         },
    //         {
    //             page_name: "Group Access Management",
    //             page_link: "/super_admin/group_access_management",
    //             icon: "",
    //         },
    //         {
    //             page_name: "Maintenance branch",
    //             page_link: "",
    //             icon: "",
    //         },

    //         {
    //             page_name: "Notification Settings",
    //             page_link: "",
    //             icon: "",
    //         },
    //     ],

    //     panel: "panel10",
    // },
];

export const Contracts = [
    {
        contract_number: "100061",
        car_plate: "a a y 1135 ا ا ن",
        make_model: "Lexus/ES",
        customer_name: "Shazam",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "100062",
        car_plate: "a a y 1135 ا ا ن",
        make_model: "Lexus/ES",
        customer_name: "Shazam",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "100063",
        car_plate: "a a y 1135 ا ا ن",
        make_model: "Lexus/ES",
        customer_name: "Shazam",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "100064",
        car_plate: "a a y 1135 ا ا ن",
        make_model: "Lexus/ES",
        customer_name: "Shazam",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "100065",
        car_plate: "a a y 1135 ا ا ن",
        make_model: "Lexus/ES",
        customer_name: "Shazam",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "100066",
        car_plate: "a a y 1135 ا ا ن",
        make_model: "Lexus/ES",
        customer_name: "Shazam",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "100067",
        car_plate: "a a y 1135 ا ا ن",
        make_model: "Lexus/ES",
        customer_name: "Shazam",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "100068",
        car_plate: "a a y 1135 ا ا ن",
        make_model: "Lexus/ES",
        customer_name: "Shazam",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "100069",
        car_plate: "a a y 1135 ا ا ن",
        make_model: "Lexus/ES",
        customer_name: "Shazam",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "100070",
        car_plate: "a a y 1135 ا ا ن",
        make_model: "Lexus/ES",
        customer_name: "Shazam",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "CO100000",
        company_number: "112211211111",
        company_name: "Ok Group",
        assigned_cars: "25",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
    {
        contract_number: "CO100001",
        company_number: "8967451254",
        company_name: "ABC Group",
        assigned_cars: "14",
        issue_date: "2023-01-01",
        return_date: "2023-01-20",
    },
];

export const header_card = [
    {
        color: "#1281C4",
        bcolor: "#1281c44a",
        card_number: "20,425",
        car_title: "Cars Overdue",
        icon: "overdueSvg",
    },
    {
        color: "#ff0000",
        bcolor: "#ff000054",
        card_number: "20,425",
        car_title: "Alerts",
        icon: "alertsSvg",
    },
    {
        color: "#13ae05",
        bcolor: "#24971959",
        card_number: "20,425",
        car_title: "Cash Registered",
        icon: "cashSvg",
    },
    {
        color: "#800080",
        bcolor: "#8000806b",
        card_number: "20,425",
        car_title: "Disputed contract",
        icon: "disputeContactSvg",
    },
    {
        color: "#13ae05",
        bcolor: "#24971959",
        card_number: "20,425",
        car_title: "Open Contract",
        icon: "cashSvg",
    },
];

export const car_specs = [
    {
        make_model: "Hyundai Elentra",
        year: "2016",
        rent_per_day: "120",
        transmition: "manual",
        mileage: "22432",
        type: "sedan",
        rented_times: "12",
        car_plate: "1253 VDJ",
        color: "red",
        icon: "hyundaiSvg",
        fuel_type: "petrol 91",
    },
    {
        make_model: "Toyota Camry",
        year: "2023",
        rent_per_day: "120",
        transmition: "auto",
        mileage: "22432",
        type: "sedan",
        rented_times: "4",
        car_plate: "123 MNA",
        color: "black",
        icon: "toyotaSvg",
        fuel_type: "petrol 95",
    },
    {
        make_model: "XLT (200A) 4X2",
        year: "2023",
        rent_per_day: "120",
        transmition: "auto",
        mileage: "22432",
        type: "suv",
        rented_times: "12",
        car_plate: "1253 VDJ",
        color: "blue",
        icon: "fordSvg",
        fuel_type: "petrol 91",
    },
    {
        make_model: "Toyota Hilux Double Cab",
        year: "2023",
        rent_per_day: "150",
        transmition: "auto",
        mileage: "22432",
        type: "pickup",
        rented_times: "1",
        car_plate: "1245 TUR",
        color: "black",
        icon: "toyotaSvg",
        fuel_type: "petrol 95",
    },
    {
        make_model: "Kia Picanto",
        year: "2016",
        rent_per_day: "120",
        transmition: "auto",
        mileage: "22432",
        type: "economic",
        rented_times: "12",
        car_plate: "4467 KYT",
        color: "blue",
        icon: "kiaSvg",
        fuel_type: "petrol 91",
    },
    {
        make_model: "Hyundai Tucson",
        year: "2022",
        rent_per_day: "140",
        transmition: "auto",
        mileage: "224432",
        rented_times: "3",
        type: "suv",
        car_plate: "1773 HGF",
        color: "Purple",
        icon: "hyundaiSvg",
        fuel_type: "petrol 95",
    },
    {
        make_model: "Honda Accord",
        year: "2015",
        rent_per_day: "100",
        transmition: "auto",
        mileage: "224377",
        type: "sedan",
        rented_times: "15",
        car_plate: "8976 ANP",
        color: "lightgray",
        icon: "hondaSvg",
        fuel_type: "petrol 91",
    },

    {
        make_model: "Sportage Plug-in Hybrid",
        year: "2019",
        rent_per_day: "120",
        transmition: "auto",
        mileage: "22432",
        type: "suv",
        rented_times: "12",
        car_plate: "1253 VDJ",
        color: "purple",
        icon: "kiaSvg",
        fuel_type: "petrol 95",
    },
    {
        make_model: "Nissan Sunny",
        year: "2018",
        rent_per_day: "100",
        transmition: "auto",
        mileage: "274422",
        type: "sedan",
        rented_times: "12",
        car_plate: "1783 UNS",
        color: "black",
        icon: "nissanSvg",
        fuel_type: "petrol 95",
    },
    {
        make_model: "Hyundai Elentra",
        year: "2016",
        rent_per_day: "120",
        transmition: "auto",
        mileage: "22432",
        type: "sedan",
        rented_times: "12",
        car_plate: "1253 VDJ",
        color: "brown",
        icon: "hyundaiSvg",
        fuel_type: "petrol 91",
    },
    {
        make_model: "Nissan Patrol Pickup",
        year: "2019",
        rent_per_day: "100",
        transmition: "manual",
        mileage: "34432",
        type: "pickup",
        rented_times: "12",
        car_plate: "5534 NIA",
        color: "white",
        icon: "nisaanSvg",
        fuel_type: "petrol 95",
    },
];
