import { useState } from "react"
import { FaSearch } from "react-icons/fa"


export const SearchField = () => {
  const [searchInput , setSerchInput ] = useState<string>();
  const handleSearchByName = (e:  React.ChangeEvent<HTMLInputElement>) => {
     setSerchInput(e.target.value);
  }
  return (
    <div className="flex  justify-between items-center border py-2 px-10  border-gray-500">
      <input
         type="search"
         className="bg-transparent focus:outline-none"
         placeholder="Search by name"
         value={searchInput}
         onChange={handleSearchByName}
      />
      <span className="cursor-pointer">
         <FaSearch size={22} />
      </span>
     
    </div>
  )
}
