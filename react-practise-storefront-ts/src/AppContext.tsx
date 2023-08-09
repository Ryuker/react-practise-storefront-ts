import React, {ReactNode, createContext, useState} from 'react'
import { CartProduct } from './components/Cart';

interface AppContextType{
  cart: CartProduct[];
  onProductAdd: () => any;
} 

const AppContext = createContext<AppContextType | null>(null);

function AppProvider(children: React.ReactNode){
  const [cart, setCart] = useState<CartProduct[]>([]);

  function handleProductAdd(newProduct: CartProduct){
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

  const values:AppContextType = {
    cart: cart,
    onProductAdd: () => handleProductAdd
  }


  return(
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
}

export {AppProvider, AppContext};