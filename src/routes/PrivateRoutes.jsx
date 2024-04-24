import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

function PrivateRoutes({ children }) {
    const location = useLocation();
    const { loading } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

    if (user) {
        return <>{children}</>;
    }

    if (loading) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <span className='loading loading-spinner loading-lg'></span>
            </div>
        );
    }

    return <Navigate state={location.pathname} to='/login' />;
}

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};
