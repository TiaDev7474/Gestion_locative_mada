import { RouteObject } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import { RenterPage } from '../features/renter/pages'
import Property from "../features/property/routes/Property.tsx";



export const protectedRoutes : RouteObject[]  = [
    {
        path:'/user/*',
        element: <Homepage/>,
        children:[
            { path:'property',index:true, element: <Property/>},
            { path:'renter', element:<RenterPage />},
            { path:'profile', element: <div>Video Calls</div>},
        ]
        
  }
]
