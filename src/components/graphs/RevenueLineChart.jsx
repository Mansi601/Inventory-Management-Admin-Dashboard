import { ResponsiveLine } from "@nivo/line";
import { revenueHistory } from "../../data/revenueHistoryData";
import Header from "../global/Header";
import { useTheme } from "../../ThemeContext";

export default function RevenueLineChart() {
  const { colors } = useTheme();
  const data = [
    {
      id: "Revenue",
      data: revenueHistory.map((item) => ({
        x: item.month,
        y: item.revenue,
      })),
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <Header
        title="REVENUE CHART"
        subtitle="A line chart showing revenue history"
      />
      <div style={{ height: "67vh" }}>
        <ResponsiveLine
          data={data}
          colors={[colors.greenAccent[500]]}
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
          margin={{ top: 15, right: 110, bottom: 50, left: 120 }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisBottom={{ legend: "month", legendOffset: 45 }}
          axisLeft={{ legend: "revenue", legendOffset: -70 }}
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
              itemWidth: 80,
              itemHeight: 22,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
    </div>
  );
}
