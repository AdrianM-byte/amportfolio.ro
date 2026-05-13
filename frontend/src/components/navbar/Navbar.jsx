import logo from "../../assets/am-logo.png"

function Navbar({ language, setLanguage, t }) {

  return (
    <header>

      <div className="navbar-brand">
        <img
          src={logo}
          alt="Adrian Marcu Logo"
          className="navbar-logo"
        />
      </div>

      <div className="navbar-divider"></div>

      <nav>

        <div className="nav-links">

          <a href="#hero">{t.navbar.overview}</a>

          <a href="#about">
            {t.navbar.about}
          </a>

          <a href="#services">
            {t.navbar.services}
          </a>

          <a href="#projects">
            {t.navbar.projects}
          </a>

          <a href="#certifications">
            {t.navbar.skills}
          </a>

          <a href="#contact">
            {t.navbar.contact}
          </a>

        </div>

        <div className="language-switcher">

          <button
            className={
              language === "en"
                ? "active-language"
                : ""
            }

            onClick={() => setLanguage("en")}
          >
            EN
          </button>

          <button
            className={
              language === "ro"
                ? "active-language"
                : ""
            }

            onClick={() => setLanguage("ro")}
          >
            RO
          </button>

        </div>

      </nav>

    </header>
  )
}

export default Navbar