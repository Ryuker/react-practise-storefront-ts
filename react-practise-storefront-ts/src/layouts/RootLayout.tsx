import { NavLink, Outlet } from "react-router-dom";
import { AppProvider } from "../AppContext";


export default function RootLayout(){

  function getClasses( {isActive} : {isActive: boolean} ){
    return isActive ? "active": "";
  }

  return(
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
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
          
          
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </AppProvider>
  )
}