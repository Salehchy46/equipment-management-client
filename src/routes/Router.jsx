import { createBrowserRouter } from "react-router-dom"
import Home from "../components/Home/Home";
import Root from "../components/Root/Root"
import ErrorPage from "../components/ErrorPage/Error";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
])

export default router;