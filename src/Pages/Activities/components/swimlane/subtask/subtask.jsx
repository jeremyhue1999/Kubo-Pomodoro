import { useState } from "react"
import Input from "../../../../../Components/input"
import Text from "../../../../../Components/text"
import { VscDiffRemoved } from "react-icons/vsc"
import { AiOutlineEdit } from "react-icons/ai"
import { BsCheckSquare } from "react-icons/bs"
import { MdMoreTime } from "react-icons/md"
import LessTime from '../../../../../images/less-time'
import { collection, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { db } from '../../../../../firebase-config'

const Subtask = ({ 
  subtask,
  taskID
}) => {

  const [showEditInput, setShowEditInput] = useState(false)

  let { id: subtaskID, value: subtaskValue, completed: subtaskCompleted } = subtask
  const [newSubtask, setNewSubtask] = useState({
    id: '', 
    value: '', 
    completed: false
  })

  const userDocumentRef = doc(db, "testUsers", "user1")
  const tasksCollectionRef = collection(userDocumentRef, 'testTasks')
  const tasksDocumentRef = doc(tasksCollectionRef, taskID)

  const deleteSubtask = () => {
    updateDoc(tasksDocumentRef, {
      subtasks: arrayRemove(subtask)
      }
    )
  }

  const renameSubtaskHandler = () => {
    if (newSubtask.value === '' || newSubtask.value == subtaskValue) {
      setShowEditInput(false)
    } else {
      updateDoc(tasksDocumentRef, {
        subtasks: arrayRemove(subtask)
        }
      )
      updateDoc(tasksDocumentRef, {
          subtasks: arrayUnion(newSubtask)
        }
      )
      setShowEditInput(false) 
    }
  }

  const escapeKeyHandler = e => {
    if (e.key === 'Escape') {
      setShowEditInput(false)
    } 
  }

  const getNewSubtask = e => {
    setNewSubtask({
      id: subtaskID, 
      value: e.target.value, 
      completed: subtaskCompleted
    })
  }
  
  const clickSubtask = () => { 
    setShowEditInput(true)
  } 

  return (
    <div className="flex w-full">
      {showEditInput
      ? <form className="flex justify-between items-center my-4 w-full" onSubmit={renameSubtaskHandler}>
          <Input
            className="mr-2 placeholder:text-md w-full"
            name="Edit Subtask"
            defaultValue={subtaskValue}
            type="text"
            placeholder={subtaskValue}
            onChange={getNewSubtask}
            onKeyDown={escapeKeyHandler}
            required={true}
          />
          <BsCheckSquare
            className="cursor-pointer fill-green-500 hover:fill-green-700 " 
            size={42}
            onClick={renameSubtaskHandler} 
          />
        </form>
      : <div className="w-full mt-4 mb-2">
          <div className="flex justify-between items-center mb-1">
            <li 
              className="text-xl text-white cursor-pointer"
              key={subtaskID} 
              onClick={clickSubtask}
            >
            {subtaskValue}
            </li>
            <div className="flex">
              <AiOutlineEdit
                className="cursor-pointer fill-white hover:fill-gray-300 " 
                size={34}
                onClick={clickSubtask} 
              />
              <VscDiffRemoved
                className="cursor-pointer ml-2 fill-red-500 hover:fill-red-700 " 
                size={34}
                onClick={deleteSubtask} 
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <LessTime 
                fill='#0ea5e9'
                hoverFill='#38bdf8'
              />
              <MdMoreTime 
                className="cursor-pointer fill-sky-500 hover:fill-sky-400"
                size={34}
              />
            </div>
            <Text
              className="text-white text-2xl" 
              value='25:00'
            />
          </div>
        </div>
      }
    </div>
  )
}

export default Subtask