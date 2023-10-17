import Root from "../layout/Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,

        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default routes;