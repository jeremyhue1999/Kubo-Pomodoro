import { useState } from 'react'
import TaskForm from './task/task-form'
import TaskCard from './task/task-card'
import Button from "../../../../Components/button"
import Text from '../../../../Components/text'
import Calendar from 'react-calendar/dist/umd/Calendar'

const Swimlanes = () => {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      value: 'Todo Task',
      desc: 'Todo Description',
      completed: false,
      doing: false,
      subtasks: []
      
    },
    {
      id: 2,
      value: 'Doing Task',
      desc: 'Doing Description',
      completed: false,
      doing: false
    },
    {
      id: 21,
      value: 'Doing Task',
      desc: 'Doing Description',
      completed: true,
      doing: false
    },
    {
      id: 31,
      value: 'Completed Task',
      desc: 'Completed Description',
      completed: true,
      doing: false,
      subtasks: []
    }
  ])
  const [description, setDescription] = useState("")
  const [showCreateTask, setShowCreateTask] = useState(false)
  const [showAddTaskButton, setShowAddTaskButton] = useState("block")

  const hideAddTaskButton = () => {
    setShowCreateTask(true)
    setShowAddTaskButton("hidden")
  }
  return (
    <div className='w-max bg-white drop-shadow-md m-6 py-6 px-12'>
      <div className='flex justify-start gap-12'>
        {/* TODO SWIMLANE */}
        <div className='flex items-center flex-col'>
          <Text 
            className='text-slate-900 text-2xl font-semibold mb-6'
            value='Todo'
          />
          {taskList.map((task) => {
            if (task.completed === false && task.doing === false) {
              return <TaskCard 
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
            showCreateTask={showCreateTask}
            setShowCreateTask={setShowCreateTask}
            setShowAddTaskButton={setShowAddTaskButton}
          />
          <Button 
            className={`${showAddTaskButton} my-4 bg-transparent text-slate-600 border border-dashed border-slate-400 border-2`}
            onClick={hideAddTaskButton} 
            value="Add Task"
          />
        </div>
        {/* DONE SWIMLANE */}
        <div className='flex flex-col items-center'>
          <Text 
            className='text-slate-900 text-2xl font-semibold mb-6'
            value='Completed'
          />
          {taskList.map((task) => {
            if (task.completed === true && task.doing === false) {
              return <TaskCard 
                task={task}
                key={task.id}
                taskList={taskList}
                setTaskList={setTaskList}
                setShowAddTaskButton={setShowAddTaskButton}
              />
            }})
          }
        </div>
      </div>
    </div>
  )
}

export default Swimlanes