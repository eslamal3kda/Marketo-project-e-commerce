import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (isAuthenticated === false) {
            const timer = setTimeout(() =>setRedirect(true), 1500);
            const toastTimer = setTimeout(()=>toast.error("Only Admin Can Enter"),1600 )
            return () => {
                clearTimeout(timer)
                clearTimeout(toastTimer)
            };
        }
    }, [isAuthenticated]);

    if (redirect) {
        return <Navigate to="/" replace />;
    }

    if (isAuthenticated === false) {
        return <Loader />;
    }


    return <>{children}</>;
}
