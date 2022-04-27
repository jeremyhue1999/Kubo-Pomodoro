import { db } from './firebase-config'
import { collection, doc } from 'firebase/firestore'

export const usersDocRef = doc(db, "testUsers", "user_1")
export const tasksColRef = collection(usersDocRef, 'tasks')