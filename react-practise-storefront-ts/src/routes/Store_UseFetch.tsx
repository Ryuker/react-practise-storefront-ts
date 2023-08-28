/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CartContextDisplay from "../components/CartContextDisplay";
// import { Inventory } from "../components/Inventory";
import Product, { IProduct } from "../components/Product";
import useFetch from "../hooks/useFetch.hook";

const API_PATH = import.meta.env.VITE_API_PATH;
//http://localhost:5173/

export default function Store(){
  const {get, post, message, loading } = useFetch(`${API_PATH}`);
  const [products, setProducts] = useState<IProduct[]>([]);
  
  useEffect(() => {
    console.log(get("/products"), loading, message);

    get("/products")
    .then((data) => {
      setProducts(data)
    }).catch(error => console.log("couldn't load products from inventory", error));

  },[]);

  function handlePostClick(){
    post("Inventory2.json", products);
  }


  // console.log("apiInventory: " + apiInventory);

  // const products = [
  //    {
  //     id: 1,
  //     name: "Cheese",
  //     description: "Love cheese"
  //   },
  //   {
  //     id: 2,
  //     name: "Milk",
  //     description: "Yummi milk"
  //   },
  //   {
  //     id: 3,
  //     name: "Chocolate",
  //     description: "Sweet chocolate"
  //   },
  //   {
  //     id: 3,
  //     name: "Yoghurt",
  //     description: "Healthy yoghurt"
  //   }
  // ]

  // function handleProductAddToCart(){
  //   console.log("adding product to cart");
  // }

  // function handleProductDeleteFromCart(){
  //   console.log("deleting product from cart");
  // }


  return (
    <>
      <h2>Store Page - Inventory loaded with UseFetch</h2>
      <button onClick={handlePostClick}>Test</button>
      <ul>
        {products && products.map(product => 
          <Product key={product.id} product={product} />
        )}
      </ul>
      <CartContextDisplay />
    </>
  )
}