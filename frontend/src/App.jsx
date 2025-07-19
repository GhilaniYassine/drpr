import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Edit from './components/Edit'
import Create from './components/Create'
import Delete from './components/Delete'

function App() {
  return (
    <Router>
      <div>
        <h1>App is working!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
