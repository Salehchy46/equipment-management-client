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
import SingleEquipment from "../components/Equipments/SingleEquipment";
import Header from "../components/Home/Header";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: (params) => fetch(`https://equipment-management-server.vercel.app/users/${params.params.id}`)
      },
      {
        path: '/shop',
        element: <Equipment></Equipment>,
        loader: () => fetch('https://equipment-management-server.vercel.app/equipments')
      },
      {
        path: '/addproducts',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/editproduct/:id',
        element: <EditProduct></EditProduct>,
        loader: (params) => fetch(`https://equipment-management-server.vercel.app/equipments/${params.params.id}`),
      },
      {
        path: '/mylist',
        element: <PrivateRoute><Mylist></Mylist></PrivateRoute>,
        loader: () => fetch('https://equipment-management-server.vercel.app/users')
      },
      {
        path: '/singleequipment/:id',
        element: <PrivateRoute><SingleEquipment></SingleEquipment></PrivateRoute>,
        loader: (params) => fetch(`https://equipment-management-server.vercel.app/equipments/${params.params.id}`)
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