import { Link } from 'react-router-dom'
import hero from '../assets/downtown.jpeg'
import FunWidget from '../components/FunWidget'
import LiveWidget from '../components/LiveWidget'

const Home = ({ openBooking }) => {
  const handleBook = () => {
    if (openBooking) openBooking()
  }

  return (
    <div>
      <section className="hero hero-modern">
        <div className="tv-container hero-grid">
          <div className="hero-copy">
            <div className="pill">Denver Metro & DIA</div>
            <h1>Modern taxi service built for on-time airport and city rides.</h1>
            <p className="lead">Flat-rate airport trips, ADA-friendly vehicles, and professional drivers who know Denver. Book online in seconds or call us anytime.</p>

            <div className="hero-actions">
              <button className="btn" onClick={handleBook}>Book a Ride</button>
              <Link to="/services" className="btn secondary">See services</Link>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Airport & metro coverage</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">ADA</div>
                <div className="stat-label">Wheelchair-accessible rides</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Flat rates</div>
                <div className="stat-label">Simple pricing to/from DIA</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-badge">Licensed • Insured</div>
              <img src={hero} alt="Denver skyline at dusk" className="hero-image" />
              <div className="hero-note">
                <div className="note-title">Ride-ready vehicles</div>
                <p className="muted">Sedans, minivans, and wheelchair-accessible options available on request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel tv-container widgets-panel">
        <div className="panel-header">
          <div>
            <p className="kicker">Plan smarter</p>
            <h2>Live updates and quick booking</h2>
            <p className="muted">Check time and weather in Denver, browse local tips, and reserve your ride without waiting on hold.</p>
          </div>
          <div className="panel-actions">
            <button className="btn ghost" onClick={handleBook}>Open booking</button>
          </div>
        </div>

        <div className="widget-grid">
          <div className="widget-card">
            <FunWidget />
          </div>
          <div className="widget-card">
            <LiveWidget />
          </div>
          <div className="widget-card quick-card">
            <div className="quick-card-top">
              <h3>Quick book</h3>
              <p className="muted">Email us your pickup details and we will confirm right away.</p>
            </div>
            <div className="quick-card-actions">
              <button className="btn" onClick={handleBook}>Book now</button>
              <a className="btn secondary" href="tel:+13033534482">(303) 353-4482</a>
            </div>
          </div>
        </div>
      </section>

      <section className="panel soft">
        <div className="tv-container">
          <div className="section-head">
            <div>
              <p className="kicker">What we do</p>
              <h2>Dependable rides for every itinerary</h2>
              <p className="muted">Airport runs, city trips, scheduled delivery, and ADA-ready transport with drivers who know Denver inside and out.</p>
            </div>
            <Link to="/services" className="btn secondary">Explore services</Link>
          </div>

          <div className="tile-grid">
            <div className="tile">
              <div className="tile-icon">✈️</div>
              <h3>24/7 airport transfers</h3>
              <p>Flat-rate trips to and from DIA with real-time flight awareness and curbside pickup.</p>
              <span className="pill muted">Flat rate + access fee included</span>
            </div>
            <div className="tile">
              <div className="tile-icon">🧭</div>
              <h3>City & metro rides</h3>
              <p>Door-to-door transport across the Denver metro area for errands, events, and commutes.</p>
              <span className="pill muted">Local expertise</span>
            </div>
            <div className="tile">
              <div className="tile-icon">🧊</div>
              <h3>Package delivery</h3>
              <p>Secure delivery for time-sensitive items anywhere in Denver and surrounding areas.</p>
              <span className="pill muted">Scheduled or on-demand</span>
            </div>
            <div className="tile">
              <div className="tile-icon">♿</div>
              <h3>Accessible transport</h3>
              <p>Wheelchair-accessible vehicles and experienced NEMT-trained drivers for medical visits and daily travel.</p>
              <span className="pill muted">ADA ready</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tv-container split-stack">
        <div className="split-card">
          <p className="kicker">Service promise</p>
          <h3>Comfort, safety, and punctuality every time</h3>
          <p className="muted">We invest in driver training, maintained vehicles, and fast communication so you can travel with confidence.</p>
          <ul className="checklist">
            <li>Professional, vetted drivers</li>
            <li>Real people to confirm your ride</li>
            <li>Clean, comfortable fleet with options for every party size</li>
            <li>Live updates for airport pickups</li>
          </ul>
        </div>
        <div className="split-card alt">
          <p className="kicker">How to ride</p>
          <h3>Three easy steps</h3>
          <ol className="steps">
            <li><strong>Share your pickup</strong> — address, date, time, and destination.</li>
            <li><strong>We confirm</strong> the fare details and vehicle fit.</li>
            <li><strong>Ride arrives</strong> on time with a driver who knows the route.</li>
          </ol>
          <Link to="/about" className="btn ghost">Meet the team</Link>
        </div>
      </section>

      <section className="cta-banner">
        <div className="tv-container cta-content">
          <div>
            <p className="kicker">Always on</p>
            <h3>Ready for your next trip?</h3>
            <p className="muted">Call us or book online in seconds. We will confirm quickly and keep you updated.</p>
          </div>
          <div className="cta-actions">
            <button className="btn" onClick={handleBook}>Book a ride</button>
            <a className="btn secondary" href="tel:+13033534482">Call (303) 353-4482</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
