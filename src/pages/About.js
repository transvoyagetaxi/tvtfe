
import welcome from '../assets/welcome.png'

const About = () => {
  return (
    <div className="tv-container">
      <div className="two-col">
        <div className="left">
          <h2>About Trans Voyage Taxi</h2>
          <p className="lead">Trans Voyage Taxi is a Denver-based transportation provider focused on reliability, safety, and exceptional customer service. We grew from a non-emergency medical transport background and now provide accessible transport, airport transfers, city rides, and package delivery throughout the Denver metro area.</p>
        </div>

        <div className="right">
          <img src={welcome} alt="Welcome to Trans Voyage Taxi" style={{width:220,height:'auto',borderRadius:8,boxShadow:'0 8px 26px rgba(12,24,48,0.08)'}} />
        </div>
      </div>

      <section style={{marginTop:22}}>
        <h3>Our Story</h3>

        <h4>Let's Grow...</h4>
        <p>Trans Voyage's team set out to expand beyond non-emergency medical transportation to better serve a broader range of riders. By building on our NEMT experience, we brought the same attention to safety and customer satisfaction to a full taxi service for the Denver community.</p>

        <h4>Let's Compete...</h4>
        <p>We welcome healthy competition — it drives improvement. Our team believes that competing on service and reliability benefits customers and pushes us to continually raise standards.</p>

        <h4>Pride...</h4>
        <p>We take pride in our independent contractors and business associates (our drivers) and in the loyalty of our customers. Their trust is the foundation of our service.</p>
      </section>

      <section style={{marginTop:18}}>
        <h3>Mission</h3>
        <p>"Our mission is to get you the most for your fare." We deliver safety, comfort, timeliness, and value on every trip.</p>
      </section>

      <section style={{marginTop:12}}>
        <h3>Core Values</h3>
        <ul>
          <li>Safety & professionalism</li>
          <li>Accessibility and inclusivity</li>
          <li>Modern technology and convenience</li>
          <li>Community-focused service</li>
        </ul>
      </section>
    </div>
  )
}

export default About
