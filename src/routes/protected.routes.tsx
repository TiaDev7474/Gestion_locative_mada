import { RouteObject } from 'react-router-dom'
import Homepage from '../pages/Homepage'



export const protectedRoutes : RouteObject[]  = [
    {
        path:'/user/*',
        element: <Homepage/>,
        children:[
            { path:'property',index:true, element: <div>MessagePages</div>},
            { path:'renter', element:<div>Friend pages</div> },
            { path:'profile', element: <div>Video Calls</div>},
        ]
        
  }
]