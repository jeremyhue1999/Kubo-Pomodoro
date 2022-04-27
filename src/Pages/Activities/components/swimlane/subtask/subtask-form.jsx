import { useState } from "react"
import Button from "../../../../../Components/button"
import Input from "../../../../../Components/input"
import SubtaskList from "./subtask-list"
import Text from "../../../../../Components/text"
import { VscChevronUp } from "react-icons/vsc"
import { VscAdd } from "react-icons/vsc"
import { doc, arrayUnion, updateDoc } from 'firebase/firestore'
import { tasksColRef } from '../../../../../firebase-db'
import { v4 as uuidv4 } from 'uuid'

const SubtaskForm = ({ showSubtaskForm, taskID, onClose }) => {

  const [subtask, setSubtask] = useState({
    id: '', 
    value: '', 
    completed: false
  })

  if (!showSubtaskForm) {
    return null
  }
  
  const submitHandler = e => {
    e.preventDefault()
    if (subtask.value === '') {
      console.log("No Input")
    } else {
      const tasksDocumentRef = doc(tasksColRef, taskID)
      updateDoc(tasksDocumentRef, {
        subtasks: arrayUnion(subtask)
      })
      setSubtask({
        id: '', 
        value: '', 
        completed: false
      })
    }
  }

  const getSubtask = e => {
    setSubtask({
      id: uuidv4(), 
      value: e.target.value, 
      completed: false
    })
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <Text className="text-white text-lg" value="Subtasks" />
        <VscChevronUp 
          className="fill-slate-50 m-1 cursor-pointer" 
          size={30}
          onClick={onClose}
        />
      </div>
      <form>
        <Input
          className="my-1 w-full placeholder:text-md"
          value={subtask.value}
          name="Subtask"
          type="text"
          placeholder="Subtask Name"
          onChange={getSubtask}
          required={true}
        />
        <Button 
          className="cursor-pointer flex justify-center bg-slate-500 hover:bg-slate-600 rounded mt-1" 
          onClick={submitHandler}
        >
          <VscAdd
            className="fill-white py-1" 
            size={32}
          />
        </Button>
      </form>
      <SubtaskList
        taskID={taskID}
      />
    </div>
  )
}

export default SubtaskForm