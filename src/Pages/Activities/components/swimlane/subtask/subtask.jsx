import { useEffect, useState } from "react"
import Input from "../../../../../Components/input"
import Text from "../../../../../Components/text"
import { VscDiffRemoved } from "react-icons/vsc"
import { AiOutlineEdit } from "react-icons/ai"
import { BsCheckSquare } from "react-icons/bs"
import { MdMoreTime } from "react-icons/md"
import LessTime from '../../../../../images/less-time'
import { collection, doc, updateDoc, arrayUnion, arrayRemove, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../../../../firebase-config'


const Subtask = ({ 
  subtask,
  subtaskList,
  setSubtaskList,
  currentTask
}) => {

  /* UI */
  const [showEditInput, setShowEditInput] = useState(false)

  /* Values */
  let { id: subtaskID, value: subtaskValue } = subtask
  const [currentSubtask, setCurrentSubtask] = useState({})
  const [newSubtask, setNewSubtask] = useState({
    id: '', 
    value: '', 
    completed: false
  })

  /* References */
  const userDocumentRef = doc(db, "testUsers", "user1")
  const tasksCollectionRef = collection(userDocumentRef, 'testTasks')

  const deleteSubtask = () => {
    /* Deletes a subtask */
    setSubtaskList(subtaskList.filter((e) => e.id !== subtaskID))
  }

  useEffect(() => {
    const getCurrentSubtask = async () => {
      const tasksDocumentRef = doc(tasksCollectionRef, currentTask.id)
      const docSnap = await getDoc(tasksDocumentRef)
      const data = docSnap.data().subtasks
      const current_subtask = data.filter(e => e.id === subtaskID)
      setCurrentSubtask(current_subtask[0])
    }
    getCurrentSubtask()
  }, [setCurrentSubtask])

  const renameSubtaskClick = () => {
    if (newSubtask.value === '' || newSubtask.value == subtaskValue) {
      setShowEditInput(false)
    } else {
      const tasksDocumentRef = doc(tasksCollectionRef, currentTask.id)
      console.log(newSubtask)
      updateDoc(tasksDocumentRef, {
        subtasks: arrayRemove(currentSubtask)
        }
      )
      updateDoc(tasksDocumentRef, {
          subtasks: arrayUnion(newSubtask)
        }
      )
      setShowEditInput(false) 
    }
  }

  const renameSubtaskKey = e => {
    if (e.key === 'Escape') {
      /* Hides Edit Input */
      setShowEditInput(false)
    } else if (e.key === 'Enter') {
      if (newSubtask.value === '') {
        setShowEditInput(false)
      } else {
        /* Overwrites the current subtask value */
        setShowEditInput(false)
      }
    }
  }

  const getNewSubtask = e => {
    setNewSubtask({
      id: currentSubtask.id, 
      value: e.target.value, 
      completed: currentSubtask.completed
    })
  }
  
  const clickSubtask = () => { 
    /* Shows the edit input of the subtask */
    setShowEditInput(true)
  } 

  return (
    <div className="flex w-full">
      {showEditInput
      ? <div className="flex justify-between items-center my-4 w-full">
          <Input
            className="mr-2 placeholder:text-md w-full"
            name="Edit Subtask"
            defaultValue={subtaskValue}
            type="text"
            placeholder={subtaskValue}
            onChange={getNewSubtask}
            onKeyDown={renameSubtaskKey}
            required={true}
          />
          <BsCheckSquare
            className="cursor-pointer fill-green-500 hover:fill-green-700 " 
            size={42}
            onClick={renameSubtaskClick} 
          />
        </div>
      
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