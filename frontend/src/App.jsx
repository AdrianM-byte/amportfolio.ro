import NavBar from "./components/navbar/Navbar"
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Projects />

      <section id="certifications">
        <h1>Certifications</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>
      </section>
    </div>
  )
}

export default App