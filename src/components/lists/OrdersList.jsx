import Lists from "./Lists";
import { ordersData } from "../../data/tempordersData";
import { ordersColumn } from "../../data/columns";

export default function OrdersList() {
  return (<Lists
      initialData={ordersData}
      columns={ordersColumn}
      title="Orders Data"
      subtitle="List of Orders Data"
    />)
}
