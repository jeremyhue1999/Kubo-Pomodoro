import { useEffect, useState } from 'react'
import Text from '../../../../Components/text'
import DoingSubtask from './doing-subtask'
import { BsStopFill, BsPlayFill, BsPauseFill, BsSkipEndFill } from 'react-icons/bs'

const Doing = ({ 
  taskList,
  setTaskList,
  setShowAddTaskButton,
}) => {
  const [playIcon, setPlayIcon] = useState(true)
  const [value, setValue] = useState('')
  const [desc, setDesc] = useState('')
  const [subtasks, setSubtasks] = useState([])

  const doingTask = taskList.find((e) => e.doing == true && e.completed == false)
  useEffect(() => {
    if (doingTask == null) {
      setValue('N/A')
      setDesc('N/A')
    } else {
      setValue(doingTask.value)
      setDesc(doingTask.desc)
      setSubtasks(doingTask.subtasks)
    }
  }, doingTask)

  return (
    <div className='w-full h-max bg-slate-800 drop-shadow-lg m-6 ml-0 py-6 px-12 rounded'>
      <div className='flex justify-between items-center mb-12'>
        <Text
          className='text-white text-center text-2xl font-semibold' 
          value='In progress'
        />
        <div className='flex items-center'>
          <BsStopFill
            className='cursor-pointer fill-slate-100' 
            size={42}
          />
          {playIcon 
          ? <BsPlayFill
              className='cursor-pointer fill-slate-100'
              size={42}
              onClick={() => setPlayIcon(false)}
            />
          : <BsPauseFill
              className='cursor-pointer fill-slate-100' 
              size={42}
              onClick={() => setPlayIcon(true)}
            />
          }
          <BsSkipEndFill
            className='cursor-pointer fill-slate-100' 
            size={42}
          />
        </div>
        <Text
            className='text-white text-3xl ml-4' 
            value='30:00'
          />
      </div>
      <Text
        className='text-white text-3xl font-semibold' 
        value={value}
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
          return <DoingSubtask
            key={e.id} 
            value={e.value}
          />
        })}
      </div>
    </div>
  )
}

export default Doing