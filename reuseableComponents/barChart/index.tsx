import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { isTheme } from "@/_helpers/getTheme";
import { BarChartContainer } from "./style";
import { chart_dataset } from "@/global/fakeData";

export default function BasicBars() {
  return (
    <BarChartContainer color={isTheme().color}>
      <BarChart
        dataset={chart_dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          { dataKey: "Available", label: "Available" },
          { dataKey: "Rented", label: "Rented" },
          { dataKey: "Overdue", label: "Overdue" },
          { dataKey: "Workshop", label: "Workshop" },
          { dataKey: "Stolen", label: "Stolen" },
          { dataKey: "Accident", label: "Accident" },
        ]}
        width={800}
        height={500}
      />
    </BarChartContainer>
  );
}
