import {useReactiveVar} from "@apollo/client";
import {isLogging} from "../cache/cache";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}: {children:JSX.Element}) => {
    const isLog = useReactiveVar(isLogging);
    if(isLog){
        return children;
    }else{
        return <Navigate to="/login" replace />;
    }
}

export default PrivateRoute;