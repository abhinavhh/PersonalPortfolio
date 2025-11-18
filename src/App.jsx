
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { ThemeProvider } from './context/ThemeContext'
import Footer from './Components/Footer'
import { HomePage } from './page/HomePage'
const App = () => {
  return (
      <ThemeProvider>
          <HomePage />
          <Projects />
          <Contact />
          <Footer />
      </ThemeProvider>
  )
}
export default App
