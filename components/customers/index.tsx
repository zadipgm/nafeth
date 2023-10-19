import TableComponent from "@/reuseableComponents/TableComponent";
import * as React from "react";
import { useTheme } from "styled-components";
import { Title } from "../GlobalSettings/BranchManagement/style";
import { Button, Fab, Grow } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
import { useRouter } from "next/router";
import AddIcon from "@mui/icons-material/Add";
import { InputWrapper } from "@/reuseableComponents/TableComponent/style";
import InputComponent from "@/reuseableComponents/InputField";
import NameSvg from "@/public/icons/nameSvg";
import {
  BlcokCustomerTitle,
  Container,
  CustomerCardContainer,
  CustomerCardWrapper,
  FullNameWrapper,
  List,
  ListItem,
  NameSvgwrapper,
  Wrapper,
} from "./style";
import IconComponent from "@/reuseableComponents/IconComponent";
import {
  ButtonWrapper,
  DetailList,
  DetailListItem,
  DetailWrapper,
  DetailsHead,
  DetailsTitle,
  Spantext,
  Strongtext,
} from "../CarRental/style";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import DrawerComponent from "@/reuseableComponents/Drawer";
import { Tooltip } from "@nextui-org/react";
import CloseSvg from "@/public/icons/closeSvg";
import { GroupButtons } from "../GlobalSettings/compnaySettings/style";
import { ICustomers, customer } from "@/models/customers";
import SearchComponent from "@/reuseableComponents/SearchComponent";
import { SearchBarWrapper } from "../contracts/style";
import { customersKeys } from "@/constants";
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  editable: boolean;
  deleteable: boolean;
  details: boolean;
  page_color: string;
  title: string;
  onCustomerSelected?: (param: any) => void;
  customers: ICustomers;
  isAddbutton?: boolean;
  listtype?: string;
}
const CustomersList = ({
  editable,
  deleteable,
  details,
  page_color,
  title,
  customers,
  isAddbutton,
  listtype,
  onCustomerSelected,
}: IProps) => {
  const { locale, colors, translations } = useTheme();
  const [show, setShow] = React.useState(3);
  const [open, setOpen] = React.useState(false);
  const [isBlock, setisBlock] = React.useState(false);
  const [buttonValue, setButtonValue] = React.useState("Block");
  const [customerDetail, setCustomerDetail] = React.useState<customer>();
  const router = useRouter();
  const [prohibitedValue, setprohibitedValue] = React.useState("");
  const [searchvalue, setSearchvalue] = React.useState(customers.result);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor: Anchor, open: boolean, item?: any) => {
    setOpen(true);
    setState({ ...state, [anchor]: open });
    setCustomerDetail(item);
  };
  const hanldeBlock = () => {
    setisBlock(!isBlock);
  };

  // find max Customer number
  const findMaxNumber = customers.result.map((n) => n.id);
  let max_number = Math.max(...findMaxNumber) + 1;

  const handleEdit = (id: number) => {
    router.push({
      pathname: `/customers/edit/${id}`,
      query: { page: router.asPath },
    });
  };

  const hanldeSave = (val: string) => {
    setButtonValue(val);
    setisBlock(false);
  };

  const handleChange = (e: { target: { value: any } }) => {
    let value = e.target.value;
    setprohibitedValue(value);
  };
  const hanldeShowMore = (val: number) => {
    if (customers?.result?.length > show) {
      let diffrence = customers.result.length - show;
      if (diffrence >= 4) {
        setShow((prev) => prev + val);
      } else {
        setShow(customers.result.length);
      }
    }
  };
  return (
    <Container>
      <Title color={page_color}>
        <h2>{title}</h2>
      </Title>
      <Wrapper>
        <SearchBarWrapper className="customer-page">
          {isAddbutton && (
            <Fab
              aria-label={"add"}
              style={{
                margin: "12px 0px",
                backgroundColor: `${page_color}`,
                color: "white",
                width: "12%",
                borderRadius: "8px",
                flexGrow: "1",
                flexBasis: "250px",
              }}
              onClick={() =>
                router.push({
                  pathname: `/customers/add` as string,
                  query: { max_number: max_number, page: router.asPath },
                })
              }
            >
              {translations?.addCustomer} <AddIcon />
            </Fab>
          )}
          <SearchComponent
            data={customers.result}
            currentRecords={customers.result}
            setSearchvalue={setSearchvalue}
            keys={customersKeys}
          />
        </SearchBarWrapper>

        <CustomerCardContainer>
          {searchvalue?.slice(0, show).map((item, index) => {
            return (
              <Grow
                in={true}
                style={{ transformOrigin: "0 0 0" }}
                {...(true ? { timeout: 2000 } : {})}
                key={index}
              >
                <CustomerCardWrapper>
                  <List>
                    <Tooltip
                      content="Customer Name"
                      color={"warning"}
                      className="customer-chip"
                    >
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="carduserSvg"
                          fill={colors.sideBarBgColor}
                        />
                        <span className="customer-name">
                          {item[`fullname_${locale}`]}
                        </span>
                      </ListItem>
                    </Tooltip>
                    <Tooltip
                      content="Customer ID"
                      color={"error"}
                      className="customer-chip"
                    >
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="idSvg"
                          fill={colors.sideBarBgColor}
                        />
                        <span>{item.idNumber}</span>
                      </ListItem>
                    </Tooltip>
                    <Tooltip
                      content="ID Expiry"
                      color={"secondary"}
                      className="customer-chip"
                    >
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="issueDateSvg"
                          fill={colors.sideBarBgColor}
                        />
                        <span>{item.idExpiryDate_hijri}</span>
                      </ListItem>
                    </Tooltip>
                    <Tooltip
                      content="Phone"
                      color={"primary"}
                      className="customer-chip"
                    >
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="phoneSvg"
                          fill={colors.sideBarBgColor}
                        />
                        <span>{item.mobileNo}</span>
                      </ListItem>
                    </Tooltip>{" "}
                    <Tooltip
                      content="City"
                      color={"invert"}
                      className="customer-chip"
                    >
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="homeSvg"
                          fill={colors.sideBarBgColor}
                        />
                        <span>{item.residentCity[`name_${locale}`]}</span>
                      </ListItem>
                    </Tooltip>{" "}
                    <Tooltip
                      content="License Number"
                      color={"success"}
                      className="customer-chip"
                    >
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="reportSvg"
                          fill={colors.sideBarBgColor}
                        />
                        <span>{item.licenseNo}</span>
                      </ListItem>
                    </Tooltip>
                  </List>
                  <ButtonWrapper className="customer">
                    {listtype === "customer" && (
                      <Button
                        className="add"
                        variant="outlined"
                        onClick={() => onCustomerSelected?.(item)}
                        endIcon={
                          <AddIcon
                            width="15px"
                            height="15px"
                            fill={colors.sideBarBgColor}
                          />
                        }
                      >
                        Add
                      </Button>
                    )}
                    {listtype === "driver" && (
                      <Button
                        className="add"
                        variant="outlined"
                        onClick={() => onCustomerSelected?.(item)}
                        endIcon={
                          <AddIcon
                            width="15px"
                            height="15px"
                            fill={colors.sideBarBgColor}
                          />
                        }
                      >
                        {translations?.addDriver}
                      </Button>
                    )}

                    {editable && (
                      <Button
                        className="edit"
                        variant="outlined"
                        endIcon={
                          <EditSvg
                            width="15px"
                            height="15px"
                            fill={colors.sideBarBgColor}
                          />
                        }
                        onClick={() => handleEdit(item.id)}
                      >
                        {translations?.edit}
                      </Button>
                    )}
                    {deleteable && (
                      <Button
                        className="delete"
                        variant="outlined"
                        endIcon={
                          <DeleteSvg
                            width="15px"
                            height="15px"
                            fill={colors.red}
                          />
                        }
                      >
                        {translations?.delete}
                      </Button>
                    )}
                    {details && (
                      <Button
                        onClick={() =>
                          toggleDrawer(
                            locale === "en" ? "right" : "left",
                            true,
                            item
                          )
                        }
                        className="details"
                        variant="outlined"
                        endIcon={
                          <ArrowCircleSvg
                            width="15px"
                            height="15px"
                            fill={colors.sideBarBgColor}
                          />
                        }
                      >
                        {translations?.details}
                      </Button>
                    )}
                  </ButtonWrapper>
                </CustomerCardWrapper>
              </Grow>
            );
          })}
          {state.right && (
            <DrawerComponent
              state={state}
              open={open}
              toggleDrawer={toggleDrawer}
              width={"800px"}
            >
              <div>
                <DetailsTitle color={colors.sideBarBgColor as string}>
                  {translations?.customerDetails}
                </DetailsTitle>

                <DetailWrapper
                  color={isTheme().color}
                  bcolor={isTheme().bcolor}
                >
                  <DetailList className="customer-info">
                    <DetailListItem>
                      <Strongtext>{translations?.iDType}</Strongtext>
                      <Spantext>
                        {customerDetail?.idType[`name_${locale}`]}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.iDVersionNo}</Strongtext>
                      <Spantext>{customerDetail?.version}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.licenseExphijri}</Strongtext>
                      <Spantext>{customerDetail?.licExpiryDate_hijri}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.licenseExpiry}</Strongtext>
                      <Spantext>
                        {customerDetail?.licenseExpDate_gregorian}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.cityofresidence}</Strongtext>
                      <Spantext>
                        {customerDetail?.residentCity[`name_${locale}`]}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.email}</Strongtext>
                      <Spantext>{customerDetail?.email}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.mobileNumber}</Strongtext>
                      <Spantext>{customerDetail?.homePhone}</Spantext>
                    </DetailListItem>

                    <DetailListItem>
                      <Strongtext>{translations?.prohibitionNotes}</Strongtext>
                      <Spantext>{prohibitedValue}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.placeofissue}</Strongtext>
                      <Spantext>
                        {customerDetail?.idIssueCountry[`name_${locale}`]}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.nationality}</Strongtext>
                      <Spantext>
                        {customerDetail?.nationality[`name_${locale}`]}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.employer}</Strongtext>
                      <Spantext>{customerDetail?.employerName}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.dateofbirthhijri}</Strongtext>
                      <Spantext>{customerDetail?.dob_hijri}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.dateofBirth}</Strongtext>
                      <Spantext>{customerDetail?.dob_gregorian}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.priceList}</Strongtext>
                      <Spantext>
                        {customerDetail?.pricelist[`name_${locale}`]}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.businessPhone}</Strongtext>
                      <Spantext>{customerDetail?.workPhone}</Spantext>
                    </DetailListItem>
                    <DetailListItem className="address">
                      <Strongtext>{translations?.permanentAddress}</Strongtext>
                      <Spantext>
                        {customerDetail?.cA_PostalCode},
                        {customerDetail?.cA_StreetName},
                        {customerDetail?.cA_District},{customerDetail?.cA_City}
                      </Spantext>
                    </DetailListItem>
                  </DetailList>
                </DetailWrapper>
                <GroupButtons>
                  <Button
                    variant={"contained"}
                    className="block"
                    onClick={hanldeBlock}
                    endIcon={
                      <CloseSvg
                        width="20px"
                        height="20px"
                        fill={colors.white}
                      />
                    }
                  >
                    {buttonValue}
                  </Button>
                </GroupButtons>
                {isBlock && (
                  <div>
                    <BlcokCustomerTitle>
                      {buttonValue} Customer
                    </BlcokCustomerTitle>
                    <InputComponent
                      type="text"
                      multiline={true}
                      rows={3}
                      onChange={handleChange}
                      required
                      classname="block-customer"
                    />
                    <GroupButtons>
                      <Button
                        variant={"contained"}
                        className="details"
                        onClick={() =>
                          hanldeSave(
                            `${buttonValue === "Block" ? "unBloack" : "Block"}`
                          )
                        }
                      >
                        {translations?.save}
                      </Button>
                      <Button
                        variant={"contained"}
                        className="details"
                        color="error"
                      >
                        {translations?.cancel}
                      </Button>
                    </GroupButtons>
                  </div>
                )}
              </div>
            </DrawerComponent>
          )}
        </CustomerCardContainer>
        {customers?.result?.length > 4 && (
          <Button
            variant={"contained"}
            onClick={() => hanldeShowMore(4)}
            className="load-more"
            endIcon={
              <ArrowCircleSvg width="15px" height="15px" fill={colors.white} />
            }
            disabled={customers?.result?.length === show ? true : false}
          >
            {translations?.viewMore}
          </Button>
        )}
      </Wrapper>
    </Container>
  );
};
export default CustomersList;
