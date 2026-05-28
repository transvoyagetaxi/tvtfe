import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import CallButton from './CallButton'

const Footer = ({ openBooking, openDrive }) => {
  const year = new Date().getFullYear()
  return (
    <footer className="tv-footer">
      <div className="tv-container">
        <div className="footer-grid">

          <div className="footer-brand">
            <div className="footer-brand-identity">
              <img src={logo} alt="Trans Voyage Taxi" className="footer-logo" />
              <div>
                <div className="footer-brand-name">Trans Voyage Taxi</div>
                <div className="footer-brand-tagline">Transportation You Can Trust</div>
              </div>
            </div>
            <p className="footer-brand-desc muted">Denver's 24/7 taxi service — flat-rate taxi to DIA, wheelchair-accessible NEMT transport, and city rides across the Denver metro area.</p>
            <div className="footer-badge-row">
              <span className="pill muted">Licensed &amp; Insured</span>
              <span className="pill muted">PUC Approved</span>
              <span className="pill muted">24/7 Service</span>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services &amp; Rates</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/drive">Drive with Us</Link></li>
              <li>
                <button type="button" className="footer-nav-btn" onClick={openBooking}>
                  Book a Ride
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Services</div>
            <ul className="footer-nav-list">
              <li><Link to="/airport-taxi">Taxi to DIA</Link></li>
              <li><Link to="/wheelchair-accessible-taxi">Wheelchair Accessible &amp; NEMT</Link></li>
              <li><Link to="/services">City &amp; Metro Rides</Link></li>
              <li><Link to="/services">Same-Day Package Delivery</Link></li>
            </ul>
            <div className="footer-drive-cta">
              <div className="footer-col-title" style={{ marginTop: '1.5rem' }}>Drivers</div>
              <button type="button" className="footer-nav-btn drive-link" onClick={openDrive}>
                Interested to Drive? Apply →
              </button>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-title">Contact</div>
            <ul className="footer-contact-list">
              <li>
                <span className="footer-contact-icon">📍</span>
                <span>1450 S. Havana Street Ste 712<br />Aurora, CO 80012</span>
              </li>
              <li>
                <span className="footer-contact-icon">📞</span>
                <a href="tel:+13033534482">(303) 353-4482</a>
              </li>
              <li>
                <span className="footer-contact-icon">✉️</span>
                <a href="mailto:bookings@transvoyagetaxi.com">bookings@transvoyagetaxi.com</a>
              </li>
              <li>
                <span className="footer-contact-icon">🕐</span>
                <span>Open 24/7 — every day including holidays</span>
              </li>
            </ul>
            <CallButton className="btn ghost footer-call-btn" label="Call dispatch" />
          </div>

        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-bar">
          <span className="muted">&copy; {year} Trans Voyage Taxi &middot; Aurora, Colorado</span>
          <span className="muted footer-bottom-right">
            <a href="https://sites.google.com/state.co.us/puc-zone-maps/home?authuser=0" target="_blank" rel="noreferrer" className="footer-link">PUC Zone Maps</a>
            <span className="sep">&middot;</span>
            Quality comes first
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
