import { NavLink } from "react-router-dom";

export default function PaymentSucceed(){
  return (
    <>
      <h2>Payment Succeeded</h2>
      <NavLink to="./store">Back to Store</NavLink>
    </>
  )
}