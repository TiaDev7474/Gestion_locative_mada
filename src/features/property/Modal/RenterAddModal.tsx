import {FaSearch} from "react-icons/fa";
import {UserListInModalType} from "../../../types";
import Users from "../components/Users.tsx";

type Props={
    open:boolean,
    HandleClick: ()=>void
}
const users: UserListInModalType[] = [
    {
        lname: 'test',
        fname: ' test',
        profil: ''
    },
    {
        lname: 'test',
        fname: ' test',
        profil: ''
    },
    {
        lname: 'test',
        fname: ' test',
        profil: ''
    },
    {
        lname: 'test',
        fname: ' test',
        profil: ''
    }
]
const RenterAddModal = ({open,HandleClick}:Props) => {
    const HandleClickAdd = ()=>{

    }
    return (
        <>
            {
                open && (
                    <div className='overlay' onClick={HandleClick}>
                        <div className='centrale rounded-2xl' onClick={(e)=>e.stopPropagation()}>
                            <div className='p-8 flex flex-col space-y-6'>
                                <h3 className='text-xl'>Renter List</h3>
                                <div className='flex justify-between items-center'>
                                    <div className='w-[70%] border border-[#9104FF] rounded-xl flex justify-between px-3 items-center'>
                                        <input type='text' name='serach' placeholder='Chercher par nom' className='  py-2 outline-none border-none bg-transparent'/>
                                        <div className='text-[#9104FF]'>
                                            <FaSearch />
                                        </div>
                                    </div>
                                    <p className='text-[#9104FF] text-lg cursor-pointer w-[20%]' >New user</p>
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    {
                                        users.map((elem,key)=>(
                                            <Users HandleClickAdd={HandleClickAdd} lname={elem.lname} fname={elem.fname} profile={elem.profil} key={key}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default RenterAddModal;
