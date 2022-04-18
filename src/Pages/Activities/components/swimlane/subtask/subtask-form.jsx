import { useState } from "react"
import Button from "../../../../../Components/button"
import Input from "../../../../../Components/input"
import SubtaskList from "./subtask-list"
import { VscAdd } from "react-icons/vsc"
import { useEffect } from "react"

const SubtaskForm = ({ taskList, taskID }) => {
  const [subtask, setSubtask] = useState({
    id: Math.random() * 10000, 
    value: '', 
    completed: false
  })
  const currentTask = taskList.find((e) => e.id == taskID)
  const [subtaskList, setSubtaskList] = useState()

  useEffect(() => {
    if (subtaskList == null) {
      return subtaskList
    } else {
      currentTask.subtasks = subtaskList
    }
  })

  useEffect(() => {
    if (currentTask == null) {
      return currentTask
    } else {
      setSubtaskList(currentTask.subtasks)
    }
  })
  
  const changeHandler = e => {
    /* Adds a Subtask */
    setSubtask({
      id: Math.random() * 10000, 
      value: e.target.value, 
      completed: false
    })
  }

  const submitHandler = e => {
    /* Adds a Subtask Object on subtaskList */
    e.preventDefault()
    if (subtask.value === '') {
      console.log("No Input")
    } else {
      currentTask.subtasks.push(subtask)
      setSubtask({
        id: subtask.id,
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
          onChange={changeHandler}
          required={true}
        />
        <Button 
          className="cursor-pointer flex justify-center bg-slate-500 hover:bg-slate-600 rounded mt-1" 
          onClick={submitHandler}
          value=
          {<VscAdd
            className="fill-white py-1" 
            size={32}
          />}
        >
        </Button>
      </form>
      <SubtaskList
        currentTask={currentTask}
        subtaskList={subtaskList}
        setSubtaskList={setSubtaskList}
      />
    </div>
  )
}

export default SubtaskForm