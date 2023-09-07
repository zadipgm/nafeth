import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  AccordionContainer,
  PageLinkWrapper,
  PageWrapper,
} from "./styled.components";
import Link from "next/link";
import IconComponent from "@/reuseableComponents/IconComponent";
import { useTheme } from "styled-components";
import { userImenuContext } from "@/context";
import CustomCheckbox from "@/reuseableComponents/customCheckbox";
import { useRouter } from "next/router";
interface IProps {
  sideBarMenuData?: any;
  active_link?: boolean;
  access_group_class?: string;
  showcheckboxes?: boolean;
  onchange?: (e: any) => void;
  handleClose?: () => void | undefined;
}
const SideBarAccordions = ({
  sideBarMenuData,
  active_link,
  access_group_class,
  showcheckboxes = false,
  onchange,
  handleClose,
}: IProps) => {
  const { colors, isLTR, isMobile } = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const router = useRouter();
  const [classname, setClassName] = React.useState("");
  const [toggle, settoggle] = React.useState(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleClassess = (val: string) => {
    setClassName(val);
  };
  const handleClickLink = (link: string) => {
    router.push(link);
    if (isMobile) {
      handleClose();
    }
  };
  return (
    <AccordionContainer>
      {sideBarMenuData?.map(
        (
          item: {
            icon: string | undefined;
            name_en:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined;
            name_ar:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined;
            menu: any[];
          },
          index: React.Key | null | undefined
        ) => {
          return (
            <Accordion
              key={index}
              expanded={expanded === `${index}`}
              onChange={handleChange(`${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon htmlColor={colors.pageTextColor} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <IconComponent
                  icon={item.icon}
                  width="25px"
                  height="25px"
                  fill={colors.pageTextColor}
                />
                <div>
                  <Typography
                    sx={{
                      width: "100%",
                      flexShrink: 0,
                      margin: "0px 10px",
                      color: `${colors.pageTextColor}`,
                    }}
                    component={"span"}
                  >
                    {isLTR ? item.name_en : item.name_ar}
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <PageWrapper className={access_group_class}>
                    {item?.menu?.map((p, i) => {
                      return (
                        <TimelineItem
                          key={i}
                          onClick={() => handleClassess(p.name_en)}
                        >
                          <TimelineSeparator>
                            <TimelineDot
                              className={
                                classname === p.name_en ? "active" : ""
                              }
                            />
                            <TimelineConnector
                              className={
                                classname === p.name_en ? "active" : ""
                              }
                            />
                          </TimelineSeparator>
                          <TimelineContent>
                            <PageLinkWrapper
                              key={i}
                              className={
                                classname === p.name_en ? "active" : ""
                              }
                            >
                              <Link
                                href={active_link === false ? "#" : `/${p.url}`}
                                onClick={() => handleClickLink(p.url)}
                              >
                                {isLTR ? p.name_en : p.name_ar}
                              </Link>
                              {showcheckboxes && (
                                <CustomCheckbox
                                  id={p.id}
                                  name_en={p.name_en}
                                  name_ar={p.name_ar}
                                  get={p.get}
                                  post={p.post}
                                  put={p.put}
                                  del={p.del}
                                  url={p.url}
                                  onchange={onchange}
                                />
                              )}
                            </PageLinkWrapper>
                          </TimelineContent>
                        </TimelineItem>
                      );
                    })}
                  </PageWrapper>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        }
      )}
    </AccordionContainer>
  );
};
export default SideBarAccordions;
