import {ChangeEvent} from "react";
import {MdEdit} from "react-icons/md";


type Props={
    open:boolean,
    HandleClick: ()=>void
}
const PropertyAddModal = ({open,HandleClick}:Props) => {
    const HandleImageChange = (e:ChangeEvent<HTMLInputElement>)=>{
        console.log(e)
    }
    return (
        <>
            {
                open && (
                    <div onClick={HandleClick} className='overlay-property'>
                        <div className='centrale-property rounded-2xl px-24 py-16' onClick={(e)=> e.stopPropagation()}>
                            <div className='flex flex-col space-y-8'>
                                <h2 className='font-bold text-xl'>Add Property</h2>
                                <div className='flex space-x-8'>
                                    <div className='relative bg-[#D9D9D9] w-[16vw] h-[30vh]'>
                                        <div className='absolute w-[40%] top-[50%]  h-[8vh] cursor-pointer'>

                                        </div>
                                        <div className="absolute w-[40%] top-[50%]  h-[8vh] cursor-pointer ">
                                            <input onChange={HandleImageChange} type='file'   className='cursor-pointer h-full w-full input  opacity-0' name='images' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col space-y-8'>
                                        <div className='flex flex-col space-y-2'>
                                            <h4 className='font-bold'>Property type</h4>
                                            <div className=' flex items space-x-4'>
                                                <label>
                                                    <input type="radio" name="answer" value="yes"/>
                                                        Apartment
                                                </label>
                                                <label>
                                                    <input type="radio" name="answer" value="no"/>
                                                        House
                                                </label>
                                            </div>
                                        </div>
                                        <div className='flex flex-col space-y-5'>
                                            <div className='flex items-center space-x-4 '>
                                                <label className='font-bold flex items-center space-x-2'>Surface Area &nbsp; &nbsp; <span className='text-[#0496FF]'><MdEdit/></span> </label>
                                                <input type='text' className='outline-none bg-transparent  border border-[#9104FF] rounded-lg px-2 ' placeholder='Enter the surface area'/>
                                            </div>
                                            <div className='flex items-center space-x-4 '>
                                                <label className='font-bold flex items-center space-x-2'>Surface Area &nbsp; &nbsp; <span className='text-[#0496FF]'><MdEdit/></span> </label>
                                                <input type='text' className='outline-none bg-transparent  border border-[#9104FF] rounded-lg px-2 ' placeholder='Enter the surface area'/>
                                            </div>
                                        </div>
                                        <div className='flex justify-end space-x-4'>
                                                <button className='border border-[#1E1E1E] px-6 py-1'>Cancel</button>
                                                <button className='bg-[#9104FF] text-white py-1 px-6'>Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default PropertyAddModal;