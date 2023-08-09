import {FC, createContext, useState} from 'react'
import { IProduct } from './components/Product';
import { ICartProduct } from './components/Cart';

interface AppContextType{
  cart: ICartProduct[];
  onProductAdd: (newProduct: IProduct) => void;
  onProductDelete: () => void;
} 

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

const AppProvider: FC<Props> = ({children}) => {
  const [cart, setCart] = useState<ICartProduct[]>([]);

  function handleProductAdd(newProduct: IProduct){
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
      setCart([...cart, {...newProduct, quantity: 0}]);
  }

  function handleProductDelete(){
    console.log("deleting product");
  }

  const values:AppContextType = {
    cart: cart,
    onProductAdd: handleProductAdd,
    onProductDelete: handleProductDelete
  }


  return(
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
}

export {AppProvider, AppContext};