import React from 'react'
import { Avatar } from '../../../../elements'
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
    <tr className='table-body'>
        <td className='table-data'> 
           <Avatar imageSrc={renter.photo ? renter.photo: ''}/>
        </td>
        <td className='table-data'> { renter.lastname }</td>
        <td className='table-data'>{ renter.firstname }</td>
        <td className='table-data'>{renter.email } </td>
        <td className='table-data'>{ renter.phone }</td>
    </tr>
  )
}
