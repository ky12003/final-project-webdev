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
// import * as classes from './scripts/classes.js'


function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/generate-plan").then(
      data => {
        setBackendData(data)
      },console.log("DONE")
    )
  }, [])

  console.log(backendData)

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
