import { ResponsiveBar } from "@nivo/bar";
import { inventoryMovement } from "../../data/inventoryMovementData";
import Header from "../global/Header";
import { useTheme } from "../../ThemeContext";

export default function InventoryMovementBar() {
  const { colors } = useTheme();
  return (
    <div style={{ margin: "20px" }}>
      <Header
        title="INVENTORY RECEIVED V/S SOLD"
        subtitle="A Bar Chart to show Inventory Received v/s sold"
      />
      <div style={{ height: "75vh" }}>
        <ResponsiveBar
          data={inventoryMovement}
          colors={[colors.blueAccent[500], colors.greenAccent[500]]}
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
          keys={["received", "sold"]}
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
          axisLeft={{ legend: "Units", legendOffset: -50 }}
          margin={{ top: 15, right: 130, bottom: 50, left: 60 }}
        />
      </div>
    </div>
  );
}
