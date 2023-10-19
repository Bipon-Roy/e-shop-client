import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBrands from "../components/AddBrands";
import AddProduct from "../pages/AddProduct/AddProduct";
import PrivateRoutes from "./PrivateRoute";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

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
                path: "/brands",
                element: <AddBrands />,
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
                path: "/productDetails/:id",
                element: (
                    <PrivateRoutes>
                        <ProductDetails />
                    </PrivateRoutes>
                ),
            },
        ],
    },
]);

export default routes;
