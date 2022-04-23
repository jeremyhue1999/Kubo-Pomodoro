import { useEffect, useState } from 'react'
import { collection, addDoc, getDoc, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from '../../../../firebase-config'
import Button from "../../../../Components/button"
import Text from '../../../../Components/text'
import Doing from '../doing/doing'
import TaskForm from './task/task-form'
import TodoTaskCard from './task/todo-task-card'
import CompletedTaskCard from './task/completed-task-card'

const Swimlanes = () => {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])
  const [description, setDescription] = useState("")
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [showAddTaskButton, setShowAddTaskButton] = useState("block")
  const [showSaveButton, setShowSaveButton] = useState(false)
  const [taskDocumentID, setTaskDocumentID] = useState()
  const userCollectionRef = collection(db, "tasks")

  /* const docRef = doc(db, "tasks", "uF7zGOVef1jk1LOPQXFY")
  const docSnap = await getDoc(docRef);
  console.log(docSnap.data())
  console.log(taskList) */
  
  /* console.log(taskDocumentID) */
  
  /* const d_id = documentId(db)
  console.log(d_id) */

  /* useEffect(() => {
    if (taskList.length === 0) {
      setTaskList(JSON.parse(localStorage.getItem('tasks')))
    }
  }, [taskList]) */

  /* useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(docRef)
      console.log(data)
    }
    getUsers()
  }, []) */

  const addTaskObject = async () => {
    addDoc(userCollectionRef, taskList)
    /* taskList.forEach((e) => {
      addDoc(documentRef, e)
    })
    localStorage.setItem('tasks', JSON.stringify(taskList))
    setTaskList(JSON.parse(localStorage.getItem('tasks')))*/
  } 

  const hideAddTaskButton = () => {
    setShowTaskForm(true)
    setShowAddTaskButton("hidden")
    setShowSaveButton(true)
  }
  
  return (
    <div className='flex'>
      <Button
					value='Test'
					onClick={addTaskObject}
				/>
      <div className='w-max bg-white border border-gray-200 drop-shadow-lg m-6 py-6 px-12 rounded'>
        <div className='flex justify-start gap-12'>
          {/* TODO SWIMLANE */}
          <div className='flex items-center flex-col w-96'>
            <Text 
              className='text-slate-900 text-2xl font-semibold mb-6'
              value='Todo'
            />
            {taskList.map((task) => {
              if (task.completed === false && task.doing === false) {
                return <TodoTaskCard
                  containerStyle='bg-slate-800'
                  textStyle='text-white'
                  task={task}
                  key={task.id}
                  taskList={taskList}
                  setTaskList={setTaskList}
                  showSaveButton={showSaveButton}
                  setShowSaveButton={setShowSaveButton}
                  addTaskObject={addTaskObject}
                  setShowAddTaskButton={setShowAddTaskButton}
                />
              }})
            }
            <TaskForm 
              task={task}
              setTask={setTask}
              taskList={taskList}
              setTaskList={setTaskList}
              description={description}
              setDescription={setDescription}
              showTaskForm={showTaskForm}
              setShowTaskForm={setShowTaskForm}
              setShowAddTaskButton={setShowAddTaskButton}
            />
            <Button 
              className={`${showAddTaskButton} my-4 bg-transparent text-slate-600 border border-dashed border-slate-400 border-2`}
              onClick={hideAddTaskButton} 
              value="Add Task"
            />
          </div>
          {/* DONE SWIMLANE */}
          <div className='flex flex-col items-center w-96'>
            <Text 
              className='text-slate-900 text-2xl font-semibold mb-6'
              value='Completed'
            />
            {taskList.map((task) => {
              if (task.completed === true && task.doing === false) {
                return <CompletedTaskCard
                  containerStyle='bg-slate-800'
                  textStyle='text-white'
                  task={task}
                  key={task.id}
                  subtaskList={task.subtasks}
                  setTaskList={setTaskList}
                  setShowAddTaskButton={setShowAddTaskButton}
                />
              }})
            }
          </div>
        </div>
      </div>
      <Doing 
        taskList={taskList}
        setTaskList={setTaskList}
        setShowAddTaskButton={setShowAddTaskButton}
      />
    </div>
  )
}

export default Swimlanes