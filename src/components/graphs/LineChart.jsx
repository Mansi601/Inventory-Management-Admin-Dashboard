import Header from "../global/Header";

export default function LineChart({ children , title , subtitle}) {
  return (
    <div style={{ margin: "20px" }}>
      <Header
        title={title}
        subtitle={subtitle}
      />
      {children}
      <div style={{ height: "67vh" }}></div>
    </div>
  );
}
