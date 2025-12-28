import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = ({ openBooking }) => {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav className="tv-nav">
      <div className="tv-container nav-inner">
        <div className="brand">
          <img src={logo} alt="Trans Voyage Taxi" className="tv-logo" />
          <div>
            <div className="tv-site-title">Trans Voyage Taxi</div>
            <div className="tv-tagline">Transportation You Can Trust!</div>
          </div>
        </div>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>Services</NavLink>
          <button type="button" className="nav-book" onClick={() => { if (openBooking) openBooking(); close(); }}>Book</button>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>About</NavLink>
        </div>

        <button className={`nav-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span className="burger"></span>
        </button>
      </div>
    </nav>
  )
}

export default NavBar
