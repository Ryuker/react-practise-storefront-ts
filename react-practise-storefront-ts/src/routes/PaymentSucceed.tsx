import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";
import CartContextDisplay from "../components/CartContextDisplay";

export default function PaymentSucceed(){
  const app = useContext(AppContext);

  useEffect(() => {
    app.onCartClear();
  },[])

  return (
    <>
      <h2>Payment Succeeded</h2>
      <NavLink to="/store">Back to Store</NavLink>
      <CartContextDisplay/>
    </>
  )
}