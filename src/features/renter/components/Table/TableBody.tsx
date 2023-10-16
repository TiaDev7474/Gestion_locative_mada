
import { Avatar } from '../../../../elements'
import { ActionColumn } from './ActionColumn'
type TableBodyProps = {
    renterId: string
    photo?: string,
    firstname: string,
    lastname: string,
    email: string,
    phone:string 
}
export const TableBody = ( { renter } : { renter:TableBodyProps }) => {
    
  return (
    <tr className='min-h-fit w-full flex justify-around items-center py-4 shadow-sm cursor-pointer duration-75 transition-all'>
        <td className=''> 
           <Avatar imageSrc={renter.photo ? renter.photo: ''}/>
        </td>
        <td className='text-center'> { renter.lastname }</td>
        <td className='text-center'>{ renter.firstname }</td>
        <td className='text-center'>{renter.email } </td>
        <td className='flex justify-center'>{ renter.phone }</td>
        <td className="flex gap-5">
            <ActionColumn />
        </td>
    </tr>
  )
}
