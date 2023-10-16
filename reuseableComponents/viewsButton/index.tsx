import * as React from "react";
import { GridViewWrapper, ListViewWrapper, ViewsWrapper } from "./style";
import { Tooltip } from "@nextui-org/react";
import GridView from "@/public/icons/gridView";
import ListView from "@/public/icons/tableView";
import { useTheme } from "styled-components";
interface IProps {
  handleView: (view: string) => void;
  list: boolean;
  grid: boolean;
}
const ViewButton = ({ handleView, list, grid }: IProps) => {
  const { colors } = useTheme();
  return (
    <ViewsWrapper>
      <Tooltip content={"Grid View"} color={"success"}>
        <GridViewWrapper
          onClick={() => handleView("grid")}
          className={grid ? "active" : ""}
        >
          <GridView width="30px" height="30px" fill={colors.sideBarBgColor} />
        </GridViewWrapper>
      </Tooltip>
      <Tooltip content={"List View"} color={"success"}>
        <ListViewWrapper
          onClick={() => handleView("list")}
          className={list ? "active" : ""}
        >
          <ListView width="30px" height="30px" fill={colors.sideBarBgColor} />
        </ListViewWrapper>
      </Tooltip>
    </ViewsWrapper>
  );
};
export default ViewButton;
