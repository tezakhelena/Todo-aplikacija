import { Navigate } from "react-router-dom";
import Authentication from "../features/authentication/Authentication";
import { LoginContainer } from "../features/authentication/LoginContainer";
import ErrorPage from "../helpers/ErrorPage";
import { RegistrationContainer } from "../features/authentication/RegistrationContainer";

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
        element: <Navigate to="/authenticate" replace />, // Redirect to /authenticate
    },
    {
        path: '*', // Catch-all for any unmatched routes
        element: <ErrorPage />, // Render an error page for unmatched routes
    },
];