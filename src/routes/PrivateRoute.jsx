import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return(<span className="loading loading-spinner loading-xl text-center"></span>)
    }
    
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/signin'></Navigate>
};

export default PrivateRoute;