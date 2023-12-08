import React from 'react'
import { useState } from "react";

import bearIcon from '../assets/images/bear-icon.svg'
import greyEllipse from '../assets/images/grey-ellipse.png'

import '../css/Navbar.css';


const Navbar = () => {


    return (
      <>
        <header>
          <section className="nav-container">
            <img src={bearIcon} alt="Bear Planner Icon" className="logo-icon" />

            <nav className="navbar">
              <div className="ref-container">
                <a href="/">Home</a>
                <a href="/Planner">Planner</a>
                <a href="#planner">Saved Schedules</a>
              </div>

              <div className="App">

                <button className="profile-btn"><img
                src={greyEllipse}
                alt="profile picture"
                className="profile-icon"
              /></button>

              </div>
              
            </nav>
          </section>
        </header>
      </>
    );
}

export default Navbar