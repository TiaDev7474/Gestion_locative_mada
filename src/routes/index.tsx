import { useRoutes } from "react-router-dom"
import { publicRoute } from "./public.routes"

export const AppRoutes = () => {
  const element = useRoutes([...publicRoute])
  return (
    <div>
       { element }
    </div>
  )
}