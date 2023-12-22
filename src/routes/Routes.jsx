import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import AddProduct from "../pages/AddProduct/AddProduct";
import PrivateRoutes from "./PrivateRoute";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Cart from "../pages/Cart/Cart";
import About from "../pages/About/About";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },

            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/products/:brandName",
                element: <Products />,
                loader: () => fetch("http://localhost:5000/products"),
            },
            {
                path: "/addProducts",
                element: (
                    <PrivateRoutes>
                        <AddProduct />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/cart",
                element: (
                    <PrivateRoutes>
                        <Cart />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/productDetails/:id",
                element: (
                    <PrivateRoutes>
                        <ProductDetails />
                    </PrivateRoutes>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
            },
            {
                path: "/updateProduct/:id",
                element: (
                    <PrivateRoutes>
                        <UpdateProduct />
                    </PrivateRoutes>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
            },
        ],
    },
]);

export default routes;
