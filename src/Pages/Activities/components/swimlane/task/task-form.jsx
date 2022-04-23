import Input from "../../../../../Components/input"
import TextArea from "../../../../../Components/textarea"
import Button from "../../../../../Components/button"
import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from '../../../../../firebase-config'


const TaskForm = ({
  task,
  setTask,
  taskList,
  setTaskList,
  description,
  setDescription,
  showTaskForm,
  setShowTaskForm,
  setShowAddTaskButton,
}) => {
  const userCollectionRef = collection(db, "tasks")

  if (!showTaskForm) {
    return null
  }

  const showAddTaskButton = () => {
    setShowTaskForm(false)
    setShowAddTaskButton("block")
  }

  const changeHandlerTask = e => {
    /* Adds a Task */
    setTask(e.target.value)
  }

  const changeHandlerDescription = e => {
    /* Adds a Description */
    setDescription(e.target.value)
  }

  const submitHandler = e => {
    /* Adds a Task Object on taskList */
    e.preventDefault()
    if (task.length === 0 || description.length === 0) {
      console.log("No input")
    } else {
      addDoc(userCollectionRef, {
        id: Math.random() * 10000, 
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

  return (
    <div className="flex flex-col w-96 bg-slate-800 px-3 py-2 mb-4 rounded">
      <form className="flex flex-col content-center w-full">
        <Input 
          className="my-1 placeholder:text-lg"
          value={task}
          name="Task" 
          type="text" 
          placeholder="Task Name"
          onChange={changeHandlerTask}
          required={true}
        />
        <TextArea 
          className="my-1 h-28"
          defaultValue={description}
          name="Description" 
          placeholder="Description" 
          onChange={changeHandlerDescription}
        />
        <Button
          className="my-1 bg-red-500 text-white rounded"
          onClick={showAddTaskButton}
          value="CANCEL"
        />
        <Button
          className="my-1 bg-green-500 text-white rounded"
          onClick={submitHandler}
          value="SAVE"
        />
      </form>
    </div>
  )
}

export default TaskForm