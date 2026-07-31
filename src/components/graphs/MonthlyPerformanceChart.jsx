import { ResponsiveLine } from "@nivo/line";
import { monthlyPerformance } from "../../data/monthlyPerformance";
import Header from "../global/Header";
import { useTheme } from "../../ThemeContext";

export default function MonthlyPerformanceChart({ isDashboard = false }) {
  const { colors } = useTheme();
  const data = [
    {
      id: "Revenue",
      data: monthlyPerformance.map((item) => ({
        x: item.month,
        y: item.revenue,
      })),
    },
    {
      id: "Inventory Value",
      data: monthlyPerformance.map((item) => ({
        x: item.month,
        y: item.inventoryValue,
      })),
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      colors={[colors.greenAccent[500], colors.redAccent[500]]}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            background: colors.primary[400],
            color: colors.grey[100],
          },
        },
        crosshair: {
          line: {
            stroke: colors.grey[100],
            strokeWidth: 2,
            strokeOpacity: 0.8,
          },
        },
      }}
      margin={
        isDashboard
          ? { top: 20, right: 20, bottom: 40, left: 45 }
          : { top: 50, right: 110, bottom: 50, left: 60 }
      }
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      axisBottom={{
        legend: isDashboard ? undefined : "month",
        legendOffset: 36,
      }}
      axisLeft={{
        legend: isDashboard ? undefined : "sales",
        legendOffset: -65,
        tickValues: 5,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "seriesColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      enableGridX={false}
      enableGridY={false}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 90,
          itemHeight: 22,
          symbolShape: "circle",
        },
      ]}
    />
  );
}
