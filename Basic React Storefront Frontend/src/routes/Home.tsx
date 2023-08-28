import { NavLink } from "react-router-dom";

export default function Home(){
  return (
    <>
      <h2>Home Page</h2>
      <p>Basic Storefront for Products</p>
      <p>visit <NavLink to="/store">store</NavLink> to see products</p>
    </>
  )
}