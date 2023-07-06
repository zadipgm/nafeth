import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionContainer,
  PageLinkWrapper,
  PageWrapper,
} from "./styled.components";
import Link from "next/link";
import IconComponent from "@/reuseableComponents/IconComponent";
import { useTheme } from "styled-components";

interface IPage {
  page_name: string;
  page_link: string;
  icon?: string;
}
interface IAccordion {
  module_name: string;
  icon: string;
  page?: IPage[];
  panel: string;
}
interface IProps {
  sideBarMenuData?: IAccordion[];
}
const SideBarAccordions = ({ sideBarMenuData }: IProps) => {
  const { colors }: any = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <AccordionContainer>
      {sideBarMenuData?.map((item, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === item.panel}
            onChange={handleChange(item.panel)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon htmlColor={colors.pageTextColor} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <IconComponent
                icon={item.icon}
                width="20px"
                height="20px"
                fill={colors.pageTextColor}
              />
              <Typography
                sx={{
                  width: "100%",
                  flexShrink: 0,
                  margin: "0px 10px",
                  color: `${colors.pageTextColor}`,
                }}
              >
                {item.module_name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <PageWrapper>
                  {item?.page?.map((p, i) => {
                    return (
                      <PageLinkWrapper key={i}>
                        <IconComponent
                          icon={p.icon}
                          width="20px"
                          height="20px"
                          fill={colors.pageTextColor}
                        />
                        <Link href={p.page_link}>{p.page_name}</Link>
                      </PageLinkWrapper>
                    );
                  })}
                </PageWrapper>
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </AccordionContainer>
  );
};
export default SideBarAccordions;
