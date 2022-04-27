import { useState } from "react"
import Input from "../../../../../Components/input"
import Button from "../../../../../Components/button"
import Text from "../../../../../Components/text"
import SubtaskForm from "../subtask/subtask-form"
import TextArea from "../../../../../Components/textarea"
import { AiOutlineEdit } from "react-icons/ai"
import { BsCheckSquare } from "react-icons/bs"
import { VscCheck } from "react-icons/vsc"
import { collection, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../../../../../firebase-config'

const TodoTaskCard = ({
  task,
  setShowAddTaskButton,
}) => {
	/* UI */
	const [showSubtaskForm, setShowSubtaskForm] = useState(false)
	const [editTask, setEditTask] = useState(false)
  const [editDescription, setEditDescription] = useState(false)
  const [editMode, setEditMode] = useState(false)

	/* Values */
	const [newTask, setNewTask] = useState()
	const [newDescription, setNewDescription] = useState()
  const [taskID, setTaskID] = useState()

	/* Firebase references */
	const userDocumentRef = doc(db, "testUsers", "user1")
  const tasksCollectionRef = collection(userDocumentRef, 'testTasks')
  const tasksDocumentRef = doc(tasksCollectionRef, task.id)

  let cursorType = ""
  if (!showSubtaskForm) {
    cursorType = "pointer"
  } else {
    cursorType = "auto"
  }

  const deleteTask = () => {
    deleteDoc(tasksDocumentRef)
    setEditTask(false)
    showAddTaskButton()
  }

  const renameTaskHandler = e => {
    e.preventDefault()
    if (editTask) {
      if (newTask === "" || newTask === task.value || newTask === undefined) {
        setEditTask(false)
      } else {
        updateDoc(tasksDocumentRef, {value: newTask})
        setEditTask(false)
      }
    } else if (editDescription) {
      if (newDescription === "" || newDescription === task.desc || newDescription === undefined) {
        setEditDescription(false)
      } else {
        updateDoc(tasksDocumentRef, {desc: newDescription})
        setEditDescription(false)
      }
    }
  }

  const escapeKeyHandler = e => {
    if (e.key === 'Escape') {
      if (editTask) {
        setEditTask(false)
      } else if (editDescription) {
        setEditDescription(false)
      }
    }
  }


  const getNewTask = e => {
    setNewTask(e.target.value)
  }

	const getNewDescription = e => {
    setNewDescription(e.target.value)
  }

  const resetID = () => {
    showAddTaskButton()
    setTaskID("")
  }

  const hideAddTaskButton = () => {
    setShowSubtaskForm(true)
    setShowAddTaskButton("hidden")
    setEditMode(true)
    setTaskID(task.id)
  }

  const showAddTaskButton = () => {
    setShowSubtaskForm(false)
    setShowAddTaskButton("block")
    setEditMode(false)
    setEditTask(false)
    setEditDescription(false)
  }

  const showEditTaskInput = () => {
    setEditTask(true)
    setEditDescription(false)
  }

  const showEditDescriptionInput = () => {
    setEditTask(false)
    setEditDescription(true)
  }

  return (
    <div className="flex flex-col w-96 h-auto bg-slate-800 w-full px-4 py-2 mb-4 rounded">
      <div
        className={`cursor-${cursorType} flex flex-col gap-2 peer`}
        onClick={hideAddTaskButton}
      >
        {editTask 
				?	<form className="flex justify-between items-center" onSubmit={renameTaskHandler}>
            <Input
              className="my-1 placeholder:text-lg w-full"
              name="Edit Task"
              defaultValue={task.value}
              type="text"
              placeholder={task.value}
              onChange={getNewTask}
              onKeyDown={escapeKeyHandler}
              required={true}
            />
            <BsCheckSquare
              className="cursor-pointer fill-green-500 hover:fill-green-700 ml-2"
              size={42}
              onClick={renameTaskHandler}
            />
          </form>
        : <div>
            {editMode 
						? <div className="flex items-center w-full break-all">
                <Text
                  className="text-white text-xl w-full"
                  value={task.value}
                  onClick={showEditTaskInput}
                />
                <AiOutlineEdit
                  className="ml-2 cursor-pointer place-self-start fill-white hover:fill-gray-300"
                  size={34}
                  onClick={showEditTaskInput}
                />
              </div>
            :	<Text className="text-white text-xl" value={task.value} />}
          </div>
        }
        {editDescription 
				?	<div>
            <TextArea
              className="my-1 h-28 w-full"
              name="Edit Short Description"
              defaultValue={task.desc}
              type="text"
              placeholder={task.desc}
              onChange={getNewDescription}
              onKeyDown={escapeKeyHandler}
              required={true}
            />
            <Button
              className="cursor-pointer flex justify-center bg-slate-800 border-2 border-green-500 hover:border-green-700 rounded w-full"
              onClick={renameTaskHandler}
            >
							<VscCheck
								className="fill-green-500 hover:fill-green-700 py-1"
								size={32}
							/>
						</Button>
          </div>
        :	<div>
            {editMode
						? <div className="flex w-full  break-all">
                <Text
                  className="w-full text-white text-md"
                  value={task.desc}
                  onClick={showEditDescriptionInput}
                />
                <AiOutlineEdit
                  className="ml-2 cursor-pointer place-self-start fill-white hover:fill-gray-300"
                  size={34}
                  onClick={showEditDescriptionInput}
                />
              </div>
            :	<Text className="text-white text-md truncate" value={task.desc} />
            }
          </div>
        }
      </div>
      <SubtaskForm
        showSubtaskForm={showSubtaskForm}
        onClose={resetID}
        taskID={taskID}
      />
      {editMode && 
        <Button className="mt-4 mb-2 rounded bg-slate-100 hover:bg-red-600">
          <Text
            className="text-slate-900 hover:text-slate-800 text-lg font-bold"
            value="DELETE TASK"
            onClick={deleteTask}
          />
        </Button>
      }
    </div>
  )
}

export default TodoTaskCard