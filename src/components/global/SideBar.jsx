import { useState } from "react";
import { useTheme } from "../../ThemeContext";
import { NavLink } from "react-router-dom";
import { Menu as MenuIcon } from "lucide-react";
import profileImg from "../../assets/profile.jpg";
import "./sidebar.css";
import {
  Home,
  Calendar,
  Users,
  PieChart,
  LineChart,
  BarChart,
  Map,
  ShoppingCart,
  Truck,
  Package,
  Tags,
} from "lucide-react";

function MenuItem({ icon, title, isCollapsed, setSelected }) {
  const { colors } = useTheme();

  return (
    <NavLink
      to={`/${title}`}
      className={({ isActive }) =>
        isActive ? "menu-item active" : "menu-item"
      }
      style={{
        "--text-color": colors.grey[100],
      }}
    >
      {icon}
      {!isCollapsed && <span>{title}</span>}
    </NavLink>
  );
}

import { ChevronDown } from "lucide-react";
import { Pie } from "@nivo/pie";

function DropdownMenu({ icon, title, children, isCollapsed }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="menu-item"
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
        }}
      >
        {icon}

        {!isCollapsed && (
          <>
            <span style={{ flex: 1 }}>{title}</span>
            <ChevronDown
              size={18}
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.2s",
              }}
            />
          </>
        )}
      </div>

      {open && !isCollapsed && <div className="submenu">{children}</div>}
    </div>
  );
}

export default function SideBar() {
  const { colors } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      style={{ backgroundColor: colors.primary[400] }}
      className={` ${isCollapsed ? "collapsed" : "sidebar"}`}
    >
      {!isCollapsed ? (
        <div className="sidebar-header">
          <h3 style={{ color: colors.grey[100] }}>ADMINIS</h3>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              background: "none",
              border: "none",
              color: colors.grey[100],
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              padding: "0",
              margin: "0",
            }}
          >
            <MenuIcon size={22} />
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              background: "none",
              border: "none",
              color: colors.grey[100],
              cursor: "pointer",
              padding: "20px 18px",
            }}
          >
            <MenuIcon />
          </button>
        </div>
      )}
      {!isCollapsed && (
        <div style={{ marginBottom: "25px" }}>
          <div className="user-img">
            <img src={profileImg} alt="profile-user" />
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            <h2
              style={{
                color: colors.grey[100],
                fontSize: "18px",
                margin: 0,
              }}
            >
              Admin Name
            </h2>
            <h5
              style={{
                color: colors.greenAccent[500],
                fontSize: "14px",
                margin: "4px 0 0",
              }}
            >
              Admin
            </h5>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: !isCollapsed ? "40px" : "0",
        }}
      >
        <MenuItem icon={<Home />} title="Dashboard" isCollapsed={isCollapsed} />
        <h6 style={{ padding: "12px 18px", color: colors.grey[300] }}>Data</h6>
        <MenuItem
          icon={<Package />}
          title="Products"
          isCollapsed={isCollapsed}
        />
        <MenuItem
          icon={<Truck />}
          title="Suppliers"
          isCollapsed={isCollapsed}
        />
        <MenuItem
          icon={<ShoppingCart />}
          title="Orders"
          isCollapsed={isCollapsed}
        />
        <h6 style={{ padding: "12px 12px", color: colors.grey[300] }}>
          Anlyses
        </h6>

        <DropdownMenu
          icon={<BarChart />}
          title="Bar Chart"
          isCollapsed={isCollapsed}
        >
          <MenuItem
            title="Inventory Movement Bar"
            isCollapsed={isCollapsed}
          />
          <MenuItem
            title="Revenue By Month"
            isCollapsed={isCollapsed}
          />
        </DropdownMenu>

        <DropdownMenu
          icon={<PieChart />}
          title="Pie Chart"
          isCollapsed={isCollapsed}
        >
          <MenuItem title="Stock Category" isCollapsed={isCollapsed} />
          <MenuItem
            title="Inventory Value By Category"
            isCollapsed={isCollapsed}
          />
        </DropdownMenu>

        <DropdownMenu
          icon={<LineChart />}
          title="Line Chart"
          isCollapsed={isCollapsed}
        >
          <MenuItem title="Revenue Line Chart" isCollapsed={isCollapsed} />
          <MenuItem
            title="Monthly Performance Chart"
            isCollapsed={isCollapsed}
          />
        </DropdownMenu>
        
        <DropdownMenu
          icon={<Map />}
          title="Map"
          isCollapsed={isCollapsed}
        >
          <MenuItem title="Orders By Country" isCollapsed={isCollapsed} />
         
        </DropdownMenu>

        <h6 style={{ padding: "12px 13px", color: colors.grey[300] }}>Pages</h6>
        <MenuItem
          icon={<Calendar />}
          title="Calendar"
          isCollapsed={isCollapsed}
        />
        <MenuItem
          icon={<Users />}
          title="Profile Form"
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
}
