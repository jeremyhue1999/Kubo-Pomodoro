import { useState } from "react"
import Text from "../../../../../Components/text"

const CompletedTaskCard = ({
  task,
	subtaskList,
}) => {
  const [showSubtasks, setShowSubtasks] = useState(false)
  const toggleShowSubtasks = () => {
    if (showSubtasks) {
      setShowSubtasks(false)
    } else {
      setShowSubtasks(true)
    }
  }

  return (
    <div className="flex flex-col w-96 h-auto bg-slate-800 w-full px-4 py-2 mb-4 rounded">
			<div className='cursor-pointer' onClick={toggleShowSubtasks}>
				<div className="flex flex-col gap-2">
          <Text
            className="text-white text-xl" 
            value={task.value}
          />
          {showSubtasks 
          ? <Text
              className="text-white text-xl break-all"
              value={task.desc}
            />
          : <Text
              className="text-white text-xl truncate"
              value={task.desc}
            />
          }
          {showSubtasks && 
            <div className="mt-2">
              <Text
                className="text-white text-xl"
                value='Subtasks'
              />
              {subtaskList.map((e) => {
                return <Text
                  className="text-white text-lg my-2"
                  key={e.id} 
                  value={e.value}
                />
              })}
            </div>
          }
				</div>
			</div>
    </div>
  )
}

export default CompletedTaskCard