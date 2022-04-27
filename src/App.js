import React from 'react'
import Login from './Pages/Login/components/Login'
import { Route, Routes} from "react-router-dom";
import ActivitiesPage from './Pages/Activities/activities-page';
import WelcomeScreen from './Pages/Login/components/WelcomeScreen';

export default function App() {
  return (
    <Routes>
      <Route exact path="/welcome" element={<WelcomeScreen />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/activities" element={<ActivitiesPage />} />
    </Routes>
  )
}
