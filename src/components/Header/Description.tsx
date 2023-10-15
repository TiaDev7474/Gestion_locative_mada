import { LinkItem } from "../../elements"

export const Description = () => {
    return (
        <div className="flex-1 flex flex-col justify-center pt-6">
            <h1 className=" w-full xl:w-[50%] text-[6rem] xl:text-[96px] font-semibold mb-10 ">
               <span className="ml-14 pr-5">Property</span> 
               and Renter Management
            </h1>
            <div className=" flex items-center justify-start gap-10 mb-10">
            <span className="flex justify-start text-lg">
                Easy to use and trust by thousands users
            </span>
            <LinkItem 
                to="login"
                label="Get started"
                style="btn btn-primary btn-lg"
            />
            </div>
        </div>
    )
}