/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
import useSWR from "swr";
import CartContextDisplay from "../components/CartContextDisplay";
// import { Inventory } from "../components/Inventory";
import Product, { IProduct } from "../components/Product";

const API_PATH = import.meta.env.VITE_API_PATH;

export default function Store(){
  const {
    data: products = [],
    isLoading,
    error,
  } = useSWR(`${API_PATH}/products`);
  const inventory:IProduct[] = [...products];

  console.log(products, isLoading, error);
  


  return (
    <>
      <h2>Store Page - Inventory loaded with SWR</h2>
      {/* <button onClick={handlePostClick}>Test</button> */}
      <ul>
        {inventory && inventory.map(product => 
          <Product key={product.id} product={product} />
        )}
      </ul>
      <CartContextDisplay />
    </>
  )
}