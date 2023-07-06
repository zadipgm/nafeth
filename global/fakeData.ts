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
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "UAE", label: "UAE" },
];
export const cities = [
    { value: "Riyadh", label: "Riyadh" },
    { value: "Dammam", label: "Dammam" },
    { value: "Tabuk", label: "Tabuk" },
    { value: "Jeddah", label: "Jeddah" },
    { value: "Madinah", label: "Madinah" },
    { value: "makkah", label: "makkah" },
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
    { title: "Dashboard", icon: "dashboard", subpages: [] },
    {
        title: "Car Rental",
        icon: "carRentSvg",
        subpages: [
            {
                name: "Rent A Car",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                name: " Contract Management",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                name: "Returned Car",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                name: "Promotion",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ],
            },
            {
                name: "Disputed Contracts",
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
        title: "Company Rental",
        icon: "BuildingSvg",
        subpages: [
            {
                name: "Company Contracts",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Company Closed List", permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Balance Statements",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
        ],
    },
    {
        title: "Customer",
        icon: "client_partnerSvg",
        subpages: [
            {
                name: "Customer List",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Price List",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Loyalty",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
        ],
    },
    {
        title: "Car Management",
        icon: "carManageSvg",
        subpages: [
            {
                name: "Car List",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Send/Receive Cars",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Car Alert",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Accessories",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Car Service Alert",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Bulk Pricing",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
        ],
    },
    {
        title: "Payments",
        icon: "PaymentSvg",

        subpages: [
            {
                name: "Receivables",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Payables",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "E-Invoices",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
        ],
    },
    {
        title: "Workshop",
        icon: "workshopSvg",
        subpages: [],
    },
    {
        title: "Analytics",
        icon: "analyticsSvg",
        subpages: [],
    },
    {
        title: "User Management",
        icon: "usersSvg",
        subpages: [],
    },
    {
        title: "Reports",
        icon: "reportSvg",
        subpages: [],
    },
    {
        title: "Super Administrator",
        icon: "superAdminSvg",
        subpages: [
            {
                name: "Company settings",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Branch Management",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Group Access Management",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Maintenance Branch",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Notification settings",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
            {
                name: "Super Administrator",
                permissions: [
                    { label: "none", value: "0" },
                    { label: "view", value: "1" },
                    { label: "edit", value: "2" },
                    { label: "create", value: "3" },
                    { label: "full", value: "4" },
                ]
            },
        ],
    },
];
