import minivan from '../assets/minivan.jpg'
import sedan from '../assets/sedan.jpg'
import wheelchair from '../assets/wheelchair.jpg'
// fallback image (requested photo not in assets)
import downtown from '../assets/downtown.jpeg'

const ServiceCard = ({title, children, img, alt}) => (
  <div className="service-card">
    {img && <img src={img} alt={alt || title} />}
    <div className="service-card-body">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <section className="tv-services">
      <div className="tv-container">
        <h2>Our Services</h2>
        <p className="lead">Reliable, safe, and professional transportation across Denver — airport transfers, city rides, package deliveries, and ADA-compliant trips.</p>

        <div className="services-grid">
          <ServiceCard title="24/7 Airport Services" img={downtown} alt="Airport">
            We proudly serve all customers to and from Denver International Airport (DIA). Reliable pickups and drop-offs any hour — book your ride to/from the DIA.
            <div style={{marginTop:8}}><a href="/" className="tv-book">Book Your Ride To/From the DIA</a></div>
          </ServiceCard>

          <ServiceCard title="City Service" img={sedan} alt="City service">
            We proudly serve the public of Denver and the greater metro area. Comfortable, punctual rides for everyday trips — commuting, errands, and events.
            <div style={{marginTop:8}}><a href="/services" className="tv-book">Book Your Ride</a></div>
          </ServiceCard>

          <ServiceCard title="Delivery" img={minivan} alt="Delivery">
            It will be our pleasure to deliver your packages from/to any point in Denver and surrounding areas. Secure, same-day or scheduled delivery options available.
            <div style={{marginTop:8}}><a href="mailto:info@transvoyagetaxi.com?subject=Delivery request" className="tv-book">Request Delivery</a></div>
          </ServiceCard>

          <ServiceCard title="Accessible & Special Needs Transport" img={wheelchair} alt="Accessible vehicle">
            ADA-compliant vehicles and drivers experienced in non-emergency medical transport (NEMT). We assist riders with mobility needs and appointments.
          </ServiceCard>
        </div>

        <section style={{marginTop:28}}>
          <h3>Rates</h3>
          <p className="muted">Flat Rate Zones — one-way fare from Denver International Airport (airport access fee included):</p>
          <table style={{width:'100%',maxWidth:720,borderCollapse:'collapse',marginTop:8}}>
            <tbody>
              <tr><td>Boulder</td><td style={{textAlign:'right'}}>$89.03</td></tr>
              <tr><td>Downtown Denver</td><td style={{textAlign:'right'}}>$56.03</td></tr>
              <tr><td>Denver Tech Center</td><td style={{textAlign:'right'}}>$62.03</td></tr>
              <tr><td>Tower Road</td><td style={{textAlign:'right'}}>$29.03</td></tr>
            </tbody>
          </table>

          <h4 style={{marginTop:16}}>Metered Taxicab Rates</h4>
          <p className="muted">Fares to other metro-area destinations are based on the taxicab’s meter. Example: airport → Cherry Creek typically costs $62–$70, plus a $5.03 airport access fee for metered taxi trips.</p>

          <h4 style={{marginTop:12}}>Multiple Drop-Offs</h4>
          <p className="muted">If allowed by an operator’s approved tariff, flat rate from DEN may be increased by $5.00 for each additional drop-off within a zone. If drop-offs cross zone boundaries, fares are calculated per rules described by the PUC (flat rate for zone + meter fare for outside segments).</p>

          <h4 style={{marginTop:12}}>Other Rates</h4>
          <p className="muted">Non-flat trips: $3.50 base fare + $2.65 per mile + $0.40 per waiting minute (if vehicle ≤15 mph).</p>

          <p style={{marginTop:12}}>Taxicab pickups and drop-offs at Jeppesen Terminal are at Level 5, Island 1 (specific doors listed by terminal). For official zone maps, see the Colorado PUC page:</p>
          <p><a href="https://sites.google.com/state.co.us/puc-zone-maps/home?authuser=0" target="_blank" rel="noreferrer">Taxicab Rate Zone Maps (PUC)</a></p>

          <div style={{marginTop:12}}>
            <a href="mailto:info@transvoyagetaxi.com?subject=Rate quote request" className="tv-book">Get Quote</a>
          </div>
        </section>

        <div className="differentiators">
          <h3>Why choose Trans Voyage Taxi?</h3>
          <ul>
            <li><strong>24/7 Availability</strong> — Always open, including dedicated airport transfers.</li>
            <li><strong>Safety & Professionalism</strong> — Highly trained drivers focused on your comfort and safety.</li>
            <li><strong>Modern, Eco-Friendly Fleet</strong> — Late-model, fuel-efficient vehicles for cleaner, more reliable rides.</li>
            <li><strong>Advanced Technology</strong> — Easy online booking and secure payments.</li>
            <li><strong>Accessibility</strong> — Wheelchair-accessible vehicle and NEMT experience.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
