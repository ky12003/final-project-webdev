import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <LoginPage/>
    </>
  )
}

export default App
