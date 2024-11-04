import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { RootState } from "../store/store";
import { getRouter } from "./createAppRouter";

export const RouterWrapper = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); // Access Redux store
    const router = useMemo(() => getRouter(isAuthenticated), [isAuthenticated]); // Memoize router based on authentication state

    return <RouterProvider router={router} />;
};