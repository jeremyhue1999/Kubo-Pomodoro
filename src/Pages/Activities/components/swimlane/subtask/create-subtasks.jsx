import SubtaskForm from "./subtask-form"
import Text from "../../../../../Components/text"
import { VscChevronUp } from "react-icons/vsc"

const CreateSubtasks = ({ 
  showCreateSubtasks, 
  onClose, 
  task, 
  taskList,
  taskID 
}) => {

  if (!showCreateSubtasks) {
    return null
  }
  
  return (
    <div className="my-2">
      <div className="flex justify-between items-center">
        <Text className="text-white text-lg" value="Subtasks" />
        <VscChevronUp 
          className="fill-slate-50 m-1 cursor-pointer" 
          size={30}
          onClick={onClose}
        />
      </div>
      <SubtaskForm 
        task={task} 
        taskList={taskList}
        taskID={taskID}
      />
    </div>
  )
}

export default CreateSubtasks