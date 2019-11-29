import React, { useState, useEffect } from 'react'
//Components
import Navbar from '../components/Navbar'
//Styles
import '../styles/home.scss'
//Assets
import Logo from '../assets/logo.png'
import Android from '../assets/android-logo.png'
import Apple from '../assets/apple-logo.png'
import Coffee from '../assets/coffee-logo.png'
import Html from '../assets/html-logo.png'
import Github from '../assets/github-logo.png'

const Home = () => {
    return (
        <div className="main-container">
            <div className = "content-container">
                <div className="horizontal-divider"></div>
                {/* Navbar */}
                <Navbar active="home" center/>
                {/* Big title and stuff */}
                <div className = "center-container">
                    <img src={Logo} />
                </div>
                {/* Icons */}
                <div className = "icons-footer">
                    <i><img src = {Github}/></i>
                    <i><img src = {Html}/></i>
                    <i><img src = {Apple}/></i>
                    <i><img src = {Android}/></i>
                    <i><img src = {Coffee}/></i>
                </div>
            </div>
        </div>
    )
}

export default Home