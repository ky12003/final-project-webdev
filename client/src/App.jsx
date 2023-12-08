/*------
GENERAL IMPORTS
--------*/
import { useState, useEffect } from 'react'

/*------
LOCAL COMPONENT IMPORTS
--------*/
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Planner from './components/Planner'

/*------
EXTERNAL COMPONENT IMPORTS
--------*/
import { Routes, Route } from 'react-router-dom'

/*------
MISC IMPORTS
--------*/
import './App.css'
import * as classes from './scripts/classes.js'


function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/").then(
      response => response.json
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])



  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/Planner' element={<Planner/>}/>
      </Routes>
    </>
  )
}

export default App
