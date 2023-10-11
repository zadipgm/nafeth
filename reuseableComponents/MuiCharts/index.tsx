import { isTheme } from "@/_helpers/getTheme";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Chart, Container, Title } from "./style";
import { useTheme } from "styled-components";
import MuiLineChart from "../lineChart";
interface IChartData {
  id: number;
  label: string;
  value: number;
}
interface IProps {
  chart_data: IChartData[];
  title: string;
  classname?: string;
}
const MUIPaiChart = ({ chart_data, title, classname }: IProps) => {
  const { isLTR } = useTheme();
  const customize = {
    height: 350,
    legend: { hidden: false },
    margin: { top: 5 },
    stackingOrder: "descending",
  };
  return (
    <Container bcolor={isTheme()?.bcolor} color={isTheme()?.color}>
      <Chart>
        <h4>Cars Status</h4>
        <PieChart
          className="pie-chart"
          series={[
            {
              data: chart_data,
              innerRadius: 76,
              outerRadius: 136,
              paddingAngle: 5,
              cornerRadius: 10,
              startAngle: -190,
              endAngle: 180,
            },
          ]}
          onClick={() => console.log("here is")}
          {...customize}
        />
        <p className="bottom">Total cars</p>
      </Chart>
      <MuiLineChart />
    </Container>
  );
};
export default MUIPaiChart;
