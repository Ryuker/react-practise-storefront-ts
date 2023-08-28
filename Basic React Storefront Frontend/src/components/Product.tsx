import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  price_id?: string;
}

interface IProps{
  product: IProduct;
}

export default function Product(props: IProps){
  const app = useContext(AppContext);

  const {product} = props;

  return (
    <>
      <h2>Product {product.id} - {product.name} - <Link to={`/products/${product.id}`}>View Product</Link> </h2>
      <div>
      <span>{product.description} - price: €{product.price}</span>
        <div>
          <button onClick={() => app.onProductAdd(product)}>Add to Cart</button>
          <button onClick={() => app.onProductDelete(product.id)}>Delete entree in Cart</button>
          <button onClick={() => app.onProductRemove(product.id)}>Remove product from Cart</button>
        </div>
      </div>
      
    </>
  )
}