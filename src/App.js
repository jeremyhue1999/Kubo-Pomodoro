import React from 'react'
import Login from './Pages/Login/components/Login'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ActivitiesPage from './Pages/Activities/activities-page'

export default function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/activities" element={<ActivitiesPage />} />
    </Routes>
  )
}
