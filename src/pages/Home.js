import hero from '../assets/downtown.jpeg'
import FunWidget from '../components/FunWidget'
import LiveWidget from '../components/LiveWidget'

const Home = ({ openBooking }) => {
  return (
    <div>
      <section className="hero">
        <div className="tv-container">
          <div className="hero-content">
            <div className="text-block">
              <h1>Trans Voyage Taxi</h1>
              <p className="lead">Reliable, safe, and professional transportation across the Denver Metro Area. Airport transfers, city rides, accessible transport, and package delivery — made simple.</p>

              <div className="buttons">
                <button className="tv-book primary" onClick={() => { if (openBooking) openBooking() }}>Book A Ride</button>
                <a href="/services" className="tv-book secondary">See Services</a>
              </div>
            </div>

            <div className="image-block">
              <img src={hero} alt="Denver skyline" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="tv-container" style={{paddingTop:20}}>
        {/* Info row: facts, live time/weather, quick-book — aligned */}
        <div className="info-row" style={{marginBottom:16}}>
          <div className="info-card">
            <FunWidget />
          </div>

          <div className="info-card">
            <LiveWidget />
          </div>

          <div className="info-card">
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
              <div>
                <h3 style={{marginTop:0}}>Quick Book</h3>
                <p className="muted">Fast booking and immediate email confirmation for simple trips.</p>
              </div>
              <div style={{display:'flex',justifyContent:'flex-end'}}>
                <button className="tv-book" onClick={() => { if (openBooking) openBooking() }}>Book Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="info-grid">
          <div className="info-card">
            <h3>24/7 Airport Transfers</h3>
            <p>Dependable rides to and from Denver International Airport at any hour.</p>
          </div>

          <div className="info-card">
            <h3>Accessible Transport</h3>
            <p>ADA-compliant vehicles and experienced drivers for special needs and NEMT rides.</p>
          </div>

          <div className="info-card">
            <h3>Package Delivery</h3>
            <p>Secure local deliveries across Denver and surrounding areas.</p>
          </div>
        </div>
      </section>

      <section className="tv-container" style={{paddingTop:20,paddingBottom:32}}>
        <div className="promise">
          <h2>Our Promise</h2>
          <p className="lead">We prioritize your safety, comfort, and punctuality. With trained drivers, modern vehicles, and a commitment to exceptional service, Trans Voyage Taxi is transportation you can trust.</p>
          <div style={{marginTop:12}}>
            <a href="/about" className="tv-book">About Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

