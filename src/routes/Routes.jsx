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
                path: "/brands",
                element: <AddBrands />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/products/:brandName",
                element: <Products />,
                loader: () =>
                    fetch(
                        "https://brand-shop-server-qd8z0rquu-bipon-roys-projects.vercel.app/products"
                    ),
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
                loader: () =>
                    fetch(
                        "https://brand-shop-server-qd8z0rquu-bipon-roys-projects.vercel.app/cart"
                    ),
            },
            {
                path: "/productDetails/:id",
                element: (
                    <PrivateRoutes>
                        <ProductDetails />
                    </PrivateRoutes>
                ),
                loader: () =>
                    fetch(
                        "https://brand-shop-server-qd8z0rquu-bipon-roys-projects.vercel.app/products"
                    ),
            },
            {
                path: "/updateProduct/:id",
                element: (
                    <PrivateRoutes>
                        <UpdateProduct />
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://brand-shop-server-qd8z0rquu-bipon-roys-projects.vercel.app/products/${params.id}`
                    ),
            },
        ],
    },
]);

export default routes;
