import React from 'react'
import team from '../../assets/Team.png'
import './team.css'

const Team = () => {
  return (
    <div className="team" data-scroll-section xyz="fade small stagger ease-out-back delay-10 duration-30">
        <div className="wrapper-image ">
            <img src={team} className="xyz-nested" alt="computer illustration"/>  
        </div>
        <div className="banner">
            <h2>Our Community</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni eligendi harum, ad officia corrupti adipisci recusandae odit veniam deleniti, quaerat maiores, nam obcaecati incidunt. Explicabo, accusantium dignissimos. Cupiditate, quibusdam voluptate!</p>
        </div>
    </div>
  )
}

export default Team