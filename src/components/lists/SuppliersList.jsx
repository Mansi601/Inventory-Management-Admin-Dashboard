import Lists from "./Lists";
import { suppliersData } from "../../data/suppliersData";
import { suppliersColumn } from "../../data/columns";

export default function SuppliersList() {
  return(
    <Lists
      initialData={suppliersData}
      columns={suppliersColumn}
      title="Suppliers Data"
      subtitle="List of Supplier Data"
    />
  )
}
