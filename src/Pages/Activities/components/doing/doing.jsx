import { useState } from 'react'
import Text from '../../../../Components/text'
import TaskCard from '../swimlane/task/task-card'

const Doing = ({ 
  taskList,
  setTaskList,
  setShowAddTaskButton,
}) => {

  const doingTask = taskList.find((e) => e.doing == true && e.completed == false)
  const { value: taskValue, desc, subtasks } = doingTask

  return (
    <div className='w-full h-max bg-slate-700 drop-shadow-md m-6 ml-0 py-6 px-12 rounded'>
      <Text
        className='text-white text-center text-2xl font-semibold mb-6' 
        value='In progress'
      />
      <Text
        className='text-white text-3xl font-semibold' 
        value={taskValue}
      />
      <Text
        className='text-white text-lg break-all' 
        value={desc}
      />
      <div className='mt-4'>
        <Text
          className='text-white text-2xl' 
          value='Subtasks'
        />
        {subtasks.map((e) => {
          return <Text
            className='text-white text-lg my-4'
            key={e.id} 
            value={e.value}
          />
        })}
      </div>
      
      
    </div>
  )
}

export default Doing