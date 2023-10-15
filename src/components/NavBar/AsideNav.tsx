import { MdHouse,MdPeople } from "react-icons/md"
import { NavLinkItem } from "../../elements/Link/NavLink";

const AsideNavLinks = [
    {
        label:"Property Management",
        icon: <MdHouse  size="25"/>,
        to:"/user/property",
    },
    {
        label:"Renter Management",
        icon: <MdPeople size="25"/>,
        to:"/user/renter"
    },
]

export const AsideNav = () => {

  return (
    <div className={`'w-[18rem]'} transition-all duration-300`}>
         <ul className="flex flex-col gap-2">
             {
                AsideNavLinks.map((link , index) => {
                    return (
                         <NavLinkItem key={index} label={link.label} icon={link.icon} to={link.to} />
                    )
                })
             }
         </ul>

    </div>
  )
}