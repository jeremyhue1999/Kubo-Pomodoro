import { useEffect, useState } from "react"
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../../firebase-config'
import Subtask from "./subtask"

const SubtaskList = ({ currentTask }) => {
  /* Values */
  const [subtaskList, setSubtaskList] = useState()

  /* References */
  const userDocumentRef = doc(db, "testUsers", "user1")
  const tasksCollectionRef = collection(userDocumentRef, 'testTasks')
  const tasksDocumentRef = doc(tasksCollectionRef, currentTask.id)

  useEffect(() => {
    const getSubtasks = async () => {
      onSnapshot((tasksDocumentRef), (snapshot) => {
        setSubtaskList(snapshot.data().subtasks)
      })
    }
    getSubtasks()
  }, [])

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