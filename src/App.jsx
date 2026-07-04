import { Lenis } from 'lenis/react'
import CustomCursor from './components/CustomCursor'
import MatrixRain from './components/MatrixRain'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import 'lenis/dist/lenis.css'
import './App.css'

function App() {
  return (
    <Lenis root>
      <CustomCursor />
      <MatrixRain />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Lenis>
  )
}

export default App
