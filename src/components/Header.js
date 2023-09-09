import './Header.css'
import {Link, NavLink} from "react-router-dom";


export default function Header() {
  return (
    <header className='Header'>
      <div className="Profile-Info">
        <div className="Img">
          <img src="/sharon.jpeg" alt="" />
        </div>
        <div className="Name">
          <h1>SHARON SELAH</h1>
        </div>
      </div>

      <div className="Menu">
        <nav>
          <Link to="/" className="nav-link">HOME</Link>
          <NavLink to="/about" className="nav-link" activeClassName="active-nav-link">ABOUT</NavLink>
          <NavLink to="/projects" className="nav-link" activeClassName="active-nav-link">PROJECTS</NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active-nav-link">CONTACT</NavLink>
        </nav>
      </div>
    </header>
  )
}

