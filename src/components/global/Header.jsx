import { useTheme } from "../../ThemeContext";

export default function Header({title, subtitle}) {
  const { colors } = useTheme();

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2
        style={{
          color: colors.grey[100],
          fontWeight: "bold",
          marginBottom: "5px",
        }}
      >
        {title}
      </h2>
      <h5 style={{color:colors.greenAccent[400]}}>
        {subtitle}
      </h5>
    </div>
  )
}
