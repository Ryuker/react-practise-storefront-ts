import {useState} from 'react';
import { IProduct } from './product';

export interface ICartProduct extends IProduct {
  quantity: number;
}

// export let cartStorage: ICartProduct[] = [];
const dummyCart:ICartProduct[] = []

const cheese:ICartProduct = {
  id: 1,
  name: "Cheese",
  quantity: 0
}

const milk:ICartProduct = {
  id: 2,
  name: "Milk",
  quantity: 0
}

const chocolate:ICartProduct = {
  id: 3,
  name: "Chocolate",
  quantity: 0
}




export default function CartContent(){
  const [cart, setCart] = useState<ICartProduct[]>([...dummyCart]);

  function handleProductAdd(newProduct: ICartProduct){
    console.log("adding product to cart");
    const existingProduct = cart.find((product) => product.id === newProduct.id);
    
    if (existingProduct){ // if product already exists in cart
      const updatedCart = cart.map((product) => {
        if (product.id === existingProduct.id)
          return {...product, quantity: existingProduct.quantity + 1 };
        return product;
      });
      setCart(updatedCart);
    }
    
    else // product doesn't exist in cart yet 
      setCart([...cart, newProduct]);
  }

  function handleProductDelete(id:number){ 
    console.log("adding product to cart");
    const existingProduct = cart.find((product) => product.id === id);

    if (existingProduct && existingProduct.quantity > 1){ // if product quantity is over 0
      const updatedCart = cart.map((prevProduct) => {
        if (prevProduct.id === existingProduct.id)
            return {...prevProduct, quantity: prevProduct.quantity - 1 };
        return prevProduct;
      });
      setCart(updatedCart);
    }
    else //remove product from cart
      setCart((prevCart) => prevCart.filter((prevItem) => prevItem !== existingProduct));
  }

  return (
    <>
      <h3>Cart Content</h3>
      <ul>
      {cart && cart.map(product => 
        <li key={product.id}>{product.name} - {product.quantity}</li>
      )} 
      </ul>
      <div>
        <button onClick={() => handleProductAdd(chocolate)}>Add Chocolate to Cart</button>
        <button onClick={() => handleProductAdd(milk)}>Add Milk to Cart</button>
        <button onClick={() => handleProductAdd(cheese)}>Add Cheese to Cart</button>
      </div>
      <div>
        <button onClick={() => handleProductDelete(3)}>Remove Chocolate from Cart</button>
        <button onClick={() => handleProductDelete(2)}>Remove Milk from Cart</button>
        <button onClick={() => handleProductDelete(1)}>Remove Cheese from Cart</button>
      </div>

    </>
  )
}