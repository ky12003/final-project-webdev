import React from 'react'

import '../App.css'
import bearIcon from '../assets/images/bear-icon.svg'

const Navbar = () => {
    return (
        <>

        <header>

            <section className="flex">

                <img src={bearIcon} alt="Bear Planner Icon" className/>

                <div id="menu-bar" className="fas fa-bars"></div>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#speciality">planner</a>
                    <a href="#popular">saved schedules</a>
                
                </nav>

            </section>

        </header>
        
        </>
    )
}

export default Navbar