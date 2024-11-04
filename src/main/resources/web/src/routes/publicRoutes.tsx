import { Navigate } from "react-router-dom";
import Authentication from "../features/authentication/view/Authentication";
import { LoginContainer } from "../features/authentication/container/LoginContainer";
import ErrorPage from "../helpers/ErrorPage";
import { RegistrationContainer } from "../features/authentication/container/RegistrationContainer";

export const publicRoutes = [
    {
        path: "/authenticate",
        element: <Authentication />,
    },
    {
        path: "/registracija",
        element: <RegistrationContainer />,
    },
    {
        path: "/prijava",
        element: <LoginContainer/>,
    },
    {
        path: '/',
        element: <Navigate to="/authenticate" replace />, // Redirect na /authenticate
    },
    {
        path: '*', // Catch-all for any unmatched routes
        element: <ErrorPage />, // Render an error page for unmatched routes
    },
];