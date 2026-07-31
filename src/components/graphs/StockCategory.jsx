import { ResponsivePie } from "@nivo/pie";
import { productsData } from "../../data/productsData";
import { useTheme } from "../../ThemeContext";
import Header from "../global/Header";

export default function StockCategory({ isDashboard = false }) {
  const { colors } = useTheme();
  const categoryCounts = {};

  productsData.forEach((product) => {
    if (categoryCounts[product.category]) {
      categoryCounts[product.category] += product.stock;
    } else {
      categoryCounts[product.category] = product.stock;
    }
  });

  const data = [];

  for (const category in categoryCounts) {
    data.push({
      id: category,
      label: category,
      value: categoryCounts[category],
    });
  }

  return (
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
      margin={
        isDashboard
          ? { top: 10, right: 20, bottom: 50, left: 20 }
          : { top: 40, right: 80, bottom: 80, left: 80 }
      }
      innerRadius={0.6}
      activeOuterRadiusOffset={6}
      padAngle={0.6}
      cornerRadius={2}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      legends={
        isDashboard
          ? []
          : [
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: "circle",
              },
            ]
      }
    />
  );
}
