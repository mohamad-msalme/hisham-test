import Root from "./pages/root/Layout";
import ErrorPage from "./pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import { ProductPage } from "./pages/product";
import { ProductDetail } from "./pages/ProductDetails";
import { ShoppingCart } from "./pages/shoping-cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
      {
        path: ":productId",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);
