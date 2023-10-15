

import { LandingPage } from "../pages/LandingPage";
import AuthRouter from "../features/routes/auth.router.tsx";

export const publicRoute = [
    {
        path:'/',
        element: <LandingPage />
    },
    {
        path:"/auth/*",
        element: <AuthRouter />
      
    }
]
