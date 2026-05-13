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
          <a href="#hero">Overview</a>
          <a href="#about">Profile</a>
          <a href="#services">Services</a>
          <a href="#projects">Work</a>
          <a href="#certifications">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

    </header>
  )
}

export default Navbar
