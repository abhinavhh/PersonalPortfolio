import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import HomePage from './Components/HomePage'
import { ThemeProvider } from './context/ThemeContext'
const App = () => {
  return (
      <ThemeProvider>
        {/* <div className="relative h-full w-full"> */}
          <Navbar />
          <Hero />
          {/* <About />
          <Projects />
          <HomePage /> */}
        {/* </div> */}
      </ThemeProvider>
  )
}

export default App
