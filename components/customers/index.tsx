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
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  addable: boolean;
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
  addable,
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
  console.log("customers", customers);
  const [show, setShow] = React.useState(8);
  const [open, setOpen] = React.useState(false);
  const [isBlock, setisBlock] = React.useState(false);
  const [buttonValue, setButtonValue] = React.useState("Block");
  const [customerDetail, setCustomerDetail] = React.useState<customer>();
  const { locale, colors } = useTheme();
  const router = useRouter();
  const [prohibitedValue, setprohibitedValue] = React.useState("");
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

  return (
    <Container>
      <Title color={page_color}>
        <h2>{title}</h2>
      </Title>
      <Wrapper>
        <InputWrapper istheme={isTheme()} className="customer-page">
          {isAddbutton && (
            <Fab
              aria-label={"add"}
              style={{
                margin: "12px 0px",
                backgroundColor: `${page_color}`,
                color: "white",
                width: "12%",
                borderRadius: "8px",
              }}
              onClick={() =>
                router.push({
                  pathname: `/customers/add` as string,
                  query: { max_number: max_number },
                })
              }
            >
              Add Customer <AddIcon />
            </Fab>
          )}
          <InputComponent
            type="search"
            placeholder="muhammad..."
            label="Search"
            // onChange={(e) => handleChange(e)}
            classname="search-input"
          />
        </InputWrapper>

        <CustomerCardContainer>
          {customers?.result?.slice(0, show).map((item, index) => {
            return (
              <Grow
                in={true}
                style={{ transformOrigin: "0 0 0" }}
                {...(true ? { timeout: 2000 } : {})}
                key={index}
              >
                <CustomerCardWrapper>
                  <FullNameWrapper>
                    <span>{item[`fullname_${locale}`]}</span>
                  </FullNameWrapper>
                  <List>
                    <Tooltip content="Customer Type" color={"warning"}>
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="carduserSvg"
                          fill={colors.nafethBlue}
                        />
                        <span>{item.category[`name_${locale}`]}</span>
                      </ListItem>
                    </Tooltip>
                    <Tooltip content="Customer ID" color={"error"}>
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="idSvg"
                          fill={colors.nafethBlue}
                        />
                        <span>{item.idNumber}</span>
                      </ListItem>
                    </Tooltip>
                    <Tooltip content="ID Expiry" color={"secondary"}>
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="issueDateSvg"
                          fill={colors.nafethBlue}
                        />
                        <span>{item.idExpiryDate_hijri}</span>
                      </ListItem>
                    </Tooltip>
                    <Tooltip content="Phone" color={"primary"}>
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="phoneSvg"
                          fill={colors.nafethBlue}
                        />
                        <span>{item.mobileNo}</span>
                      </ListItem>
                    </Tooltip>{" "}
                    <Tooltip content="City" color={"invert"}>
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="homeSvg"
                          fill={colors.nafethBlue}
                        />
                        <span>{item.residentCity[`name_${locale}`]}</span>
                      </ListItem>
                    </Tooltip>{" "}
                    <Tooltip content="License Number" color={"success"}>
                      <ListItem>
                        <IconComponent
                          width="25px"
                          height="25px"
                          icon="reportSvg"
                          fill={colors.nafethBlue}
                        />
                        <span>{item.licenseNo}</span>
                      </ListItem>
                    </Tooltip>
                  </List>
                  <ButtonWrapper className="customer">
                    {addable && listtype === "Customer" ? (
                      <Button
                        className="add"
                        variant="outlined"
                        onClick={() => onCustomerSelected?.(item)}
                        endIcon={
                          <AddIcon
                            width="15px"
                            height="15px"
                            fill={colors.nafethBlue}
                          />
                        }
                      >
                        Add
                      </Button>
                    ) : (
                      <Button
                        className="add"
                        variant="outlined"
                        onClick={() => onCustomerSelected?.(item)}
                        endIcon={
                          <AddIcon
                            width="15px"
                            height="15px"
                            fill={colors.nafethBlue}
                          />
                        }
                      >
                        Add Driver
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
                            fill={colors.nafethBlue}
                          />
                        }
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
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
                        delete
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
                            fill={colors.nafethBlue}
                          />
                        }
                      >
                        Details
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
                <DetailsTitle color={colors.nafethBlue as string}>
                  {"Customer Details"}
                </DetailsTitle>

                <DetailWrapper
                  color={isTheme().color}
                  bcolor={isTheme().bcolor}
                >
                  <DetailList className="customer-info">
                    <DetailListItem>
                      <Strongtext>{"IDType"}</Strongtext>
                      <Spantext>
                        {customerDetail?.idType[`name_${locale}`]}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Version No."}</Strongtext>
                      <Spantext>{customerDetail?.version}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"License Expiry Date Hijri"}</Strongtext>
                      <Spantext>{customerDetail?.licExpiryDate_hijri}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"License Expiry Date gregorian"}</Strongtext>
                      <Spantext>
                        {customerDetail?.licenseExpDate_gregorian}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"City of residence"}</Strongtext>
                      <Spantext>
                        {customerDetail?.residentCity[`name_${locale}`]}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"E-mail"}</Strongtext>
                      <Spantext>{customerDetail?.email}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Home Phone"}</Strongtext>
                      <Spantext>{customerDetail?.homePhone}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Home Phone"}</Strongtext>
                      <Spantext>{customerDetail?.homePhone}</Spantext>
                    </DetailListItem>

                    <DetailListItem>
                      <Strongtext>{"Prohibition Notes"}</Strongtext>
                      <Spantext>{prohibitedValue}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Place of issue"}</Strongtext>
                      <Spantext>
                        {customerDetail?.idIssueCountry[`name_${locale}`]}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Nationality"}</Strongtext>
                      <Spantext>
                        {customerDetail?.nationality[`name_${locale}`]}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Employer"}</Strongtext>
                      <Spantext>{customerDetail?.employerName}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"dob hijri"}</Strongtext>
                      <Spantext>{customerDetail?.dob_hijri}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"dob gregorian"}</Strongtext>
                      <Spantext>{customerDetail?.dob_gregorian}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Price List"}</Strongtext>
                      <Spantext>
                        {customerDetail?.pricelist[`name_${locale}`]}
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Business Phone"}</Strongtext>
                      <Spantext>{customerDetail?.workPhone}</Spantext>
                    </DetailListItem>
                    <DetailListItem className="address">
                      <Strongtext>{"Permanent Address"}</Strongtext>
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
                        Save
                      </Button>
                      <Button
                        variant={"contained"}
                        className="details"
                        color="error"
                      >
                        Cancel
                      </Button>
                    </GroupButtons>
                  </div>
                )}
              </div>
            </DrawerComponent>
          )}
        </CustomerCardContainer>
        {show === 19 ? (
          ""
        ) : (
          <Button
            variant={"contained"}
            onClick={() => setShow(show + 4)}
            className="load-more"
            endIcon={
              <ArrowCircleSvg width="15px" height="15px" fill={colors.white} />
            }
          >
            View more
          </Button>
        )}
      </Wrapper>
    </Container>
  );
};
export default CustomersList;
