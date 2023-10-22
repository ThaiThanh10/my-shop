import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainProvider from "./components/context/MainProvider.jsx"

const CartPage = React.lazy(() => import("./components/pages/CartPage/CartPage.jsx"))
const ProductPage = React.lazy(() => import("./components/pages/ProductPage/ProductPage.jsx"))
const Checkout = React.lazy(() => import("./components/pages/Checkout/Checkout.jsx"))
const Faq = React.lazy(() => import("./components/pages/Faq/Faq.jsx"))
const PriceTable = React.lazy(() => import("./components/pages/Pricetable/PriceTable.jsx"))
const ErrorPage = React.lazy(() => import("./components/pages/ErrorPage/ErrorPage.jsx"))
const ProductList = React.lazy(() => import("./components/pages/ProductList/ProductList.jsx"))
const Homepage = React.lazy(() => import("./components/pages/Homepage/Homepage.jsx"))
const App = React.lazy(() => import("./App.jsx"))

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
