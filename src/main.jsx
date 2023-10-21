import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Homepage from "./components/pages/Homepage/Homepage.jsx"
import ProductList from "./components/pages/ProductList/ProductList.jsx"
import ProductPage from "./components/pages/ProductPage/Productpage.jsx"
import MainProvider from "./components/context/MainProvider.jsx"
import ErrorPage from "./components/pages/ErrorPage/ErrorPage.jsx"
import PriceTable from "./components/pages/Pricetable/PriceTable.jsx"
import Faq from "./components/pages/Faq/Faq.jsx"
import Checkout from "./components/pages/Checkout/Checkout.jsx"
import CartPage from "./components/pages/CartPage/CartPage.jsx"
// import CartPage from "./components/pages/CartPage/CartPage.jsx"

// const Cart = React.lazy(() => import("./components/pages/CartPage/CartPage.jsx"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/productlist",
        element: <ProductList />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/price",
        element: <PriceTable />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainProvider>
    <RouterProvider router={router} />
  </MainProvider>
)
