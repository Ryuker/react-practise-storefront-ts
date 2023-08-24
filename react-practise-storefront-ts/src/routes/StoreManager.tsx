import { FocusEvent, useEffect } from "react";
import StoreProduct from "../components/StoreProduct";
import useSWR, {mutate} from "swr";
import { IProduct } from "../components/Product";
import ProductForm from "../components/ProductForm";
import useFetch from "../hooks/useFetch.hook";
import { useState } from "react";



export default function StoreManager(){
  const {
    data: products = [],
    isLoading,
    error,
  } = useSWR("http://localhost:8080/products");
  const inventory:IProduct[] = [...products];
  const {Delete} = useFetch("http://localhost:8080/products/")
  const [deleteID, setDeleteID] = useState(8); 

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => event.target.select();

  async function handleProductDelete(){
    const response = await Delete(deleteID.toString())
    await mutate('http://localhost:8080/products')
    console.log(response);
  }

  // console.log(products, isLoading, error);

  return (
    <>
      <h2>Store Manager</h2>
      <p>Add and Remove products from the store here.</p>
      <p>requests are send to the api.</p>

      <label htmlFor="id">ID to delete:</label>
      <input id="id" type="number" 
            value={deleteID} onChange={e => setDeleteID(Number(e.target.value))} 
            onFocus={handleFocus}/>
      <button onClick={handleProductDelete}>delete product</button>
      
      <ProductForm />
      <h3>Current products in the store</h3>
      <ul>
        {inventory && inventory.map(product => 
          <StoreProduct key={product.id} product={product} />
        )}
      </ul>
      
    </>
  )
}