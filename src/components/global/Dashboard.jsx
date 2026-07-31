import Header from "./Header";
import { useTheme } from "../../ThemeContext";
import DashboardCards from "../cards/DashboardCards";
import { cardsData } from "../../data/cardsData";
import MonthlyPerformanceChart from "../graphs/MonthlyPerformanceChart";
import { productsData } from "../../data/productsData";
import StockCategory from "../graphs/StockCategory";
import OrdersMap from "../graphs/OrdersMap";

export default function Dashboard() {
  const { colors } = useTheme();
  const lowStockProducts = productsData.filter(
    (product) => product.status === "Low Stock",
  );

  return (
    <div style={{ margin: "20px" }}>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          width: "100%",
          gridAutoRows: "140px",
          gap: "20px",
        }}
      >
        {/* ROW 1 */}

        {cardsData.map((cd) => (
          <div
            style={{
              gridColumn: "span 3",
              backgroundColor: colors.primary[400],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 0,
            }}
          >
            <DashboardCards
              key={cd.id}
              title={cd.title}
              icon={cd.icon}
              value={cd.value}
            />
          </div>
        ))}

        {/*ROW 2*/}
        <div
          style={{
            gridColumn: "span 8",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            minWidth: 0,
          }}
        >
          <div
            style={{
              marginTop: "25px",
              padding: "0 30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h5 style={{ fontWeight: "600", color: colors.grey[100] }}>
                Monthly Business Performance
              </h5>
              <h3
                style={{ fontWeight: "bold", color: colors.greenAccent[500] }}
              >
                $59,342,321
              </h3>
            </div>
          </div>
          <div style={{ height: "250px", marginTop: "-20px" }}>
            <MonthlyPerformanceChart />
          </div>
        </div>

        {/* stock */}
        <div
          style={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            overflowY: "auto",
          }}
        >
          <div
            style={{
              padding: "20px",
              borderBottom: `2px solid ${colors.primary[500]}`,
            }}
          >
            <h4
              style={{
                margin: 0,
                color: colors.grey[100],
              }}
            >
              Low Stock Items
            </h4>
          </div>

          {lowStockProducts.map((product) => (
            <div
              key={product.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px 20px",
                borderBottom: `1px solid ${colors.primary[500]}`,
              }}
            >
              <div>
                <div
                  style={{
                    color: colors.greenAccent[500],
                    fontWeight: 600,
                  }}
                >
                  {product.name}
                </div>

                <div
                  style={{
                    color: colors.grey[300],
                    fontSize: "0.9rem",
                  }}
                >
                  {product.category}
                </div>
              </div>

              <div
                style={{
                  textAlign: "right",
                }}
              >
                <div
                  style={{
                    color: colors.redAccent[400],
                    fontWeight: "bold",
                  }}
                >
                  {product.stock} left
                </div>

                <div
                  style={{
                    color: colors.grey[300],
                    fontSize: "0.85rem",
                  }}
                >
                  Reorder at {product.reorderLevel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 3 */}
        <div
          style={{
            gridColumn: "span 6",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4
            style={{
              margin: "0 0 20px",
              color: colors.grey[100],
            }}
          >
            Stock by Category
          </h4>

          <div style={{ flex: 1, minHeight: 250 }}>
            <StockCategory isDashboard={true} />
          </div>
        </div>

        {/* MAP*/}
        <div
          style={{
            gridColumn: "span 6",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            padding: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4
            style={{
              margin: "0 0 20px",
              color: colors.grey[100],
            }}
          >
            Orders by Country
          </h4>

          <div style={{ flex: 1, minHeight: 250 }}>
            <OrdersMap isDashboard={true}/>
          </div>
        </div>
        
      </div>
    </div>
  );
}
