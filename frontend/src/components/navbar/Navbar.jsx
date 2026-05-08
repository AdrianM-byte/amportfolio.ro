import logo from '../../assets/am-logo.png'

function Navbar() {
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
          <a href="#hero">Hero</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Skills & Technologies</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

    </header>
  )
}

export default Navbar