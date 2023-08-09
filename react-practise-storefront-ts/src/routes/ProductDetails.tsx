import { Inventory } from "../components/Inventory";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function ProductDetails(){
  const params = useParams();
  const id = params.id && parseInt(params.id);
  const existingProduct = Inventory.find((product) => product.id === id);

  return(
    <>
      <h2>Product Details Page - {existingProduct?.name}</h2>
      {existingProduct && 
      <div>
        {`
          id: ${existingProduct.id}
          name: ${existingProduct.name}
          description: ${existingProduct.description}
        `}
      </div>
      }
      <NavLink to="/store">Back to Store</NavLink>
    </>
  )


}