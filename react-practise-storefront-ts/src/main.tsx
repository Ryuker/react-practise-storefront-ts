import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './styles.css';

// Pages
import Home from './routes/Home'; 
import Store from './routes/Store_UseFetch';
import StoreSWR from './routes/Store_SWR';
import Cart from './routes/Cart';
import ProductDetails from './routes/ProductDetails';

// Layouts
import RootLayout from './layouts/RootLayout';



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store-swr" element={<StoreSWR />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Page: error page not found</h1>}/>
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



