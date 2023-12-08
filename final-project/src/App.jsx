/*------
GENERAL IMPORTS
--------*/
import { useState } from 'react'

/*------
LOCAL COMPONENT IMPORTS
--------*/
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
// import LandingPage from './components/LandingPage'
// import LoginPage from './components/LoginPage'

/*------
EXTERNAL COMPONENT IMPORTS
--------*/
import { Routes, Route } from 'react-router-dom'

/*------
MISC IMPORTS
--------*/
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/Planner' element={<Planner/>}/>
      </Routes> */}
    </>
  )
}

export default App
