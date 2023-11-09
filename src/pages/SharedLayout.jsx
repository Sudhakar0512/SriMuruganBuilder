import React from 'react'
import { Outlet } from "react-router-dom";
import Headerr from '../component/Headerr';
import Footer from '../component/Footer';

export default function SharedLayout() {
  return (
    <div>
        <Outlet/>
        <Footer/>
    </div>
  )
}
