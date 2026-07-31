import { Trash2 } from "lucide-react";
import { useState } from "react";
import "./list.css";
import { useTheme } from "../../ThemeContext";

export default function Modal({ columns, modalClose, onSubmit, defaultValue }) {
  const { colors } = useTheme();
  const [formState, setFormState] = useState(
    defaultValue ||
      columns.reduce((obj, c) => {
        obj[c.key] = "";
        return obj;
      }, {}),
  );

  function handleChange(e) {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const [errors, setErrors] = useState([]);
  function validateForm() {
    const errorFields = [];

    for (const c of columns) {
      if (c.key === "id") continue;
      const value = formState[c.key];

      if (!value) {
        errorFields.push(`${c.label} is required`);
        continue;
      }

      if (c.type === "number" && isNaN(Number(value))) {
        errorFields.push(`${c.label} must be a number`);
      }
    }
    if (errorFields.length === 0) {
      setErrors("");
      return true;
    }

    setErrors(errorFields.join(", "));
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;

    onSubmit(formState);

    modalClose();
  }

  const overlay = {
    position: "fixed",
    inset: "0",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") modalClose();
      }}
      style={overlay}
    >
      <div
        style={{
          width: "420px",
          maxHeight: "80vh",
          overflowY: "auto",
          background: colors.blueAccent[700],
          color: colors.grey[100],
          borderRadius: "10px",
          padding: "24px",
        }}
        className="scroll-container"
      >
        <form onSubmit={handleSubmit}>
          {columns.map((c) =>
            c.key === "id" ? null : (
              <div className="form-group">
                <label htmlFor={c.id}>{c.label}</label>
                <input
                  type="text"
                  name={c.key}
                  value={formState[c.key]}
                  onChange={handleChange}
                />
              </div>
            ),
          )}
          {errors && <div>{errors}</div>}
          <button
            type="submit"
            style={{
              backgroundColor: colors.blueAccent[600],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 18px",
              marginTop: "20px",
              borderRadius: "4px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
