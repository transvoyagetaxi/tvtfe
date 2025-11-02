import hero from '../assets/downtown.jpeg'

const Home = ({ openBooking }) => {
  return (
    <div>
      <section className="hero">
        <div className="tv-container">
          <div className="hero-inner">
            <div className="hero-left">
              <h1>Trans Voyage Taxi</h1>
              <p className="lead">Reliable, safe, and professional transportation across the Denver Metro Area. Airport transfers, city rides, accessible transport, and package delivery — made simple.</p>

              <div className="hero-ctas">
                <button
                  className="tv-book"
                  onClick={() => { if (openBooking) openBooking() }}
                >
                  Book A Ride
                </button>
                <a href="/services" className="tv-book secondary">See Services</a>
              </div>
            </div>

            <div className="hero-right">
              <img src={hero} alt="Denver skyline" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="tv-container" style={{paddingTop:20}}>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>24/7 Airport Transfers</h3>
            <p>Dependable rides to and from Denver International Airport at any hour.</p>
          </div>

          <div className="feature-card">
            <h3>Accessible Transport</h3>
            <p>ADA-compliant vehicles and experienced drivers for special needs and NEMT rides.</p>
          </div>

          <div className="feature-card">
            <h3>Package Delivery</h3>
            <p>Secure local deliveries across Denver and surrounding areas.</p>
          </div>
        </div>
      </section>

      <section className="tv-container" style={{paddingTop:20,paddingBottom:32}}>
        <div className="hero-inner">
          <div className="hero-left">
            <h3>Our Promise</h3>
            <p className="lead">We prioritize your safety, comfort, and punctuality. With trained drivers, modern vehicles, and a commitment to exceptional service, Trans Voyage Taxi is transportation you can trust.</p>
          </div>

          <div className="hero-right">
            <a href="/about" className="tv-book">About Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
