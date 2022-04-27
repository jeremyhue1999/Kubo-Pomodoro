import { useEffect, useState } from "react"
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../../firebase-config'
import Subtask from "./subtask"

const SubtaskList = ({ taskID }) => {

  const [subtaskList, setSubtaskList] = useState()

  const userDocumentRef = doc(db, "testUsers", "user1")
  const tasksCollectionRef = collection(userDocumentRef, 'testTasks')
  const tasksDocumentRef = doc(tasksCollectionRef, taskID)

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