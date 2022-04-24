import { useState, useEffect } from "react"
import Button from "../../../../../Components/button"
import Input from "../../../../../Components/input"
import SubtaskList from "./subtask-list"
import { VscAdd } from "react-icons/vsc"
import { collection, doc, arrayUnion, updateDoc } from 'firebase/firestore'
import { db } from '../../../../../firebase-config'
import { v4 as uuidv4 } from 'uuid'

const SubtaskForm = ({ taskList, taskID }) => {
  /* Values */
  const [subtask, setSubtask] = useState({
    id: '', 
    value: '', 
    completed: false
  })

  /* References */
  const userDocumentRef = doc(db, "testUsers", "user1")
  const tasksCollectionRef = collection(userDocumentRef, 'testTasks')
  const currentTask = taskList.find((e) => e.id === taskID)
  
  const getSubtask = e => {
    setSubtask({
      id: uuidv4(), 
      value: e.target.value, 
      completed: false
    })
  }
  
  const submitHandler = (e, taskID, subtask) => {
    e.preventDefault()
    if (subtask.value === '') {
      console.log("No Input")
    } else {
      const tasksDocumentRef = doc(tasksCollectionRef, taskID)
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

  return (
    <div className="w-full">
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
          onClick={(e) => {submitHandler(e, taskID, subtask)}}
        >
          <VscAdd
            className="fill-white py-1" 
            size={32}
          />
        </Button>
      </form>
      <SubtaskList
        currentTask={currentTask}
      />
    </div>
  )
}

export default SubtaskForm