import {useState} from 'react';
export interface CartProduct {
  id: number;
  name: string;
  quantity: number;
}

// export let cartStorage: CartProduct[] = [];
const dummyCart:CartProduct[] = []

const cheese:CartProduct = {
  id: 1,
  name: "Cheese",
  quantity: 1
}

const milk:CartProduct = {
  id: 2,
  name: "Milk",
  quantity: 1
}

const chocolate:CartProduct = {
  id: 3,
  name: "Chocolate",
  quantity: 1
}




export default function CartContent(){
  const [cart, setCart] = useState<CartProduct[]>([...dummyCart]);

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