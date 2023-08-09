import { Inventory } from "../components/Inventory";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function ProductDetails(){
  const params = useParams();
  const id = params.id && parseInt(params.id);
  const existingProduct = Inventory.find((product) => product.id === id);

const productDetails = existingProduct && Object.entries(existingProduct).map( ([key, val]) => {
  return `The ${key} is ${val}`;
});

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

      {productDetails && productDetails.map((entree, index) => 
        <li key={index}>{entree}</li>
      )}

      <NavLink to="/store">Back to Store</NavLink>
    </>
  )


}