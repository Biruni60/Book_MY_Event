
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Componets/Pages/Home/Home";
import Root from "../Componets/Pages/Root";
import Review from "../Componets/Pages/Review/Review";
import Event from "../Componets/Pages/Event/Event";
import Login from "../Componets/Pages/Login/Login";
import Register from "../Componets/Pages/Register/Register";
import Details from "../Componets/Pages/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/review',
            element:<Review></Review>
        },
        {
            path:'/event',
            element:<Event></Event>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
         {
          path:'/service/:id',
          element:<Details></Details>,
          loader:()=>fetch('/category.json')
        }
      ]
    },
  ]);
  export default router;