
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
// import HomePage from './Components/HomePage'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './Components/Footer'
import { HomePage } from './page/HomePage'
const App = () => {
  return (
      <ThemeProvider>
          <HomePage />
          <About />
          <Projects />
          <Contact />
          <Footer />
      </ThemeProvider>
  )
}
export default App
