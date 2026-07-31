import Topbar from "./components/global/TopBar";
import SideBar from "./components/global/SideBar";
import { useTheme } from "./ThemeContext";
import ProductList from "./components/lists/ProductList";
import { Route, Routes } from "react-router-dom";
import SuppliersList from "./components/lists/SuppliersList";
import OrdersList from "./components/lists/OrdersList";
import RevenueLineChart from "./components/graphs/RevenueLineChart";
import MonthlyPerformanceChart from "./components/graphs/MonthlyPerformanceChart";
import StockCategory from "./components/graphs/StockCategory";
import InventoryValueByCategory from "./components/graphs/InventoryValueByCategory";
import InventoryMovementBar from "./components/graphs/InventoryMovementBar";
import RevenueByMonth from "./components/graphs/RevenueByMonth";
import OrdersMap from "./components/graphs/OrdersMap";
import Form from "./components/form/Form";
import Dashboard from "./components/global/Dashboard";
import LineChart from "./components/graphs/LineChart";
import PieChart from "./components/graphs/PieChart";
import WorldMap from "./components/graphs/WorldMap";

export default function App() {
  const { colors } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: colors.primary[500],
        color: colors.grey[100],
      }}
    >
      {/* Sidebar */}
      <SideBar />
      <div
        style={{ flex: 1, background: colors.primary[500], overflowX: "auto" }}
      >
        <Topbar />

        {/* Main dashboard content */}
        <Routes>
          <Route path="/" element={<Dashboard isDashboard={true} />} />
          <Route path="/Dashboard" element={<Dashboard isDashboard={true} />} />
          <Route path="/Products" element={<ProductList />} />
          <Route path="/Suppliers" element={<SuppliersList />} />
          <Route path="/Orders" element={<OrdersList />} />
          <Route path="/Revenue Line Chart" element={<RevenueLineChart />} />
          <Route
            path="/Monthly Performance Chart"
            element={
              <LineChart
                title="MONTHLY PERFORMANCE CHART"
                subtitle="A line chart showing performance history"
              >
                <MonthlyPerformanceChart />
              </LineChart>
            }
          />
          <Route
            path="/Stock Category"
            element={
              <PieChart
                title={"STOCK BY CATEGORY"}
                subtitle={"A Pie Chart to show Stock by Category"}
              >
                <StockCategory isDashboard={true} />
              </PieChart>
            }
          />
          <Route
            path="/Inventory Value By Category"
            element={<InventoryValueByCategory />}
          />
          <Route
            path="/Inventory Movement Bar"
            element={<InventoryMovementBar />}
          />
          <Route path="/Revenue By Month" element={<RevenueByMonth />} />
          <Route
            path="/Orders By Country"
            element={
              <WorldMap
                title="ORDERS BY COUNTRY"
                subtitle="A World Map to show Orders by Country"
              >
                <OrdersMap/>
              </WorldMap>
            }
          />
          <Route path="/Profile Form" element={<Form />} />
        </Routes>
      </div>
    </div>
  );
}
