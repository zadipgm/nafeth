import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Container } from "./style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";

type Anchor = "top" | "left" | "bottom" | "right";
interface IAnchor {
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
}
interface IProps {
  state: IAnchor;
  toggleDrawer: (param1: Anchor, param2: boolean, item: any) => void;
  children: React.ReactElement;
  width?: string;
  open?: boolean;
  item?: any;
}
const DrawerComponent = ({
  state,
  toggleDrawer,
  children,
  width,
  open = true,
  item,
}: IProps) => {
  const { colors } = useTheme();
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : width }}
      onClick={() => toggleDrawer(anchor, open, item)}
    >
      {children}
    </Box>
  );

  return (
    <Container bcolor={isTheme().bcolor} color={isTheme().color}>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={() => toggleDrawer(anchor, false, item)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Container>
  );
};
export default DrawerComponent;
