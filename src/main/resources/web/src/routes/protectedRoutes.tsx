import AppLayout from "../features/app-layout/AppLayout";
import { KorisniciContainer } from "../features/korisnici/KorisniciContainer";
import ErrorPage from "../helpers/ErrorPage";

export const protectedRoutes = [
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/korisnici",
                element: <KorisniciContainer />,
            },
        ],
    },
];