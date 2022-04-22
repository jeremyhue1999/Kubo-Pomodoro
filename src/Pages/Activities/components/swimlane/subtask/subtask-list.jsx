import Subtask from "./subtask"

const SubtaskList = ({
  currentTask,
  subtaskList,
  setSubtaskList
}) => {

  if (currentTask == null || subtaskList == null) {
    return null
  } else {
    return (
      <ul>
        {subtaskList.map((subtask) => {
          return <Subtask 
            subtask={subtask}
            key={subtask.id}
            currentTask={currentTask}
            subtaskList={subtaskList}
            setSubtaskList={setSubtaskList}
            />
        })}
      </ul>
    )
  }
}

export default SubtaskList