import { IndianRupee, Boxes, ShoppingCart, Truck } from "lucide-react";

import { productsData } from "../data/productsData";
import { suppliersData } from "../data/suppliersData";
import { ordersData } from "../data/ordersData";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const inventroyValue = numberWithCommas(productsData.reduce(
  (accumulator, product) => accumulator + product.costPrice * product.stock,
  0,
));

const stock = numberWithCommas(productsData.reduce(
  (accumulator, product) => accumulator + product.stock,
  0,
));
const suppliers =numberWithCommas( suppliersData.length);
const orders = numberWithCommas(ordersData.length);

export const cardsData = [
  {
    id: 1,
    title: "Inventory Value",
    value: inventroyValue,
    icon: IndianRupee,
  },
  {
    id: 3,
    title: "Total Stock",
    value: stock,
    icon: Boxes,
  },
  {
    id: 2,
    title: "Total Suppliers",
    value: suppliers,
    icon: Truck,
  },
  {
    id: 4,
    title: "Total Orders",
    value: orders,
    icon: ShoppingCart,
  },
];
