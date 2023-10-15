import { useRoutes } from "react-router-dom"
import { publicRoute } from "./public.routes"
import { protectedRoutes } from "./protected.routes"

export const AppRoutes = () => {
  const element = useRoutes([...publicRoute, ...protectedRoutes]) 
  return (
    <div>
       { element }
    </div>
  )
}