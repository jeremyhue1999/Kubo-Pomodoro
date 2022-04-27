import { useState } from "react"
import Input from "../../../../../Components/input"
import TextArea from "../../../../../Components/textarea"
import Text from "../../../../../Components/text"
import Button from "../../../../../Components/button"
import { setDoc, doc } from 'firebase/firestore'
import { tasksColRef } from '../../../../../firebase-db'

const TaskForm = ({
  taskList,
  showTaskForm,
  setShowTaskForm,
  setShowAddTaskButton,
}) => {
  /* Values */
  const [task, setTask] = useState("") 
  const [description, setDescription] = useState("")

  /* References */
  const tasksDocumentRef = doc(tasksColRef)

  if (!showTaskForm) {
    return null
  }

  const getTaskValue = e => {
    setTask(e.target.value)
  }

  const getDescriptionValue = e => {
    setDescription(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault()
    if (task.length === 0 || description.length === 0) {
      console.log("No input")
    } else {
      const highest = Math.max(...taskList.map(e => e.order), 0)
      setDoc(tasksDocumentRef, {
        order: highest + 1,
        value: task, 
        desc: description, 
        completed: false,
        doing: false,
        subtasks: []
      })
      setTask('')
      setDescription('')
      setShowTaskForm(false)
      setShowAddTaskButton("block")
    }
  }
  
  const showAddTaskButton = () => {
    setShowTaskForm(false)
    setShowAddTaskButton("block")
  }

  return (
    <div className="flex flex-col w-96 bg-slate-800 px-3 py-2 mb-4 rounded">
      <form className="flex flex-col content-center w-full">
        <Input 
          className="my-1 placeholder:text-lg"
          value={task}
          name="Task" 
          type="text" 
          placeholder="Task Name"
          onChange={getTaskValue}
          required={true}
        />
        <TextArea 
          className="my-1 h-28"
          defaultValue={description}
          name="Description" 
          placeholder="Description" 
          onChange={getDescriptionValue}
        />
        <Button className="my-1 bg-red-500 text-white rounded" onClick={showAddTaskButton}>
          <Text value="CANCEL"/>
        </Button>
        <Button className="my-1 bg-green-500 text-white rounded" onClick={submitHandler}>
          <Text value="SAVE"/>
        </Button>
      </form>
    </div>
  )
}

export default TaskForm