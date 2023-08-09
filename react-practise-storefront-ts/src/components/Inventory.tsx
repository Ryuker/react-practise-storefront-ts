import { IProduct } from "./Product";

export const Cheese: IProduct = {
  id: 1,
  name: "Cheese",
  description: "Lovely cheese"
}

export const Milk: IProduct = {
  id: 2,
  name: "Milk",
  description: "Yummi milk"
}

export const Chocolate: IProduct = {
  id: 3,
  name: "Chocolate",
  description: "Sweet chocolate"
}

export const Yoghurt: IProduct = {
  id: 4,
  name: "Yoghurt",
  description: "Healthy yoghurt"
}

export const Inventory = [
  Cheese,
  Milk,
  Chocolate,
  Yoghurt
];