import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"

import { useEffect, useState } from "react"

import { translations } from "./translations"

import "./styles.css"

function App() {

  const browserLanguage =
    navigator.language.startsWith("ro") ? "ro" : "en"

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || browserLanguage
  })

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = translations[language]

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      <Hero t={t} />

      <About t={t} />

      <Services t={t} />

      <Projects t={t} />

      <Skills t={t} />

      <Contact t={t} />
    </>
  )
}

export default App