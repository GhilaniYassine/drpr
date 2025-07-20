import  './App.css' 
import { Routes,Route } from 'react-router'
import { useState } from 'react'
import Home from './components/Home'
import Edit from './components/Edit'
import Create from './components/Create'
import Delete from './components/Delete'

function App() {
return(
  <>
  <Routes>
    <Route path=""  element= {<Home/>}/>
    <Route path="/create"  element= {<Create/>}/>
    <Route path="/edit/:id"  element= {<Edit/>}/>
    <Route path="/delete/:id"  element= {<Delete/>}/>
    </Routes>

  </>
)
}

export default App
