import { BiEdit, BiTrash } from "react-icons/bi";

export default function ListComponent({id, title, removeItem, editItem}){
  return(
    <div className="w-1/2 flex justify-between items-center my-3 p-5 border-b-2 border-amber-700">
      <p className="w-3/5 text-xl font-semibold text-ellipsis overflow-hidden ...">{title}</p>
      <div className="flex text-2xl">
        <BiEdit onClick={() => editItem(id)} className="text-amber-600 cursor-pointer" />
        <BiTrash onClick={() => removeItem(id)} className="ml-3 text-red-600 cursor-pointer" />
      </div>
    </div>
  )
}