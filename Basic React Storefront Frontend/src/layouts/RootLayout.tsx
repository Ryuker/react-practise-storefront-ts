import { NavLink, Outlet } from "react-router-dom";
import { AppProvider } from "../AppContext";
import { SWRConfig } from "swr";

const fetcher = (url:string) => fetch(url).then((response) => response.json());


export default function RootLayout(){

  function getClasses( {isActive} : {isActive: boolean} ){
    return isActive ? "active": "";
  }

  return(
    <SWRConfig value={{ fetcher }}>
      <AppProvider>
        <div className="root-layout">
          <h1>My First Storefront</h1>
          <nav>
            <h2>Navbar</h2>
            <ul>
              <li>
                <NavLink to="/" className={getClasses}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/store">Store</NavLink>
              </li>
              <li>
                <NavLink to="/store-swr">StoreSWR</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/cart-checkout">Cart Checkout</NavLink>
              </li>
              <li>
                <NavLink to="/store-manager">Store Manager</NavLink>
              </li>
            </ul>
            
            
          </nav>
          <main>
            <Outlet />
          </main>
        </div>
      </AppProvider>
    </SWRConfig>
  )
}