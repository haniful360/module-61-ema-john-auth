import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
// import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Layout/Home';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import AuthProviders from './components/providers/AuthProviders';
import PrivateRoutes from './routes/PrivateRoutes';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: cartProductsLoader
      },
      {
        path: '/checkout',
        element: <PrivateRoutes><Checkout /></PrivateRoutes>
      },
      {
        path: '/inventory',
        element: <Inventory />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
