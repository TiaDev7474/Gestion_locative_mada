
import { NavLinkItem  } from '../../elements';
import { MdLogout, MdSettings, MdSwitchAccount} from 'react-icons/md'

const Links = [
    {
        label: "My Account",
        icon: <MdSwitchAccount size="25" />
    },
    {
        label: "Settings",
        icon: <MdSettings size="25" />
    },
    {
        label: "Logout",
        icon: <MdLogout size="25" />
    }
]
type DropDownProps = {
    isVisible : boolean,
}
export const DropDown = (props: DropDownProps) => {
  if(!props.isVisible){
      return null
  }
  return (
    <div className='w-full absolute z-30 bg-white'>
        <ul className=' w-[15rem] flex flex-col  p-5 shadow-lg text-[#0d0d0d]'>
            { Links.map((link , index)=> {
                  return (
                        <NavLinkItem key={index} label={link.label} icon={link.icon} />
                  )
            }) }
        </ul>
    </div>
  )
}
