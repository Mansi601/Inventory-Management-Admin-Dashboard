import Header from "../global/Header";

export default function PieChart({ children, title, subtitle }) {
  return (
    <div style={{ margin: "20px" }}>
      <Header
        title={title}
        subtitle={subtitle}
      />
      <div style={{ height: "75vh" }}>
        {children}
      </div>
    </div>
  );
}
