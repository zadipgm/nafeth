import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { LineCharWrapper } from "./style";
import { isTheme } from "@/_helpers/getTheme";
import { line_chart_dataset } from "@/global/fakeData";

export default function MuiLineChart() {
  const colors: { [key: string]: string } = {
    Available: "#02B2AF",
    Rented: "#2E96FF",
    Overdue: "#B800D8",
    Workshop: "#60009B",
    Stolen: "#2731C8",
    Accident: "#03008D",
    Inactive: "#02B2AF",
  };
  const keyToLabel: { [key: string]: string } = {
    Available: "Available Cars",
    Rented: "Rented Cars",
    Overdue: "Overdue Cars",
    Workshop: "Overdue Cars",
    Stolen: "Stolen Cars",
    Accident: "Accident Cars",
    Inactive: "Inactive Cars",
  };
  const stackStrategy = {
    stack: "total",
    area: true,
    stackOffset: "none", // To stack 0 on top of others
  } as const;
  return (
    <LineCharWrapper bcolor={isTheme()?.bcolor} color={isTheme()?.color}>
      <LineChart
        xAxis={[
          {
            dataKey: "year",
            valueFormatter: (v) => v.toString(),
            min: 2013,
            max: 2023,
          },
        ]}
        series={Object.keys(keyToLabel).map((key) => ({
          dataKey: key,
          label: keyToLabel[key],
          color: colors[key],
          ...stackStrategy,
        }))}
        legend={{ hidden: true }}
        dataset={line_chart_dataset}
        width={500}
        height={212}
      />
    </LineCharWrapper>
  );
}
