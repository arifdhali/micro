import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "./AuthProvider"
import { APP_URL } from "@/router";
import Loader from "@/components/Loader";

const RequiredAuth = () => {
    const { isAuthenticated, isLoading } = useAuth();
    const locations = useLocation();
    if (isLoading) {
        return <Loader />
    }

    if (!isAuthenticated) {
        return <Navigate
            replace
            to={APP_URL.auth.url + "/" + APP_URL.auth.login}
            state={{ from: locations }}
        />
    }

    return <Outlet />
}

export default RequiredAuth