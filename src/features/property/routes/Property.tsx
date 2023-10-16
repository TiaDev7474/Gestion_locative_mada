import CardProperty from "../components/Card.property.tsx";
import {PropertyCardType} from "../../../types";

const  ItemsProperty:PropertyCardType[] = [
    {
        status: true,
        image: '',
        rent: 12000,
        address: '4140 Parker Rd. Allentown, New Mexico 31134',
    },
    {
        status: true,
        image: '',
        rent: 12000,
        address: '4140 Parker Rd. Allentown, New Mexico 31134',
    },
    {
        status: true,
        image: '',
        rent: 12000,
        address: '4140 Parker Rd. Allentown, New Mexico 31134',
    }
]
const Property = () => {
    return (
        <div className='flex flex-col space-y-5 w-full pl-8 pr-5 pt-8'>
            <div className='flex justify-between items-center w-full'>
                <h2 className='text-xl'>Property Management</h2>
                <button className='border-none bg-transparent'> + Add new property </button>
            </div>
            <div className='flex justify-between pl-10'>
                <p> Apartment </p>
                <p>Filter </p>
            </div>
            <div className='flex flex-col space-y-5'>
                {
                    ItemsProperty.map((elem: PropertyCardType,key:number)=>(
                        <CardProperty  key={key} elem={elem}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Property;