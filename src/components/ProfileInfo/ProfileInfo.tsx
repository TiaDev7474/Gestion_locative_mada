import { Avatar } from  "../../elements";
import  { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { DropDown } from "../DropDown/DropDown";


type ProfileInfoProps = {
    avatar?: string,
    username?:string,    
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    const [isVisible, setIsVisible ] = useState<boolean>(false)
    const toggleIsVisible = () => {
         setIsVisible(!isVisible)
    }
  return (
  <div className="relative text-[#0d0d0d]">
      <button 
        onClick={toggleIsVisible}
        className='flex items-center gap-2'>
            <Avatar imageSrc={props.avatar as string} size={3} />
            <span className="min-w-fit">{props.username}</span>
            <span>
                {
                    isVisible ? <MdArrowDropUp size={25} /> :  <MdArrowDropDown size={25}/>
                }   
             
           </span>
      </button>
      <DropDown 
         isVisible={isVisible}
      />
  </div>
    
  )
}
