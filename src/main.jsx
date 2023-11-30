import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Login from './pages/login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import SingleProduct from './pages/single-product.jsx';
import About from './pages/about.jsx';
import Products from './pages/products.jsx';
import ProductsList from './pages/productList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
    children: [
      {
        path: "",
        element: <ProductsList />,
      },
      {
        path: ":id",
        element: <SingleProduct />,
      }

    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
    {/* <App /> */}
  </React.StrictMode>,
)
