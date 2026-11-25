import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Fac from '../components/facility/Fac'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Fac />
    </div>
  )
}

export default Home