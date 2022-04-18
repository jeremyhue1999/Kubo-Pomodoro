import { useEffect, useState } from "react"
import Input from "../../../../../Components/input"
import Button from "../../../../../Components/button"
import Text from "../../../../../Components/text"
import CreateSubtasks from "../subtask/create-subtasks"
import TextArea from "../../../../../Components/textarea"
import { AiOutlineEdit } from "react-icons/ai"
import { BsCheckSquare } from "react-icons/bs"
import { VscCheck } from "react-icons/vsc"

const TaskCard = ({ 
	task,
	taskList,
	setTaskList,
	setShowAddTaskButton }) => {

	const [editMode, setEditMode] = useState(false) /* Used to check if task card is clicked */
	const [editTask, setEditTask] = useState(false) /* Used to check if task is clicked */
	const [editDescription, setEditDescription] = useState(false) /* Used to check if description is clicked */
	const [showCreateSubtasks, setShowCreateSubtasks] = useState(false) /*  */
	const [renamedTask, setRenamedTask] = useState({
    id: null,
    value: '',
		desc: '',
    completed: false,
		doing: false
  })
	const [taskID, setTaskID] = useState(0)

	let cursorType = ""
	if (!showCreateSubtasks) {
		cursorType = "pointer"
	} else {
		cursorType = "auto"
	}

	const resetID = () => {
		showAddTaskButton() 
		setTaskID('')
	}

	const hideAddTaskButton = () => {
		setShowCreateSubtasks(true)
		setShowAddTaskButton("hidden")
		setEditMode(true)
		setTaskID(task.id)
	}

	const showAddTaskButton = () => {
		setShowCreateSubtasks(false)
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

	const renameTaskFunction = e => {
		if (editTask) {
			if (e.key === 'Escape') {
				setEditTask(false)
			} else if (e.key === 'Enter') {
				if (renamedTask.value === '') {
					setEditTask(false)
				} else {
					updateTask(task.id, renamedTask)
					setRenamedTask({
						id: null,
						value: '',
						desc: '',
						completed: false,
						doing: false
					})
					setEditTask(false)
				}
			}
		} else if (editDescription) {
			if (e.key === 'Escape') {
				setEditDescription(false)
			} 
		}
	}

	const renameTaskFunctionClick = () => {
		if (editTask) {
			if (renamedTask.value === '') {
				setEditTask(false)
			} else {
				updateTask(task.id, renamedTask)
				setRenamedTask({
					id: null,
					value: '',
					desc: '',
					completed: false,
      		doing: false
				})
				setEditTask(false)
			}
		} else if (editDescription) {
			if (renamedTask.desc === '') {
				setEditDescription(false)
			} else {
				updateTask(task.id, renamedTask)
				setRenamedTask({
					id: null,
					value: '',
					desc: '',
					completed: false,
      		doing: false
				})
				setEditDescription(false)
			}
		}
	}

	const getRenamedTask = e => {
		setRenamedTask({
      id: task.id,
      value: e.target.value,
			desc: task.desc,
      completed: false,
			doing: false
			
    })
	}
	
	const getRenamedDescription = e => {
		setRenamedTask({
      id: task.id,
      value: task.value,
			desc: e.target.value,
      completed: false,
			doing: false
    })
	}
	
	const updateTask = (taskID, newTask) => { 
    /* Checks if element.id is equal to subtask.id then get renamedSubtask*/
    setTaskList(taskList => taskList.map(element => 
      (element.id === taskID ? newTask : element)))
	}

	return (
		<div className="flex flex-col w-96 h-auto bg-slate-700 w-full px-4 py-2 mb-4 rounded">
			<div className={`cursor-${cursorType}`} onClick={hideAddTaskButton}>
				<div className="flex flex-col gap-2">
						{editTask 
						? <div className="flex justify-between items-center">
								<Input
									className="my-1 placeholder:text-lg w-full"
									name="Edit Task"
									defaultValue={task.value}
									type="text"
									placeholder={task.value}
									onChange={getRenamedTask}
									onKeyDown={renameTaskFunction}
									required={true}
								/>
								<BsCheckSquare
									className="cursor-pointer fill-green-500 hover:fill-green-700 ml-2" 
									size={42}
									onClick={renameTaskFunctionClick}
								/>
							</div> 
						: <div>
								{editMode 
								? <div className="flex items-center w-full text-slate-100 text-xl break-all">
										<Text
											className="w-full"
											value={task.value}
											onClick={showEditTaskInput}
										/>
										<AiOutlineEdit
											className="ml-2 cursor-pointer place-self-start fill-slate-50 hover:fill-slate-400 " 
											size={42}
											onClick={showEditTaskInput} 
										/>
									</div> 
								: <Text
										className="text-slate-100 text-xl" 
										value={task.value}
									/>
								}
							</div>
						}
						{editDescription 
						? <div>
								<TextArea
									className="my-1 h-28 w-full"
									name="Edit Short Description"
									defaultValue={task.desc}
									type="text"
									placeholder={task.desc}
									onChange={getRenamedDescription}
									onKeyDown={renameTaskFunction}
									required={true}
								/>
								<Button 
									className="cursor-pointer flex justify-center bg-slate-500 hover:bg-slate-600 rounded w-full"
									onClick={renameTaskFunctionClick}
									value=
									{<VscCheck 
											className="fill-white py-1" 
											size={32}
									/>}
								>
								</Button>
							</div>
						: <div>
								{editMode 
								? <div className="flex w-full text-slate-100 text-xl break-all">
										<Text
											className="w-full"
											value={task.desc}
											onClick={showEditDescriptionInput}
										/>
										<AiOutlineEdit
											className="ml-2 cursor-pointer place-self-start fill-slate-50 hover:fill-slate-400" 
											size={42}
											onClick={showEditDescriptionInput} 
										/>
									</div> 
								: <div className="text-slate-100 text-xl">
										<Text
											className="truncate"
											value={task.desc}
										/>
									</div>	
								}
							</div>
						}
				</div>
			</div>
			<CreateSubtasks 
				task={task}
				taskList={taskList}
				showCreateSubtasks={showCreateSubtasks}
				onClose={resetID}
				taskID={taskID}
			/>
		</div>
	)
}

export default TaskCard