import React from 'react'
import heroPic from "../../assets/group.png"
import "./hero.css"

function Hero() {
  return (
    <div className="hero" data-scroll-section xyz="fade small stagger ease-out-back delay-10 duration-30">
        <div className="text">
            <h1 className=" xyz-nested">Welcome to open replay</h1>
            <p className=" xyz-nested">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam nemo vero quod laboriosam ullam suscipit beatae reiciendis doloremque minima repellat possimus error, voluptatum eaque. Quos dignissimos ullam dolorem molestiae.</p>
            <div className='buttons  xyz-nested'>
                <input className="email xyz-nested" placeholder="@ Email"/>
                <button className="acces xyz-nested">Get Early Acces</button>
            </div>
        </div>
        <div className="image-wrapper" xyz="fade right stagger">
            <img src={heroPic} className="xyz-nested" alt="colaboration illutartion"/>
        </div>
    </div>
  )
}

export default Hero