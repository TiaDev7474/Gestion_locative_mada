import { RouteObject } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import { RenterPage } from '../features/renter/pages'



export const protectedRoutes : RouteObject[]  = [
    {
        path:'/user/*',
        element: <Homepage/>,
        children:[
            { path:'property',index:true, element: <div>MessagePages</div>},
            { path:'renter', element:<RenterPage />},
            { path:'profile', element: <div>Video Calls</div>},
        ]
        
  }
]