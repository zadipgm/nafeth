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
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  addable: boolean;
  editable: boolean;
  deleteable: boolean;
  details: boolean;
  page_color: string;
  title: string;
  onCustomerSelected?: () => void;
}
const CustomersList = ({
  addable,
  editable,
  deleteable,
  details,
  page_color,
  title,
  onCustomerSelected,
}: IProps) => {
  const [show, setShow] = React.useState(8);
  const [open, setOpen] = React.useState(false);
  const [isBlock, setisBlock] = React.useState(false);
  const [buttonValue, setButtonValue] = React.useState("Block");
  const { locale, colors }: any = useTheme();
  const router = useRouter();
  const [prohibitedValue, setprohibitedValue] = React.useState("");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor: Anchor, open: boolean, item?: any) => {
    console.log("here is toggleDrawer", anchor, open);
    setOpen(true);
    setState({ ...state, [anchor]: open });
  };
  const hanldeBlock = () => {
    setisBlock(!isBlock);
  };
  const handleEdit = (id: number) => {
    router.push({ pathname: `/customers/edit/${id}` });
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
          <Fab
            aria-label={"add"}
            style={{
              margin: "12px 0px",
              backgroundColor: `${page_color}`,
              color: "white",
              width: "12%",
              borderRadius: "8px",
            }}
            onClick={() => router.push(`/customers/add` as string)}
          >
            Add Customer <AddIcon />
          </Fab>
          <InputComponent
            type="search"
            placeholder="muhammad..."
            label="Search Customer"
            // onChange={(e) => handleChange(e)}
            classname="search-input"
          />
        </InputWrapper>

        <CustomerCardContainer>
          {[1, 2, 3, 4, 5, 67, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            .slice(0, show)
            .map((item, index) => {
              return (
                <Grow
                  in={true}
                  style={{ transformOrigin: "0 0 0" }}
                  {...(true ? { timeout: 2000 } : {})}
                  key={index}
                >
                  <CustomerCardWrapper>
                    <FullNameWrapper>
                      <span>Muhammad Zeshan Aslam</span>
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
                          <span>Individual</span>
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
                          <span>2325293362</span>
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
                          <span>22/06/1446</span>
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
                          <span>966581955852</span>
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
                          <span>Riyadh</span>
                        </ListItem>
                      </Tooltip>{" "}
                      <Tooltip content="Outstanding Balance" color={"success"}>
                        <ListItem>
                          <IconComponent
                            width="25px"
                            height="25px"
                            icon="PaymentSvg"
                            fill={colors.nafethBlue}
                          />
                          <span>0.00</span>
                        </ListItem>
                      </Tooltip>
                    </List>
                    <ButtonWrapper className="customer">
                      {addable && (
                        <Button
                          className="add"
                          variant="outlined"
                          onClick={onCustomerSelected}
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
                          onClick={() => handleEdit(1)}
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
                              true
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
                <DetailsTitle color={colors.green as string}>
                  {"Customer Details"}
                </DetailsTitle>

                <DetailWrapper
                  color={isTheme().color}
                  bcolor={isTheme().bcolor}
                >
                  <DetailList className="customer-info">
                    <DetailListItem>
                      <Strongtext>{"IDType"}</Strongtext>
                      <Spantext>{"Resident"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Version No."}</Strongtext>
                      <Spantext>{"2"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"License Expiry Date"}</Strongtext>
                      <Spantext>{"22/06/1446"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"City of residence"}</Strongtext>
                      <Spantext>{"Riyadh"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"E-mail"}</Strongtext>
                      <Spantext>{"abc@gmail.com"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Home Phone"}</Strongtext>
                      <Spantext>{"966581958585"}</Spantext>
                    </DetailListItem>
                    <DetailListItem className="address">
                      <Strongtext>{"Permanent Address"}</Strongtext>
                      <Spantext>
                        {
                          "14420, Prince Fahad Ibn Ibrahim Al Saud Street, Riyadh"
                        }
                      </Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Prohibition Notes"}</Strongtext>
                      <Spantext>{prohibitedValue}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"	Place of issue"}</Strongtext>
                      <Spantext>{"Riyadh"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"	License Number"}</Strongtext>
                      <Spantext>{"123654789"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"	Nationality"}</Strongtext>
                      <Spantext>{"Pakistan"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Employer"}</Strongtext>
                      <Spantext>{"zadip"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"IDType"}</Strongtext>
                      <Spantext>{"Resident"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Price List"}</Strongtext>
                      <Spantext>{"Testing"}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{"Business Phone"}</Strongtext>
                      <Spantext>{"9661252525"}</Spantext>
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
