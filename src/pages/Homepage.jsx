import React from 'react'
import Home from "../component/Home"
import About from "../component/About"
import Services from "../component/Services"
import Projects from "../component/Projects"
import Review from "../component/Review"
import ContactMap from "../component/ContactMap"
import Headerr from '../component/Headerr'
import HomeGallery from '../component/HomeGallery'
export default function Homepage() {
  return (
   <div>
      <Headerr/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <HomeGallery/>
      <Review/>
      <ContactMap/> 
   </div>
  )
}
