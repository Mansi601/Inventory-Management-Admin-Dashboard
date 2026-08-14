import { useTheme } from "../../ThemeContext";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Bell } from "lucide-react";
import { Settings } from "lucide-react";
import { User } from "lucide-react";
import { Search } from "lucide-react";
import "./topbar.css";

export default function Topbar() {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <div className="topbar">
      <div
        className="search-box"
        style={{ background: colors.primary[400], color: colors.grey[100] }}
      >
        <input type="text" placeholder="Search" />
        <button>
          <Search size={20}/>
        </button>
      </div>

      <div className="icons">
        <button onClick={toggleTheme}>
          {theme === "dark" ? <Moon size={22}/> : <Sun size={22}/>}
        </button>

        <button>
          <Bell size={22}/>
        </button>

        <button>
          <Settings size={22}/>
        </button>

        <button>
          <User size={22}/>
        </button>
      </div>
    </div>
  );
}
