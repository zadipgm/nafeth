import * as React from "react";
import { Container, SideBar, SideIconWrapper } from "./styled.components";
import SideBarAccordions from "./sidebaraccordion";
import DashboardSvg from "@/public/icons/dashboard";
import ArrowDown from "@/public/icons/arrowDownSvg";
import { useTheme } from "styled-components";
import Profile from "./profile";

const SideNavBar = () => {
  const { colors }: any = useTheme();
  const [width, setWidth] = React.useState(false);
  const [show, setShow] = React.useState("");
  const handleWidth = () => {
    setWidth(!width);
  };
  const menuHandler = (level: string) => {
    setShow(level);
  };
  const sideBarMenuData = [
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
      module_name: "Company Rental",
      icon: "BuildingSvg",
      page_name: "Trainers",
      page_link: "/dashboard/trainers",
      page: [
        {
          page_name: "Company Contracts",
          page_link: "",
          icon: "",
        },
        {
          page_name: "Company Close List",
          page_link: "",
          icon: "",
        },
        {
          page_name: "Balance Statements",
          page_link: "",
          icon: "",
        },
      ],
      panel: "panel2",
    },
    {
      module_name: "Customers",
      icon: "client_partnerSvg",
      page: [
        {
          page_name: "Customers List",
          page_link: "",
          icon: "",
        },
        {
          page_name: "Price List",
          page_link: "",
          icon: "",
        },
        {
          page_name: "Loyalty",
          page_link: "",
          icon: "",
        },
      ],
      panel: "panel3",
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
      panel: "panel4",
    },
    {
      module_name: "Payments",
      icon: "PaymentSvg",
      page: [
        {
          page_name: "Receivables",
          page_link: "",
          icon: "",
        },
        {
          page_name: "Payables",
          page_link: "",
          icon: "",
        },
        {
          page_name: "E-Invoices",
          page_link: "",
          icon: "",
        },
      ],
      panel: "panel5",
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
      panel: "panel6",
    },
    {
      module_name: "Analytics",
      icon: "analyticsSvg",
      page: [
        {
          page_name: "Analytics",
          page_link: "",
          icon: "",
        },
      ],
      panel: "panel7",
    },
    {
      module_name: "User Management",
      icon: "usersSvg",
      page: [
        {
          page_name: "User Management",
          page_link: "",
          icon: "",
        },
      ],
      panel: "panel8",
    },
    {
      module_name: "Reports",
      icon: "reportSvg",
      page: [
        {
          page_name: "Reports",
          page_link: "",
          icon: "",
        },
      ],
      panel: "panel9",
    },
    {
      module_name: "Super Administrator",
      icon: "superAdminSvg",
      page: [
        {
          page_name: "Compnay Settings",
          page_link: "/super_admin/company_settings",
          icon: "",
        },
        {
          page_name: "Branch management",
          page_link: "",
          icon: "",
        },
        {
          page_name: "Group Access Management",
          page_link: "/super_admin/group_access_management",
          icon: "",
        },
        {
          page_name: "Maintenance branch",
          page_link: "",
          icon: "",
        },

        {
          page_name: "Notification Settings",
          page_link: "",
          icon: "",
        },
      ],

      panel: "panel10",
    },
  ];
  return (
    <Container className={width ? "In-active" : "active"}>
      <SideBar>
        <Profile />
        <SideIconWrapper>
          <DashboardSvg
            fill={colors.pageTextColor}
            width="20px"
            height="20px"
          />
          <a href="/dashboard" className={width ? "active" : "In-active"}>
            {"Dashboard"}
          </a>
        </SideIconWrapper>
        <SideBarAccordions sideBarMenuData={sideBarMenuData} />
        {/* <IconWrapper
          onClick={handleWidth}
          className={width ? "In-active" : "active"}
        >
          <ArrowDown fill={"#fff"} width="30px" height="30px" />
        </IconWrapper> */}
      </SideBar>
    </Container>
  );
};
export default SideNavBar;
