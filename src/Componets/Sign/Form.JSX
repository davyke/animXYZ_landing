import React from 'react'
import './form.css';

function Form() {
  return (
    <div className="form" data-scroll-section>
        <h3>sign up</h3>
        <input placeholder="first Name"/>
        <input placeholder="Second Name"/>
        <input placeholder="Email"/>
        <button className='button'>Submit</button>
    </div>
  )
}

export default Form;