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
                <a href="#home">Home</a>
                <a href="#planner">Planner</a>
                <a href="#planner">Saved Schedules</a>
              </div>

              <div className="App">

                <button class="profile-btn"><img
                src={greyEllipse}
                alt="profile picture"
                class="profile-icon"
              /></button>

              </div>
              
            </nav>
          </section>
        </header>
      </>
    );
}

export default Navbar