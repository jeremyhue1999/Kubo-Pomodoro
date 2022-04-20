import { useState, useEffect, useRef } from "react"
import Input from "../../../../../Components/input"
import { VscDiffRemoved } from "react-icons/vsc"
import { AiOutlineEdit } from "react-icons/ai"
import { BsCheckSquare } from "react-icons/bs"


const Subtask = ({ 
  subtask,
  subtaskList,
  setSubtaskList
}) => {

  const [showEditInput, setShowEditInput] = useState(false)
  const [renamedSubtask, setRenamedSubtask] = useState('')
  let { id, value } = subtask

  const deleteSubtask = () => {
    /* Deletes a subtask */
    setSubtaskList(subtaskList.filter((e) => e.id !== id))
  }

  const completeSubtask = () => {
    subtask.completed = true
  }

  const updateSubtask = (subtaskID, newSubtask) => { 
    subtask.id = subtaskID
    subtask.value = newSubtask
    subtask.completed = false
  }

  const renameSubtaskClick = () => {
    /* Same as rename task but for button onClick*/
    if (renamedSubtask === '') {
      setShowEditInput(false)
    } else {
      updateSubtask(id, renamedSubtask)
      setRenamedSubtask('')
      setShowEditInput(false) 
    }
  }

  const renameSubtaskKey = e => {
    if (e.key === 'Escape') {
      /* Hides Edit Input */
      setShowEditInput(false)
    } else if (e.key === 'Enter') {
      if (renamedSubtask === '') {
        setShowEditInput(false)
      } else {
        /* Overwrites the current subtask value */
        updateSubtask(id, renamedSubtask)
        setRenamedSubtask('')
        setShowEditInput(false)
      }
    }
  }

  const getEditInput = e => {
    setRenamedSubtask(e.target.value)
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
            defaultValue={value}
            type="text"
            placeholder={value}
            onChange={getEditInput}
            onKeyDown={renameSubtaskKey}
            required={true}
          />
          <BsCheckSquare
            className="cursor-pointer fill-green-500 hover:fill-green-700 " 
            size={42}
            onClick={renameSubtaskClick} 
          />
        </div>
      
      : <div className="flex justify-between items-center w-full">
          <li 
            className="my-4 text-xl text-white cursor-pointer"
            key={id} 
            onClick={clickSubtask}
          >
          {value}
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
      }
    </div>
  )
}

export default Subtask