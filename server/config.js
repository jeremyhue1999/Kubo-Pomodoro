const admin = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyDeZgNaeB-P7_3Ccquy3QdHRomL50Pz5js",
  authDomain: "my-pomodoro-ec34e.firebaseapp.com",
  projectId: "my-pomodoro-ec34e",
  storageBucket: "my-pomodoro-ec34e.appspot.com",
  messagingSenderId: "305420615636",
  appId: "1:305420615636:web:37dda99ac0b033da1ee041"
};

admin.initializeApp(firebaseConfig)
const db = firebase.firestore()
const Tasks = db.collection("Tasks")
module.exports = Tasks

