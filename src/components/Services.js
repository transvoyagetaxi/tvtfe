const ZONE_RATES = [
  { zone: 'Boulder', fare: '$89.03' },
  { zone: 'Downtown Denver', fare: '$56.03' },
  { zone: 'Denver Tech Center', fare: '$62.03' },
  { zone: 'Tower Road', fare: '$29.03' }
]

const SERVICES = [
  {
    title: '24/7 airport service',
    blurb: 'Flat-rate trips to and from Denver International Airport with curbside pickup and proactive flight awareness.',
    tag: 'Flat rate',
    detail: 'Access fee included',
    cta: <a className="text-link" href="/">Book DIA pickup</a>
  },
  {
    title: 'City & metro rides',
    blurb: 'Door-to-door transport for errands, events, and daily commutes throughout the Denver metro area.',
    tag: 'Metro',
    detail: 'On-time, clean vehicles',
    cta: <a className="text-link" href="/services">Plan a ride</a>
  },
  {
    title: 'Package delivery',
    blurb: 'Secure delivery for time-sensitive items anywhere in Denver and surrounding areas.',
    tag: 'On-demand',
    detail: 'Scheduled or same-day',
    cta: <a className="text-link" href="mailto:info@transvoyagetaxi.com?subject=Delivery request">Request delivery</a>
  },
  {
    title: 'Accessible & special needs transport',
    blurb: 'Wheelchair-accessible vehicles and NEMT-trained drivers for medical visits and daily travel.',
    tag: 'ADA ready',
    detail: 'Helpful, trained drivers',
    cta: <span className="text-link muted">Call to confirm</span>
  }
]

const Services = () => {
  return (
    <section className="tv-services">
      <div className="tv-container">
        <div className="section-head">
          <div>
            <p className="kicker">Services</p>
            <h2>Door-to-door coverage you can count on</h2>
            <p className="muted">From DIA arrivals to neighborhood trips and deliveries, we keep Denver moving with professional drivers, clean vehicles, and clear pricing.</p>
          </div>
          <div className="section-actions">
            <a className="btn" href="tel:+13033534482">Call dispatch</a>
            <a className="btn secondary" href="/">Book online</a>
          </div>
        </div>

        <div className="service-grid">
          {SERVICES.map(service => (
            <article className="service-card-modern" key={service.title}>
              <div className="service-card-top">
                <span className="pill">{service.tag}</span>
                <h3>{service.title}</h3>
                <p className="muted">{service.blurb}</p>
              </div>
              <div className="service-card-bottom">
                <div className="service-meta">
                  <span className="meta-label">{service.detail}</span>
                </div>
                {service.cta}
              </div>
            </article>
          ))}
        </div>

        <div className="panel soft rates-panel">
          <div className="panel-header">
            <div>
              <p className="kicker">Rates</p>
              <h3>Clear pricing to and from DIA</h3>
              <p className="muted">Flat rate zones include the airport access fee. For other destinations, standard metered taxi rates apply.</p>
            </div>
            <a className="btn secondary" href="mailto:info@transvoyagetaxi.com?subject=Rate quote request">Request quote</a>
          </div>

          <div className="rate-grid">
            <div className="rate-card">
              <h4>Flat rate zones</h4>
              <ul className="rate-list">
                {ZONE_RATES.map(rate => (
                  <li key={rate.zone}>
                    <span>{rate.zone}</span>
                    <span>{rate.fare}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rate-card">
              <h4>Metered taxicab</h4>
              <p className="muted">Fares to other metro-area destinations follow the taxicab meter.</p>
              <ul className="meta-list">
                <li>$3.50 base fare</li>
                <li>$2.65 per mile</li>
                <li>$0.40 per waiting minute (if vehicle under 15 mph)</li>
              </ul>
              <p className="muted">Example: airport to Cherry Creek is typically $62-$70 plus a $5.03 airport access fee for metered trips.</p>
            </div>
          </div>

          <div className="rate-notes">
            <div>
              <h4>Multiple drop-offs</h4>
              <p className="muted">If allowed by an operator’s approved tariff, a flat rate from DEN may be increased by $5.00 for each additional drop-off within a zone. If drop-offs cross zone boundaries, fares follow the PUC rules (flat rate for the zone plus meter fare for segments outside the zone).</p>
            </div>
            <div>
              <h4>PUC zone maps</h4>
              <p className="muted">Find official rate zone maps and details on the Colorado PUC page.</p>
              <a className="text-link" href="https://sites.google.com/state.co.us/puc-zone-maps/home?authuser=0" target="_blank" rel="noreferrer">Taxicab rate zone maps</a>
            </div>
          </div>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <p className="kicker">Why riders choose us</p>
            <h3>Safety, professionalism, technology</h3>
            <ul className="checklist">
              <li>24/7 availability with dedicated airport focus</li>
              <li>Highly trained, courteous drivers</li>
              <li>Modern, well-maintained fleet</li>
              <li>Accessible options for wheelchair users</li>
              <li>Online booking, fast confirmations, and secure payments</li>
            </ul>
          </div>
          <div className="pillar-card alt">
            <p className="kicker">Quick guidance</p>
            <h3>Pickups and drop-offs</h3>
            <p className="muted">Taxicab pickups and drop-offs at Jeppesen Terminal are at Level 5, Island 1 (specific doors listed by terminal). Let us know your airline and arrival door for smooth curbside service.</p>
            <div className="meta-list">
              <span className="pill muted">Real-time coordination</span>
              <span className="pill muted">Local dispatchers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
