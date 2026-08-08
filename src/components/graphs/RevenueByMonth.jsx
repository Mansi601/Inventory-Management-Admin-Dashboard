import { ResponsiveBar } from "@nivo/bar";
import { revenueHistory } from "../../data/revenueHistoryData";
import Header from "../global/Header";
import { useTheme } from "../../ThemeContext";

export default function RevenueByMonth() {
  const { colors } = useTheme();
  return (
    <div style={{ margin: "20px" }}>
      <Header
        title="REVENUE BY MONTH"
        subtitle="A Bar Chart to show revenue by month"
      />
      <div style={{ height: "75vh" }}>
        <ResponsiveBar
          data={revenueHistory}
          colors={colors.blueAccent[500]}
          enableLabel={true}
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
          }}
          labelTextColor="#e0e0e0"
          labelSkipWidth={12}
          labelSkipHeight={12}
          keys={["revenue"]}
          indexBy="month"
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              translateX: 120,
              itemsSpacing: 3,
              itemWidth: 100,
              itemHeight: 16,
            },
          ]}
          axisBottom={{ legend: "Month", legendOffset: 40 }}
          axisLeft={{ legend: "Revenue", legendOffset: -65 }}
          margin={{ top: 15, right: 130, bottom: 50, left: 80 }}
        />
      </div>
    </div>
  );
}
