
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Componets/Pages/Home/Home";
import Root from "../Componets/Pages/Root";
import Review from "../Componets/Pages/Review/Review";
import Event from "../Componets/Pages/Event/Event";
import Login from "../Componets/Pages/Login/Login";
import Register from "../Componets/Pages/Register/Register";
import PrivateRoute from "../Componets/Pages/PrivateRoute/PrivateRoute";
import Details from "../Componets/Pages/Details/Details";
import PrivateBook from "../Componets/Pages/PrivateBook.jsx/PrivateBook";
import PrivateReview from "../Componets/Pages/PrivateReview/PrivateReview";


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
            element:<PrivateReview><Review></Review></PrivateReview>
        },
        {
            path:'/event',
            element:<PrivateBook><Event></Event></PrivateBook>,
            loader:()=>fetch("/category.json")
        },
        {
            path:'/login',
            element:<Login></Login>,
           
        },
        {
            path:'/register',
            element:<Register></Register>
        },
         {
          path:'/:id',
          element: <PrivateRoute><Details></Details></PrivateRoute> ,
          loader:()=>fetch("/category.json")
        
        }
      ]
    },
  ]);
  export default router;