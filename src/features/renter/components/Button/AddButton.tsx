import { FaPlus } from "react-icons/fa"

export const AddButton = () => {
  return (
    <button className="flex items-center gap-2 hover:text-[#747bff]">
      <FaPlus />
      <span className="text-lg">Add new property</span>
    </button>
  )
}
