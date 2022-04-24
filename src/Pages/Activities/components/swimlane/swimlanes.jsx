import { useEffect, useState } from 'react'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../firebase-config'
import Button from "../../../../Components/button"
import Text from '../../../../Components/text'
import Doing from '../doing/doing'
import TaskForm from './task/task-form'
import TodoTaskCard from './task/todo-task-card'
import CompletedTaskCard from './task/completed-task-card'

const Swimlanes = () => {
  const [taskList, setTaskList] = useState([])  
  const [description, setDescription] = useState("")
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [showAddTaskButton, setShowAddTaskButton] = useState("block")
  const [showSaveButton, setShowSaveButton] = useState(false)
  const userDocumentRef = doc(db, "testUsers", "user1")
  const tasksCollectionRef = collection(userDocumentRef, 'testTasks')

  /*
    localStorage.setItem('tasks', JSON.stringify(taskList))
    setTaskList(JSON.parse(localStorage.getItem('tasks')))
  */

  useEffect(() => {
    const getTasks = async () => {
      onSnapshot(collection(userDocumentRef, 'testTasks'), (snapshot) => {
        setTaskList(snapshot.docs.map((e) => ({...e.data(), id: e.id})))
      })
    }
    getTasks()
  }, [])

  const hideAddTaskButton = () => {
    setShowTaskForm(true)
    setShowAddTaskButton("hidden")
    setShowSaveButton(true)
  }
  
  return (
    <div className='flex'>
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
                  setShowAddTaskButton={setShowAddTaskButton}
                />
              }})
            }
            <TaskForm 
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
            >
              <Text
                value='Add Task'
              />
            </Button>
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