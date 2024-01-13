import React from 'react'
import Home from '../components/Home/Home'
import About from '../components/Hero/About'
import Property from '../components/Property/Property'

const HomePage = () => {
  return (
    <div>
        <Home/>
        <Property/>
        <About/>
    </div>
  )
}

export default HomePage