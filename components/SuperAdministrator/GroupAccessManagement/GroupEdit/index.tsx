import * as React from "react";

import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/SuperAdministrator/compnaySettings/style";
import { Box, Button } from "@mui/material";
import InputComponent from "@/reuseableComponents/InputField";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import {
  Container,
  ModuleTitle,
  ModuleTitlesWrapper,
  SwitchContainer,
  SwitchWrapper,
} from "../style";
import GroupPagesList from "./groupPagesList";
import { GroupData } from "@/global/fakeData";
import { isTheme } from "@/_helpers/getTheme";
import { Title } from "../../compnaySettings/style";
interface IProps {
  title: string;
}
export default function GroupEditForm({ title }: IProps) {
  return (
    <>
      <Container>
        <Title color={isTheme().color}>Company Settings</Title>
        <FormWrapper
          className="group-edit-list-form"
          color={isTheme().color}
          bcolor={isTheme().bcolor}
        >
          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
            noValidate
            autoComplete="off"
          >
            <FormBoxWrapper>
              <FormBox className="group-edit-form" color={isTheme().color}>
                <InputComponent label="English Name" placeholder="zeshan" />
                <InputComponent label="Arabic Name" placeholder="زيشان" />
              </FormBox>
            </FormBoxWrapper>
            <FormBoxWrapper>
              <FormBox
                className="group-edit-form-checkbox"
                color={isTheme().color}
              >
                <InputComponent
                  label="Description"
                  placeholder="desciption"
                  multiline={true}
                  rows={4}
                />
                <SwitchContainer>
                  <SwitchWrapper>
                    <SwitchesComponent
                      title="Edit dates"
                      info="Giving the ability to user to change the date"
                    />
                  </SwitchWrapper>
                  <SwitchWrapper>
                    <SwitchesComponent
                      title="Block Customer"
                      info="Giving the user the ability to block customer"
                    />
                  </SwitchWrapper>
                  <SwitchWrapper>
                    <SwitchesComponent
                      title="Status"
                      info="Determine if the user account active or inactive"
                    />
                  </SwitchWrapper>
                  <SwitchWrapper>
                    <SwitchesComponent
                      title="Delete Contract"
                      info="Giving the user the ability to delete the closed contract"
                    />
                  </SwitchWrapper>
                  <SwitchWrapper>
                    <SwitchesComponent
                      title="Discount Receipt"
                      info="Give the user the authority to discount the Pending Receivables."
                    />
                  </SwitchWrapper>
                  <SwitchWrapper>
                    <SwitchesComponent
                      title="Delete Receipts"
                      info="Give the user the authority to delete the Pending Payables and Receiables. Liquidation bonds are not included in this property"
                    />
                  </SwitchWrapper>

                  <SwitchWrapper>
                    <SwitchesComponent
                      title="Resend To Nozhum "
                      info="For establishments that have activated the link with the systems program, giving the authority to resend all contracts and operations to systems"
                    />
                  </SwitchWrapper>
                  <SwitchWrapper>
                    <SwitchesComponent
                      title="Tajeer Rent contract is mandatory"
                      info="You can force the user to issue and return contracts for the rental platform only from the Ministry of Transport, when you activate this feature for the user, he cannot issue regular lease contracts or return them"
                    />
                  </SwitchWrapper>
                  <SwitchWrapper>
                    <SwitchesComponent
                      title="Quick customer creation "
                      info="When this option is disabled, the user will not be able to add a new customer quickly through the Create Lease Contract page, and it requires adding the customer on the Customers page and then opening a new contract for him"
                    />
                  </SwitchWrapper>
                  <SwitchWrapper>
                    <SwitchesComponent
                      title="Custom Pricing "
                      info="Giving the user the ability to change the daily rental price to what is specified in the default daily rental price when issuing the contract. Note that he cannot exceed the lowest possible price specified by the system except with the approval of the system administrator"
                    />
                  </SwitchWrapper>
                </SwitchContainer>
              </FormBox>
            </FormBoxWrapper>
          </Box>
        </FormWrapper>
        <ModuleTitlesWrapper>
          <ModuleTitle>Module and Pages Access</ModuleTitle>
          <ModuleTitle className="permission">Permissions</ModuleTitle>
        </ModuleTitlesWrapper>
        {GroupData.map((item, index) => {
          return (
            <div key={index}>
              <GroupPagesList
                title={item.module}
                subpages={item.subpages}
                icon={item.icon}
              />
            </div>
          );
        })}
        <GroupButtons>
          <Button
            variant="contained"
            color="success"
            className="custom-settings-save-button"
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="error"
            className="custom-settings-cancel-button"
          >
            Cancel
          </Button>
        </GroupButtons>
      </Container>
    </>
  );
}
