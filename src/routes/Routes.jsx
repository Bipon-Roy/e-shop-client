import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBrands from "../components/AddBrands";
import AddProduct from "../pages/AddProduct/AddProduct";
import PrivateRoutes from "./PrivateRoute";

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
                path: "/addProducts",
                element: (
                    <PrivateRoutes>
                        <AddProduct />
                    </PrivateRoutes>
                ),
            },
        ],
    },
]);

export default routes;
