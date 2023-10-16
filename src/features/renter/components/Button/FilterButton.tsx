import { FaFilter } from "react-icons/fa"

export const FilterButton = () => {
  return (
    <button className="flex items-center gap-2 hover:text-[#747bff]">
      <FaFilter />
      <span className="text-lg">Filter</span>
    </button>

  )
}
