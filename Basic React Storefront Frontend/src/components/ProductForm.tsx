import { FocusEvent, FormEvent, useState } from "react";
import useFetch from "../hooks/useFetch.hook";
import { API_PATH, PRODUCTS_URL } from "../utils/paths";

interface IAddProduct {
  name: string;
  description: string;
  price: number;
  price_id: string;
}

export default function ProductForm(){
  const {post} = useFetch(`${API_PATH}`);

  const [name, setName] = useState("Product Name");
  const [description, setDescription] = useState("Product Description");
  const [price, setPrice] = useState(0);
  const [priceID, setPriceID] = useState("price_1HxVriGuhXEITAutt5KUKo2V");

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => event.target.select();


  function handleFormSubmitClick(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log("submitting form");

    const newProduct: IAddProduct = {
      name: name, 
      description: description, 
      price: price, 
      price_id: priceID
    };

    console.log(newProduct);

    console.log("sending new product to api")
    const products = post(`${PRODUCTS_URL}`, newProduct).then((response) => console.log(response));
  }


  return (
    <>
      <h2>Add Product Form</h2>

      <form onSubmit={handleFormSubmitClick}>
        <label htmlFor="Name">Name:
          <input id="Name" type="text" 
            value={name} onChange={e => setName(e.target.value)} 
            onFocus={handleFocus}/>
        </label>
        

        <label htmlFor="Description">Description:
          <input id="Description" type="text" 
            value={description} onChange={e => setDescription(e.target.value)} 
            onFocus={handleFocus}/>
        </label>
        

        <label htmlFor="Price">Price: 
          <input id="Description" type="number" 
            value={price} onChange={e => setPrice(Number(e.target.value))} 
            onFocus={handleFocus}/>
        </label>
        

        <label htmlFor="PriceID">Price ID:
          <input id="PriceID" type="value" 
            value={priceID} onChange={e => setPriceID(e.target.value)} 
            onFocus={handleFocus}/>
        </label>

        <button type="submit">Add Product</button>
      </form>

    </>
  )
}