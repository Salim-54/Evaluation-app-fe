import React from 'react'
import NavBar from '../components/AppBar'
import Welcoming from '../components/Welcoming'
import logo from '../assets/logo.png'
import {Box } from "@mui/material"


const  LandingPage = () => {
    return (
    <>
    <NavBar/>
    <Welcoming/>
    </>
    )
}
export default LandingPage