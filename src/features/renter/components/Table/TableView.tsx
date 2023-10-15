import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'
const renterList = [
    {
       renterId: "1",
       photo: "",
       firstname: "Riry",
       lastname: "Nomenjanahary",
       email: "rirynomenjanahary@gmail.com",
       phone: "+261349852634"

    }
]
export const TableView = () => {
  return (
    <table className='table'>
        <TableHeader />
        <tbody>
            { renterList.map((renter, index) => {

            return (
               <TableBody  renter={renter} key={index}/>
            )
            })}
        </tbody>
       
      
    </table>
  )
}
