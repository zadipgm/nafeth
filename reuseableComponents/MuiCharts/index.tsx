import { isTheme } from "@/_helpers/getTheme";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Chart, Title } from "./style";
interface IChartData {
  id: number;
  label: string;
  value: number;
}
interface IProps {
  chart_data: IChartData[];
  title: string;
}
const MUIPaiChart = ({ chart_data, title }: IProps) => {
  return (
    <Chart bcolor={isTheme()?.bcolor} color={isTheme()?.color}>
      <Title>{title}</Title>
      <PieChart
        width={450}
        height={300}
        legend={{ hidden: true }}
        series={[
          {
            data: chart_data,
            innerRadius: 76,
            outerRadius: 136,
            paddingAngle: 5,
            cornerRadius: 10,
            startAngle: -190,
            endAngle: 180,
            cx: 150,
            cy: 150,
          },
        ]}
      />
    </Chart>
  );
};
export default MUIPaiChart;
