import { Trash2, SquarePen } from "lucide-react";
import { useTheme } from "../../ThemeContext";
import { useState } from "react";

export default function Table({
  data,
  columns,
  deleteRow,
  modalOpen,
  handleEdit,
}) {
  const { colors } = useTheme();
  const cellStyle = {
    border: `1px solid ${colors.primary[600]}`,
    padding: "14px",
    background: colors.primary[400],
    color: colors.grey[100],
    whiteSpace: "nowrap",
  };

  return (
    <div
      className="table-container"
      style={{
        width: "100%",
        height: "85vh",
        overflow: "auto",
        border: `1px solid ${colors.primary[600]}`,
        borderRadius: "8px",
        background: colors.primary[400],
        boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
      }}
    >
      <table
        style={{
          width: "100%",
          minWidth: "1000px",
        }}
      >
        <thead>
          <tr style={{ background: colors.blueAccent[800], color: "white" }}>
            {columns.map((c) => (
              <th
                key={c.key}
                style={{
                  ...cellStyle,
                  background: colors.blueAccent[700],
                  color: colors.grey[100],
                  textAlign: "left",
                }}
              >
                {c.label}
              </th>
            ))}
            <th
              style={{
                ...cellStyle,
                background: colors.blueAccent[700],
                color: colors.grey[100],
                textAlign: "left",
              }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              {columns.map((c) => (
                <td key={`${d.id} ${c.key}`} style={cellStyle}>
                  {d[c.key]}
                </td>
              ))}
              <td style={cellStyle}>
                <span className="actions">
                  <SquarePen
                    onClick={() => handleEdit(d.id)}
                    className="edit-btn"
                  />{" "}
                  <Trash2
                    onClick={() => deleteRow(d.id)}
                    style={{ color: colors.redAccent[400] }}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
