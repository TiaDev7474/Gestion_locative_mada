import { TableTitle } from './TableTitle'

const tableHeader =[
    {
      title: 'Photo'
    }, {
      title: 'FirstName'
    }, {
      title: 'LastName'
    }
    , {
      title: 'Email address'
    }
    , {
      title: 'Phone Number'
    },
    {
      title: 'Actions'
    }
  ]
export const TableHeader = () => {
  return (
    <thead className='w-full'>
       <tr className='flex justify-around '>
        {
          tableHeader.map(item => (
              <TableTitle title={item.title}/>
          ))
          }
       </tr>
    </thead>
  )
}
