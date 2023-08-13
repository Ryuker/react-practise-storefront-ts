import {loadStripe} from '@stripe/stripe-js';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import CartContextDisplay from '../components/CartContextDisplay';
import { AppContext } from '../AppContext';

const stripeLoadedPromise = loadStripe('pk_test_51HsqkCGuhXEITAut89vmc4jtjYd7XPs8hWfo2XPef15MFqI8rCFc8NqQU9WutlUBsd8kmNqHBeEmSrdMMpeEEyfT00KzeVdate');

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
        successUrl: 'http://localhost:5173/cart-checkout/payment-succeed',
        cancelUrl: 'http://localhost:5173/cart-checkout/payment-failed',
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