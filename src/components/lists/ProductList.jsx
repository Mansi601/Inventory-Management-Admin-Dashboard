import Lists from "./Lists";
import { productsData } from "../../data/productsData";
import { productColumn } from "../../data/columns";

export default function ProductList() {
  return (
    <Lists
      title="Products Data"
      subtitle="List of Product Data"
      columns={productColumn}
      initialData={productsData}
    />
  );
}
