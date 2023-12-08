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

  

  // app.post('/generate-plan', (req, res) => {
  //     const major = req.body.major;
  //     if (!major || !majorsData[major]) {
  //         return res.status(400).send("Invalid or missing major");
  //     }

  //     let plan = {1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []};
  //     const majorData = majorsData[major];

  //     classes.addLowerDivisionCourses(majorData, plan);
  //     classes.addUpperDivisionCourses(majorData, plan);
  //     classes.addBreadthCourses(majorData, majorData.breadth_courses, plan);
  //     classes.fillWithElectives(plan);

  //     res.json({ message: "Plan generated for " + major, plan: plan });
  // });

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
