import {loadStripe} from '@stripe/stripe-js';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import CartContextDisplay from '../components/CartContextDisplay';
import { AppContext } from '../AppContext';
import { API_PATH } from '../utils/paths';

// const myVar = import.meta.env;
const STRIPE_TOKEN = import.meta.env.VITE_STRIPE_TOKEN;

const stripeLoadedPromise = loadStripe(STRIPE_TOKEN);

export default function CartCheckout(){
  

  const app = useContext(AppContext);
  const [email, setEmail] = useState<string>("");
  const totalPrice = app.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  console.log(totalPrice);

  function handleEmailInput(event: ChangeEvent<HTMLInputElement>){
    setEmail(event.target.value);
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log("submitting form - " + email);
    console.log("submitting cart data to stripe - " + email);
    submitToStripe();
  }

  async function submitToStripe(){
    const lineItems = app.cart.map(product => {
      return { price: product.price_id, quantity: product.quantity}
    });
    console.log("Navigating to check out on Stripe");
    const stripe = await stripeLoadedPromise;
    try{
      const result = await stripe?.redirectToCheckout({
        lineItems: lineItems,
        mode: 'payment',
        successUrl: `${API_PATH}/cart-checkout/payment-succeed`,
        cancelUrl: `${API_PATH}/cart-checkout/payment-failed`,
        customerEmail: email
      });
      if (result)
        app.onCartClear();
      console.log(result?.error);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <h2>Cart Checkout Page</h2>
      <span>total price: €{totalPrice}</span>
      <form className="pay-form" onSubmit={handleFormSubmit}>
        <p>Enter your email and then click on pay and your products will be
          delivered to you on the same day!</p>
        <input type="text" onChange={handleEmailInput} 
          autoComplete="email" placeholder="Email" required/>
        <button type="submit">Pay on Stripe</button>
      </form>
      <button onClick={() => app.onCartClear()}>Clear Cart Contents</button>
      <CartContextDisplay />
    </>
  )
}