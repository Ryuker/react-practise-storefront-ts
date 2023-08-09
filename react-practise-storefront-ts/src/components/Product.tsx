import { useContext } from "react";
import { AppContext } from "../AppContext";

export interface IProduct {
  id: number;
  name: string;
  description?: string;
}

interface IProps{
  product: IProduct;
}

export default function Product(props: IProps){
  const app = useContext(AppContext);

  const {product} = props;

  return (
    <>
      <h2>Product {product.id} - {product.name}</h2>
      <span>{product.description}</span>
      <button onClick={() => app.onProductAdd(product)}>Add to Cart</button>
      <button onClick={() => app.onProductDelete(product.id)}>Delete entree in Cart</button>
      <button onClick={() => app.onProductRemove(product.id)}>Remove product from Cart</button>
    </>
  )
}