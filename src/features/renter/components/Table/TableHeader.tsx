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
    <thead className='table-header'>
        {
        tableHeader.map(item => (
            <TableTitle title={item.title}/>
        ))
        }
    </thead>
  )
}
