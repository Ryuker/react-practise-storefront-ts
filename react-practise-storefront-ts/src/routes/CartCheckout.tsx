// import {loadStripe} from '@stripe/stripe-js';
import { ChangeEvent, useState } from 'react';
import CartContextDisplay from '../components/CartContextDisplay';

export default function CartCheckout(){
  const [email, setEmail] = useState<string>("");

  function handleEmailInput(event: ChangeEvent<HTMLInputElement>){
    setEmail(event.target.value);
  }

  function handleFormSubmit(){
    console.log("submitting form");
  }

  function handlePaymentOnStripeClick(){
    console.log("Navigating to check out on Stripe");
  }

  return (
    <>
      <h2>Cart Checkout Page</h2>
      <form className="pay-form" onSubmit={handleFormSubmit}>
        <p>Enter your email and then click on pay and your products will be
          delivered to you on the same day!</p>
        <input type="text" onChange={handleEmailInput} 
          autoComplete="email" placeholder="Email" required/>
        <button type="submit" onClick={handlePaymentOnStripeClick}>Pay on Stripe</button>
      <CartContextDisplay />
      </form>
      
    </>
  )
}