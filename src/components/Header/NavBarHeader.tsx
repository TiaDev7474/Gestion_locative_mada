import { LinkItem } from "../../elements"
import { ProfileInfo } from "../ProfileInfo/ProfileInfo"

export const NavBarHeader = () => {
   const isAuthenticated = true
    return (
       <nav className="h-[5vh] flex items-center py-12 pl-24 pr-24 ">
            <h2 className="text-4xl font-semibold">Logo.</h2>
            <div className="w-full flex  justify-end gap-4 text-base">
                {
                  isAuthenticated ? (
                     <ProfileInfo username="Riry Nomenjanahary" />
                  ): (
                     <LinkItem 
                     to="/auth/login" 
                     label="Login" 
                     style="btn btn-outlined "
                  />
                  )
                }
              
            </div>
       </nav>
       
    )
}