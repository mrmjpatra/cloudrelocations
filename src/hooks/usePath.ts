import { useLocation } from "react-router-dom";

export const usePath=()=>{
    const url=useLocation();
    const parts = url.pathname.split('/');
    const location = parts[2];
    return location;
}

