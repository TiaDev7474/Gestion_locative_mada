import interior from "../../assets/interior.jpg";
export const AsideImage = () => {
    return (
        <div className="w-full  xl:w-[50%]  flex justify-center">
            <div className=" w-full relative h-[28rem]">
            <img 
                src={interior}
            />
            <div className="flex flex-col bg-white absolute w-[12rem] py-2 px-5 rounded-lg bottom-2 -left-10">
                <span className="text-2xl font-bold">
                    +2k
                </span>
                <span className="text-lg">
                    Satisfied users
                </span>
            </div>
            
            </div>
        </div>
    )
}