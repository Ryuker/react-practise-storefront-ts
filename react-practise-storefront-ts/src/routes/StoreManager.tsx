import StoreProduct from "../components/StoreProduct";
import useSWR from "swr";
import { IProduct } from "../components/Product";
import ProductForm from "../components/ProductForm";
import useFetch from "../hooks/useFetch.hook";



export default function StoreManager(){
  const {
    data: products = [],
    isLoading,
    error,
  } = useSWR("http://localhost:8080/products");
  const inventory:IProduct[] = [...products];
  const {Delete} = useFetch("http://localhost:8080/products/")

  function handleProductDelete(){
    const response = Delete("5")
    console.log(response);

  }

  // console.log(products, isLoading, error);

  return (
    <>
      <h2>Store Manager</h2>
      <p>Add and Remove products from the store here.</p>
      <p>requests are send to the api.</p>
      
      <ProductForm />

      <button onClick={handleProductDelete}>delete product</button>
      <h3>Current products in the store</h3>
      <ul>
        {inventory && inventory.map(product => 
          <StoreProduct key={product.id} product={product} />
        )}
      </ul>
      
    </>
  )
}