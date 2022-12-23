import React from 'react'
import svg from "../../assets/react.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar" data-scroll-section>
        <div className="logo">
            <img src={svg} alt="logo"/>
            <h1>Open replay</h1>
        </div>
        <div className="items">
            <p>About</p>
            <p>Pricing</p>
            <p>Sponsors</p>
            <p>Team</p>
        </div>
    </div>
  )
}

export default Navbar