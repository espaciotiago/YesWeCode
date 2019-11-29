import React, { useState, useEffect } from 'react'
//Components
import Navbar from '../components/Navbar'
//Styles
import '../styles/home.scss'
import '../styles/contact.scss'
//Assets
import Logo from '../assets/logo.png'
import Android from '../assets/android-logo.png'
import Apple from '../assets/apple-logo.png'
import Coffee from '../assets/coffee-logo.png'
import Html from '../assets/html-logo.png'
import Github from '../assets/github-logo.png'
import { icLinkedIn, icWhatsapp, icMail } from '../entities/Images'

const Contact = () => {
    return (
        <div className="split-screen">
            <div className="main-container">
                <div className="content-container">
                    {/* Navbar */}
                    <Navbar active="contact" center />
                    {/* Big title and stuff */}
                    <div className="center-container">
                        <img src={Logo} />
                    </div>
                    {/* Icons */}
                    <div className="icons-footer">
                        <i><img src={Github} /></i>
                        <i><img src={Html} /></i>
                        <i><img src={Apple} /></i>
                        <i><img src={Android} /></i>
                        <i><img src={Coffee} /></i>
                    </div>
                </div>
            </div>

            <div className="right-contact">
                <div className="content">
                    <h1>Contact</h1>
                    <div className="contact-icons">
                        <a href = "https://www.linkedin.com/in/espaciotiago/"><img src={icLinkedIn} /></a>
                        <a href = "https://wa.me/573016929622?text=Hola!%20Me%20gustaría%20que%20hablemos%20de%20Yes,%20we%20code"><img src={icWhatsapp} /></a>
                        <a href = "mailto:msantim@hotmail.com"><img src={icMail} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact