import React from 'react'
import hero from '../assets/denvervibe.webp'
import drivers from '../assets/sedan.jpg'
import tech from '../assets/downtown.jpeg'
import world from '../assets/Denver_Skyline.jpg'
import Services from '../components/Services'

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="tv-container hero-inner">
          <div className="hero-copy">
            <h1>Welcome to Trans Voyage Taxi</h1>
            <p className="lead">We are one of the most advanced, customer-service oriented taxi companies serving the Denver Metro Area. Our full-time professional drivers are highly trained and put your safety and comfort first — whether you're heading to a medical appointment, visiting family, or catching a flight.</p>
            <div style={{marginTop:16}}>
              <a href="/booking" className="tv-book">Book A Ride</a>
              <a href="/services" style={{marginLeft:12}} className="tv-book">Our Services</a>
            </div>
          </div>
          <div className="hero-media">
            <img src={hero} alt="Denver skyline" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="tv-container" style={{paddingTop:28}}>
        <div style={{display:'flex',alignItems:'flex-start',gap:18,flexWrap:'wrap'}}>
          <div style={{flex:'1 1 520px'}}>
            <h2>Quality Comes First</h2>
            <p className="lead">It is our duty to make sure our clients are safe and comfortable while enjoying their rides with our highly trained drivers. Trans Voyage Taxi invests in late-model, energy-efficient vehicles and the latest dispatch and mobile technology so scheduling is easy and payments are private and secure.</p>
          </div>

          <div style={{flex:'0 1 360px'}}>
            <h3>Highlights</h3>
            <ul>
              <li>24/7 Airport Transfers — dependable service to and from Denver International Airport (DIA).</li>
              <li>ADA-Accessible Vehicles & NEMT Experience — trained drivers and at least one accessibility-equipped vehicle.</li>
              <li>Package Delivery — secure courier-style deliveries across Denver and surrounding areas.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tv-container" style={{paddingTop:22}}>
        <h2>Our Strengths</h2>
        <div className="services-grid" style={{marginTop:12}}>
          <div className="service-card">
            <img src={drivers} alt="Highly trained drivers" />
            <div className="service-card-body">
              <h3>Highly Trained Drivers</h3>
              <p>We contract with the best professional drivers. Their top priority is the safety and comfort of every passenger.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={tech} alt="Best technology" />
            <div className="service-card-body">
              <h3>Best Technology in the City</h3>
              <p>Modern dispatching and mobile tools make booking and secure payments simple and reliable for our customers.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={world} alt="World class service" />
            <div className="service-card-body">
              <h3>World Class Taxi Services</h3>
              <p>Proudly serving Denver and the surrounding area — committed to providing excellent, reliable transportation to our community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tv-container" style={{paddingTop:28,paddingBottom:28}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
          <div>
            <h3>Our Mission</h3>
            <p>"Our mission is to get you the most for your fare." We deliver safety, comfort, punctuality, and value on every trip.</p>
            <ul>
              <li>Safety</li>
              <li>Comfort</li>
              <li>Timeliness</li>
              <li>Eco-Friendliness</li>
              <li>Professionalism</li>
              <li>Technology</li>
            </ul>
          </div>

          <div>
            <h3>Core Values & Management</h3>
            <p>Our management team is dedicated to excellence, progress, and community-focused service.</p>
            <ul>
              <li>Care and Trust</li>
              <li>Dependability and Flexibility</li>
              <li>Satisfaction and Comfort</li>
              <li>Liability and Safety</li>
              <li>Efficiency and Future Thinking</li>
            </ul>
          </div>
        </div>
      </section>

      <Services />
    </div>
  )
}

export default Home
