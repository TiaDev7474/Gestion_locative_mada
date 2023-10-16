import {PropertyCardType} from "../../../types";
import House from '../../../assets/interior.jpg';
import StatusProperty from "./Status.property.tsx";
import ButtonProperty from "./Button.property.tsx";
import {useState} from "react";
import RenterAddModal from "../Modal/RenterAddModal.tsx";

type Props={
    elem:  PropertyCardType
}

function CardProperty({elem}:Props) {
    const [isAdding,setAdding] = useState<boolean>()
   const AddNewRenter =  ()=>{
       setAdding(ancien=>!ancien)
   }
    return (
        <div className='flex justify-between p-5 bg-gray-400'>
            {
                isAdding && (
                    <RenterAddModal open={isAdding} HandleClick={AddNewRenter}/>
                )
            }
            <div className='h-[200px] w-[50%]'>
                <img src={House} className='w-[500px] h-[220px]' alt='beautiful house'/>
            </div>
            <div className=' w-[45%] p-4 space-y-3'>
                <div className='flex justify-end'>
                    <StatusProperty/>
                </div>
                <div className='flex justify-start'>
                    <div className='flex flex-col space-y-1'>
                        <h6 className='text-lg'>Rent:</h6>
                        <p className='text-[#9104FF] text-2xl'> $ {elem.rent} / month</p>
                    </div>
                </div>
                <div>
                    <p>{elem.address}</p>
                </div>
                <div className='flex justify-end'>
                    <ButtonProperty HandleClickBook={AddNewRenter}/>
                </div>
            </div>
        </div>
    );
}

export default CardProperty;
