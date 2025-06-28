import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import HomePage from './Components/HomePage'
const App = () => {
  return (
      <div className="relative h-full w-full">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <HomePage />
      </div>
  )
}

export default App
