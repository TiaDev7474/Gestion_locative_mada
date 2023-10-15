import { MainLayout } from "../components"
import { Suspense} from "react"
import { Outlet} from "react-router-dom"

const Homepage  = () => {
    return (
        <MainLayout>
          
            <Suspense 
                fallback={
                    <div>
                         skeleton ui goes here
                    </div>
                }
            >
                
                <Outlet/>
            </Suspense>  
        </MainLayout>
    )
}

export default Homepage