
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Componets/Pages/Home/Home";
import Root from "../Componets/Pages/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);
  export default router;