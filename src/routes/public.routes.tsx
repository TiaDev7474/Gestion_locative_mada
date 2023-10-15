
import { AuthRoutes } from "../features/authentication/routes";
import { LandingPage } from "../pages/LandingPage";

export const publicRoute = [
    {
        path:'/',
        element: <LandingPage />
    },
    {
        path:"/auth/*",
        element: <AuthRoutes />
      
    }
]