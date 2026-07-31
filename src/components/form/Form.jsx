import { useState } from "react";
import Header from "../../components/global/Header";
import { useTheme } from "../../ThemeContext";

export default function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  });
  const { colors } = useTheme();
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    const newErrors = {};

    if (!values.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!values.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Invalid email";
    }

    if (!values.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (
      !/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/.test(
        values.contact,
      )
    ) {
      newErrors.contact = "Invalid phone number";
    }

    if (!values.address1.trim()) newErrors.address1 = "Address 1 is required";

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(values);

      alert("User Created!");

      setValues({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
      });
    }
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    fontSize: "16px",
    boxSizing: "border-box",
    background: colors.primary[400],
    color: colors.grey[100],
    border: `1px solid ${colors.grey[700]}`,
    borderRadius: "6px",
    outline: "none",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: colors.blueAccent[700],
    color: colors.grey[100],
    fontSize: "14px",
    fontWeight: "bold",
  };

  const errorStyle = {
    color: "red",
    marginTop: "5px",
    fontSize: "14px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <form onSubmit={handleSubmit}>
        <div style={gridStyle}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
              style={inputStyle}
            />
            <p style={errorStyle}>{errors.firstName}</p>
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange}
              style={inputStyle}
            />
            <p style={errorStyle}>{errors.lastName}</p>
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <p style={errorStyle}>{errors.email}</p>
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              value={values.contact}
              onChange={handleChange}
              style={inputStyle}
            />
            <p style={errorStyle}>{errors.contact}</p>
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <input
              type="text"
              name="address1"
              placeholder="Address"
              value={values.address1}
              onChange={handleChange}
              style={inputStyle}
            />
            <p style={errorStyle}>{errors.address1}</p>
          </div>
        </div>

        <div style={{ marginTop: "20px", textAlign: "right" }}>
          <button type="submit" style={buttonStyle}>
            Create New User
          </button>
        </div>
      </form>
    </div>
  );
}
