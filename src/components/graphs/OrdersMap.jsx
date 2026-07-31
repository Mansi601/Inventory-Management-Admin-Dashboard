import { ResponsiveChoropleth } from "@nivo/geo";
import { ordersData } from "../../data/ordersData";
import { worldCountries } from "../../data/worldCountries";
import { useTheme } from "../../ThemeContext";
import Header from "../global/Header";
import countries, { alpha2ToAlpha3 } from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

export default function OrdersMap({ isDashboard = false }) {
  const { colors } = useTheme();
  countries.registerLocale(en);
  const countryCounts = {};
  ordersData.forEach((d) => {
    if (countryCounts[d.countryCode]) {
      countryCounts[d.countryCode]++;
    } else {
      countryCounts[d.countryCode] = 1;
    }
  });
  const features = worldCountries.features.filter((f) => f.id !== "ATA");
  const data = [];

  for (const country in countryCounts) {
    data.push({
      id: alpha2ToAlpha3(country),
      value: countryCounts[country],
    });
  }

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <ResponsiveChoropleth
      data={data}
      features={features}
      margin={
        isDashboard
          ? { top: 5, right: 5, bottom: 5, left: 5 }
          : { top: 20, right: 20, bottom: 20, left: 20 }
      }
      colors={[
        colors.greenAccent[300],
        colors.greenAccent[500],
        colors.greenAccent[700],
      ]}
      domain={[0, maxValue]}
      unknownColor="#2f3640"
      label="properties.name"
      valueFormat=".2s"
      borderWidth={0.3}
      borderColor="#ffffff"
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
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
      projectionScale={isDashboard ? 65 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
    />
  );
}
