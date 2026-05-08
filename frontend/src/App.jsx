import NavBar from "./components/navbar/Navbar"
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App