import React from 'react'
import Login from './Pages/Auth/Login/index.js'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/home/index.js'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
    </Routes>
  )
}

export default App
