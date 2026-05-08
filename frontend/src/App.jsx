import Navbar from "./components/navbar/Navbar"
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import ProjectShowcase from "./components/projectShowcase/ProjectShowcase"

import './styles.css'

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </>
    
  )
}

export default App