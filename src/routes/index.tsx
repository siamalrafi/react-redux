import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../page/NotFound";
import Home from "../page/Home";
import Login from "../page/Login";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/home",
      element: <Home />,
   },
   {
      path: "*",
      element: <NotFound />,
   },
]);

export default routes;
