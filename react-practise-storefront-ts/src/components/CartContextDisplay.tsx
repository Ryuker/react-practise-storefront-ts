import { useContext } from "react";
import { AppContext } from "../AppContext";
import { IProduct } from "./Product";


export default function CartContextDisplay() {
  const app = useContext(AppContext);

  const newProduct: IProduct = {
    id: 1,
    name: "Cheese",
    description: "Lovely cheese" 
  }

  return (
    <>
      <h2>cart context display</h2>
      <span>{app.cart.length}</span>
      <button onClick={() => app.onProductAdd(newProduct)}>Add New Product to Cart</button>
      <button onClick={() => app.onProductDelete()}>Remove Product from Cart</button>
    </>
  );
}