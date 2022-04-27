import { useEffect, useState } from "react"
import { doc, onSnapshot } from 'firebase/firestore'
import { tasksColRef } from '../../../../../firebase-db'
import Subtask from "./subtask"

const SubtaskList = ({ taskID }) => {

  const [subtaskList, setSubtaskList] = useState()

  const tasksDocumentRef = doc(tasksColRef, taskID)

  useEffect(() => {
    const getSubtasks = async () => {
      onSnapshot((tasksDocumentRef), (snapshot) => {
        setSubtaskList(snapshot.data().subtasks)
      })
    }
    getSubtasks()
  }, [])

  if (taskID == null || subtaskList == null) {
    return null
  } else {
    return (
      <ul>
        {subtaskList.map((subtask) => {
          return <Subtask 
            subtask={subtask}
            key={subtask.id}
            taskID={taskID}
          />
        })}
      </ul>
    )
  }
}

export default SubtaskList