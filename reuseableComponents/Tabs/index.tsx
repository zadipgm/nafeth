import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Span, Wrapper } from "./style";
import { isTheme } from "@/_helpers/getTheme";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper color={isTheme().color}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Span color={isTheme().color}>Terms and Conditions</Span>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="English" {...a11yProps(0)} />
            <Tab label="Arabic" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TextField
            id="filled-multiline-static"
            label="Terms and Conditions"
            multiline
            rows={4}
            variant="filled"
            fullWidth
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TextField
            id="filled-multiline-static"
            label="الأحكام والشروط"
            multiline
            rows={4}
            variant="filled"
            fullWidth
            dir="RTL"
          />
        </TabPanel>
      </Box>
    </Wrapper>
  );
}
