import welcome from '../assets/welcome.png'

const About = () => {
  return (
    <div className="tv-container about-page">
      <div className="about-hero">
        <div className="about-text">
          <p className="kicker">About us</p>
          <h2>Built from NEMT roots, focused on reliability</h2>
          <p className="lead">Trans Voyage Taxi grew from non-emergency medical transport to a full-service taxi company serving Denver and DIA. We bring the same care, safety, and professionalism to every airport transfer, city ride, and delivery.</p>
          <div className="meta-list">
            <span className="pill muted">Denver based</span>
            <span className="pill muted">ADA ready</span>
            <span className="pill muted">24/7 dispatch</span>
          </div>
        </div>

        <div className="about-visual">
          <img src={welcome} alt="Welcome to Trans Voyage Taxi" className="about-image" />
        </div>
      </div>

      <div className="panel soft about-panels">
        <div className="story-block">
          <h3>Our story</h3>
          <p>We expanded beyond NEMT to better serve travelers, neighbors, and businesses across the Denver metro area. The same attention to safety and customer care now powers our full taxi service.</p>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <h4>Growth mindset</h4>
            <p>We welcome healthy competition because it pushes us to raise the bar for service, punctuality, and comfort.</p>
          </div>
          <div className="story-card">
            <h4>Community pride</h4>
            <p>We are proud of our drivers and the loyalty of our riders. Their trust fuels our commitment to quality.</p>
          </div>
        </div>

        <div className="story-block">
          <h3>Mission</h3>
          <p>Our mission is to get you the most for your fare: safe vehicles, professional drivers, timely pickups, and clear communication.</p>
        </div>

        <div className="story-block">
          <h3>Core values</h3>
          <ul className="checklist">
            <li>Safety and professionalism</li>
            <li>Accessibility and inclusivity</li>
            <li>Helpful technology and convenience</li>
            <li>Community-focused service</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
