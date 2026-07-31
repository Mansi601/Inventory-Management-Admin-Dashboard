import { useTheme } from "../../ThemeContext";

export default function DashboardCards({ title, value, icon: Icon }) {
  const { colors } = useTheme();

  return (
    <div
      style={{
        backgroundColor: colors.primary[400],
        borderRadius: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Icon
          style={{
            color: colors.greenAccent[600],
            fontSize: "26px",
          }}
        />

        <h4
          style={{
            margin: 0,
            color: colors.grey[100],
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          {title}
        </h4>
      </div>

      {/* Bottom Section */}
      <h2
        style={{
          margin: 0,
          color: colors.greenAccent[100],
          fontWeight: 700,
          fontSize: "1.45rem",
        }}
      >
        {value}
      </h2>
    </div>
  );
}