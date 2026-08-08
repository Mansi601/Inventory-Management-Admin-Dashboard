import { ResponsivePie } from "@nivo/pie";
import { productsData } from "../../data/productsData";
import { useTheme } from "../../ThemeContext";
import Header from "../global/Header"

export default function InventoryValueByCategory() {
  const { colors } = useTheme();
  const categoryValue = {};

  productsData.forEach((product) => {
    if (categoryValue[product.category]) {
    categoryValue[product.category] += (product.stock * product.costPrice);
    } else {
    categoryValue[product.category] = (product.stock * product.costPrice);
    }
  });

  const data = [];

  for (const category in categoryValue) {
    data.push({
      id: category,
      label: category,
      value: categoryValue[category],
    });
  }

  return (
    <div style={{ margin: "20px" }}>
      <Header title="INVENTORY VALUE BY CATEGORY" subtitle="A Pie Chart to show Inventory Value by Category" />
      <div style={{ height: "75vh" }}>
        <ResponsivePie
          data={data}
          theme={{
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
          margin={{ top: 10, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.6}
          cornerRadius={2}
          activeOuterRadiusOffset={8}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={colors.grey[100]}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
    </div>
  );
}
