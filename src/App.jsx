import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import About from './Componets/About/About'
import Team from './Componets/Team/Team'
// import Form from './Componets/Sign/Form'
import Product from './Componets/Product/Product'
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

import "@animxyz/core";
import { XyzTransitionGroup } from "@animxyz/react";

import './App.css'
function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  } 
  return (
    // <LocomotiveScrollProvider options={options} containerRef={ref}>
      <XyzTransitionGroup appearVisible="true" duration="auto">
      <main data-scroll-container ref={ref}>
        <div><Navbar/></div>
        <div><Hero/></div>
        <div><About/></div>
        
        <div><Team/></div>
        <div><Product/></div>
        {/* <div><Form/> </div> */}
      </main>
      </XyzTransitionGroup>
    // </LocomotiveScrollProvider>
  )
}
export default App
