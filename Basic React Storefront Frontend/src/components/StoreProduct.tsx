import { Link } from "react-router-dom";
import { IProduct } from "./Product";

interface IProps{
  product: IProduct;
}

export default function StoreProduct(props: IProps){

  const {product} = props;

  return (
    <>
      <h2>Product {product.id} - {product.name} - <Link to={`/products/${product.id}`}>View Product</Link> </h2>
      <div>
      <span>{product.description} - price: €{product.price}</span>
      </div>
      
    </>
  )
}