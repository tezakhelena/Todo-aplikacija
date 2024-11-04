import { createBrowserRouter } from "react-router-dom";
import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";

export const getRouter = (isAuthenticated: boolean) => {
    return createBrowserRouter(isAuthenticated ? protectedRoutes : publicRoutes);
};