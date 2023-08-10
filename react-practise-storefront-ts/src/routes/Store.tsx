import CartContextDisplay from "../components/CartContextDisplay";
import { Inventory } from "../components/Inventory";
import Product from "../components/Product";


export default function Store(){
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
      <h2>Store Page - Inventory</h2>
      <ul>
        {Inventory && Inventory.map(product => 
          <Product key={product.id} product={product} />
        )}
      </ul>
      <CartContextDisplay />
    </>
  )
}