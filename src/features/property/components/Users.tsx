import {Avatar} from "../../../elements";

type Props = {
    HandleClickAdd:()=>void,
    lname:string,
    fname:string,
    profile:string
}
const Users = ({HandleClickAdd,lname,fname,profile}:Props) => {
    return (
        <div className='flex  items-center justify-between'>
            <div className='w-[20%]'>
                <Avatar imageSrc={profile} size={6}/>
            </div>
            <p className='w-[30%]'>{fname} {lname}</p>
            <button  onClick={HandleClickAdd} className='  text-center bg-[#9104FF] rounded-xl text-white py-1 px-7'> Add </button>
        </div>
    );
};

export default Users;