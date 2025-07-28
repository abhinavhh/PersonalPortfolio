import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import HomePage from './Components/HomePage'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './Components/Footer'
const App = () => {
  return (
      <ThemeProvider>
        {/* <div className="relative h-full w-full"> */}
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
         {/* </div> */}
      </ThemeProvider>
  )
}

export default App
