import Table from "./Table";
import Modal from "./Modal";
import { use, useState } from "react";
import { productsData } from "../../data/productsData";
import { productColumn } from "../../data/columns";
import { useTheme } from "../../ThemeContext";
import Header from "../global/Header";

export default function ProductList() {
  const [rows, setRows] = useState(productsData);
  const [open, setOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);
  const { colors } = useTheme();

  function deleteRow(id) {
    setRows((prev) => prev.filter((p) => p.id !== id));
  }

  function modalOpen(id) {
    setOpen(true);
  }

  function handleEdit(idx) {
    setRowToEdit(idx);
    modalOpen();
  }

  function handleSubmit(row) {
    if (rowToEdit === null) {
      const nextId =
        rows.length > 0 ? Math.max(...rows.map((r) => r.id)) + 1 : 1;

      setRows([
        ...rows,
        {
          ...row,
          id: nextId,
        },
      ]);
    } else {
      setRows((prev) => prev.map((p) => (p.id === rowToEdit ? row : p)));
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", margin:"20px"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Header title="Products Data" subtitle="editable table" />
        <button
          style={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleEdit}
        >
          Add Rows
        </button>
      </div>
      <Table
        data={rows}
        columns={productColumn}
        deleteRow={deleteRow}
        modalOpen={modalOpen}
        handleEdit={handleEdit}
      />
      {open && (
        <Modal
          open={open}
          setOpen={setOpen}
          columns={productColumn}
          modalClose={() => {
            setOpen(false);
          }}
          onSubmit={handleSubmit}
          defaultValue={
            rowToEdit !== null && rows.find((r) => r.id === rowToEdit)
          } //find not filter as filter returns array and we only want the object having id === rowToEdit
        />
      )}
    </div>
  );
}
