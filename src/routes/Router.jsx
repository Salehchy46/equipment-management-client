import { createBrowserRouter } from "react-router-dom"
import Home from "../components/Home/Home";
import Root from "../components/Root/Root"
import ErrorPage from "../components/ErrorPage/Error";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";
import AddProducts from "../components/AddProducts/AddProducts";
import PrivateRoute from "./PrivateRoute";
import Mylist from "../components/MyList/Mylist";
import Equipment from "../components/Equipments/Equipments";
import EditProduct from "../components/AddProducts/EditProduct";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/shop',
        element: <Equipment></Equipment>,
        loader: () => fetch('http://localhost:5000/equipments')
      },
      {
        path: '/addproducts',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/editproduct',
        element: <EditProduct></EditProduct>
      },
      {
        path: '/mylist',
        element: <PrivateRoute><Mylist></Mylist></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path:'/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      }
    ]
  }
])

export default router;