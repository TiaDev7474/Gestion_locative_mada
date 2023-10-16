type Props={
    HandleClickBook:()=>void
}
const ButtonProperty = ({HandleClickBook}:Props) => {
    return (
        <div>
            <button className='bg-[#9104FF] text-white px-7 py-1' onClick={HandleClickBook}> Book </button>
        </div>
    );
};

export default ButtonProperty;
