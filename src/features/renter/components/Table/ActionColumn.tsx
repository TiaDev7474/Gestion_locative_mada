import React from "react";
import { FaTrash , FaEdit } from "react-icons/fa";

export const ActionColumn = () => {
  return (
    <React.Fragment>
        <span className="text-blue-400">
            <FaEdit size={24} />
        </span>
        <span className="text-red-500">
            <FaTrash size={22}  />
         </span>
    </React.Fragment>
  )
}
