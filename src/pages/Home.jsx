import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Fac from '../components/facility/Fac'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Fac />
        <Footer />
    </div>
  )
}

export default Home