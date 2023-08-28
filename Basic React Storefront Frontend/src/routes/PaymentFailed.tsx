import { NavLink } from "react-router-dom";

export default function PaymentFailed(){
  return (
    <>
      <h2>Payment Failed</h2>
      <NavLink to="/cart-checkout">Back to Cart Checkout</NavLink>
    </>
  )
}