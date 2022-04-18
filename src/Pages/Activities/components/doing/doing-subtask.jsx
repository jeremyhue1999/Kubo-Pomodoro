import Text from "../../../../Components/text"
import { VscDiffRemoved } from "react-icons/vsc"
import { AiOutlineEdit } from "react-icons/ai"
import { BsCheckSquare } from "react-icons/bs"

const DoingSubtask = ({
  value
}) => {
  return (
    <div className="flex justify-between items-center my-4 border border-slate-800 border-b-white pb-1">
      <div className="flex gap-2 mt-2">
      <Text
        className='text-slate-100 text-lg mr-2'
        value={value}
      />
      <AiOutlineEdit
        className="cursor-pointer fill-slate-100" 
        size={32}
      />
      <VscDiffRemoved
        className="cursor-pointer fill-red-600" 
        size={32}
      />
      </div>
      <Text
        className="text-slate-100 text-xl" 
        value="15:00"
      />
      
    </div>
  )
}

export default DoingSubtask