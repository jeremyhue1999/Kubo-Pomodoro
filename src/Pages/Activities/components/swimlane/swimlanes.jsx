import { useState } from 'react'
import TaskForm from './task/task-form'
import TaskCard from './task/task-card'
import Button from "../../../../Components/button"
import Text from '../../../../Components/text'
import Topbar from '../../components/bar/topbar'

const Swimlanes = () => {
  const [task, setTask] = useState("")
  
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      value: 'Todo Task',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quibusdam reprehenderit quas impedit ipsa culpa atque aperiam quae, cumque quidem aliquam repellendus officiis, ab maiores, illum perferendis ratione iste laborum?',
      completed: false,
      doing: false,
      
    },
    {
      id: 231,
      value: 'Task Test',
      desc: 'Description Test',
      completed: false,
      doing: false,
      subtasks: []
    },
    {
      id: 31,
      value: 'Completed Task',
      desc: 'Completed Description',
      completed: true,
      doing: false,
      subtasks: []
    },
  ])
  const [description, setDescription] = useState("")
  const [showCreateTask, setShowCreateTask] = useState(false)
  const [showAddTaskButton, setShowAddTaskButton] = useState("block")

  const hideAddTaskButton = () => {
    setShowCreateTask(true)
    setShowAddTaskButton("hidden")
  }

  return (
    <div className='w-full'>
      <Topbar />
      <div className='flex justify-start gap-10 ml-10'>
        {/* TODO SWIMLANE */}
        <div className='flex items-center flex-col w-96'>
          <Text 
            className='text-slate-900 text-2xl font-semibold mb-6'
            value='Tasks'
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
        <div className='flex flex-col items-center w-64'>
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