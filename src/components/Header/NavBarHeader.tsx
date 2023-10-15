import { LinkItem } from "../../elements"

export const NavBarHeader = () => {
    return (
       <nav className="w-full h-[5vh] flex items-center py-10 pl-32 pr-32 ">
            <h2 className="text-4xl font-semibold">Logo.</h2>
            <div className="w-full flex items-center justify-end gap-4 text-lg text-white">
               <LinkItem 
                   to="/contact" 
                   label="Contact us" 
                />
                <LinkItem 
                   to="/auth/login" 
                   label="Login" 
                   style="btn btn-outlined "
                />
            </div>
       </nav>
    )
}