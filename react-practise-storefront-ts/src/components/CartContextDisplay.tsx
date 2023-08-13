import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Cheese, Chocolate, Milk, Yoghurt } from "./Inventory";


export default function CartContextDisplay() {
  const app = useContext(AppContext);

  return (
    <>
      <h2>cart context display</h2>
      {/* <span>{app.cart.length > 0 ? app.cart.length + " products in cart": "no product in cart"}</span> */}
      {app.cart.length > 0 && 
      <ul>
        {app.cart.map(product => 
          <li key={product.id}>
            {`id: ${product.id} 
            - name: ${product.name} 
            - description: ${product.description} 
            - quantity: ${product.quantity}
            `}
          </li>
        )}
      </ul>}
      <div>
        <button onClick={() => app.onProductAdd(Cheese)}>Add Cheese to Cart</button>
        <button onClick={() => app.onProductDelete(Cheese.id)}>Delete Product from Cart</button>
        <button onClick={() => app.onProductRemove(Cheese.id)}>Remove product from Cart</button>
      <div>
      </div>
        <button onClick={() => app.onProductAdd(Chocolate)}>Add Chocolate to Cart</button>
        <button onClick={() => app.onProductDelete(Chocolate.id)}>Delete Product from Cart</button>
        <button onClick={() => app.onProductRemove(Chocolate.id)}>Remove product from Cart</button>
      </div>
      <div>
        <button onClick={() => app.onProductAdd(Milk)}>Add Milk to Cart</button>
        <button onClick={() => app.onProductDelete(Milk.id)}>Delete Product from Cart</button>
        <button onClick={() => app.onProductRemove(Milk.id)}>Remove product from Cart</button>
      </div>
      <div>
        <button onClick={() => app.onProductAdd(Yoghurt)}>Add Yoghurt to Cart</button>
        <button onClick={() => app.onProductDelete(Yoghurt.id)}>Delete Product from Cart</button>
        <button onClick={() => app.onProductRemove(Yoghurt.id)}>Remove product from Cart</button>
      </div>
    </>
  );
}