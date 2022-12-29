import React from 'react'
import Login from './Pages/Auth/Login/index.js'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/home/index.js'
import SignUp from './Pages/Auth/Signup/index.js'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
    </Routes>
  )
}

export default App
