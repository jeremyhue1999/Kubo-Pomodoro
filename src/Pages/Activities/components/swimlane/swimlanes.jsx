import { useEffect, useState } from 'react'
import TaskForm from './task/task-form'
import TodoTaskCard from './task/todo-task-card'
import CompletedTaskCard from './task/completed-task-card'
import Button from "../../../../Components/button"
import Text from '../../../../Components/text'
import Doing from '../doing/doing'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../../../firebase-config'

const Swimlanes = () => {
  const userCollectionRef = collection (db, "Tasks") 

  const addTaskObject = async () => {
    await taskList.forEach((e) => {
      addDoc(userCollectionRef, e)
    })
  }

  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      value: 'todo',
      desc: 'desc.',
      completed: false,
      doing: false,
      subtasks: [
        {
          id: 21312,
          value: 'subtask', 
          completed: false
        },
      ]
    },
    {
      id: 2,
      value: 'Doing Task 1',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et odit iste cupiditate commodi',
      completed: false,
      doing: true,
      subtasks: [
        { 
          id: 213192,
          value: 'subtask 1', 
          completed: false
        },
        {
          id: 9870,
          value: 'subtask 2', 
          completed: false
        },
      ]
    },
    {
      id: 31,
      value: 'Completed Task',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et odit iste cupiditate commodi',
      completed: true,
      doing: false,
      subtasks: [
        { 
          id: 220,
          value: 'subtask 3', 
          completed: false
        },
        {
          id: 320,
          value: 'subtask 4', 
          completed: false
        },
      ]
    }
  ])
  
  const [test, setTest] = useState([])
  console.log(test)

  useEffect(() => {
    if (test.length === 0) {
      localStorage.setItem('tasks', JSON.stringify(taskList))
      setTest(JSON.parse(localStorage.getItem('tasks')))
    }
  }, [test, taskList])

  const [description, setDescription] = useState("")
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [showAddTaskButton, setShowAddTaskButton] = useState("block")

  const hideAddTaskButton = () => {
    setShowTaskForm(true)
    setShowAddTaskButton("hidden")
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