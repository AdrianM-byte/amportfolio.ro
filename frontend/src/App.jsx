import NavBar from "./components/navbar/Navbar"
import Hero from './components/hero/Hero'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />

      <section id="about">
        <h1>About</h1>
      </section>

      <section id = "services">
        <h1>Services</h1>
      </section>

      <section id = "projects">
        <h1>Projects</h1>
      </section>

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