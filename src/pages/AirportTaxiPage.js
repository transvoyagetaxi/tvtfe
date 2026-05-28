import CallButton from '../components/CallButton'
import SEO from '../components/SEO'

const SITE_URL = 'https://www.transvoyagetaxi.com'

const AIRPORT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Airport Taxi to DIA', item: `${SITE_URL}/airport-taxi` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/airport-taxi#service`,
      provider: { '@id': `${SITE_URL}/#business` },
      name: 'Denver Airport Taxi — Taxi to DIA',
      description: 'Flat-rate taxi to and from Denver International Airport (DIA). PUC-approved zone rates, no surge pricing, 24/7 availability, and real-time flight tracking.',
      serviceType: 'TaxiService',
      url: `${SITE_URL}/airport-taxi`,
      areaServed: [
        { '@type': 'Place', name: 'Denver International Airport', alternateName: ['DIA', 'DEN'] },
        { '@type': 'City', name: 'Denver', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Aurora', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Boulder', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Lakewood', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Englewood', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Centennial', addressRegion: 'CO', addressCountry: 'US' },
      ],
      offers: [
        { '@type': 'Offer', name: 'Downtown Denver to DIA', price: '72.04', priceCurrency: 'USD', availability: 'https://schema.org/InStock', seller: { '@id': `${SITE_URL}/#business` } },
        { '@type': 'Offer', name: 'Boulder to DIA', price: '115.04', priceCurrency: 'USD', availability: 'https://schema.org/InStock', seller: { '@id': `${SITE_URL}/#business` } },
        { '@type': 'Offer', name: 'Denver Tech Center to DIA', price: '80.04', priceCurrency: 'USD', availability: 'https://schema.org/InStock', seller: { '@id': `${SITE_URL}/#business` } },
        { '@type': 'Offer', name: 'Tower Road / Aurora to DIA', price: '37.04', priceCurrency: 'USD', availability: 'https://schema.org/InStock', seller: { '@id': `${SITE_URL}/#business` } },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much is a taxi from downtown Denver to Denver International Airport?',
          acceptedAnswer: { '@type': 'Answer', text: 'Trans Voyage Taxi charges a flat rate of $72.04 from Downtown Denver to Denver International Airport (DIA), airport access fee included. The same rate applies from DIA back to downtown Denver.' },
        },
        {
          '@type': 'Question',
          name: 'Where do taxis pick up at DIA?',
          acceptedAnswer: { '@type': 'Answer', text: "Taxi pickups at Denver International Airport are on Level 5, Island 1 of the Jeppesen Terminal. Trans Voyage Taxi tracks your flight arrival and coordinates curbside pickup — just provide your flight number when you book." },
        },
        {
          '@type': 'Question',
          name: 'Is a taxi to DIA cheaper than Uber or Lyft?',
          acceptedAnswer: { '@type': 'Answer', text: "Denver PUC-approved flat taxi rates to DIA never surge. Trans Voyage Taxi charges $72.04 from Downtown Denver — fixed, regardless of demand or weather. Uber and Lyft use dynamic surge pricing that can spike significantly during bad weather, events, or peak demand." },
        },
        {
          '@type': 'Question',
          name: 'What happens if my flight to DIA is delayed?',
          acceptedAnswer: { '@type': 'Answer', text: "Trans Voyage Taxi tracks your flight in real time. If your flight is delayed, we adjust your pickup time automatically at no extra charge. Just provide your flight number when you book and we handle the rest." },
        },
        {
          '@type': 'Question',
          name: 'How early should I book a taxi to DIA?',
          acceptedAnswer: { '@type': 'Answer', text: 'We recommend booking at least 24 hours in advance, especially for early-morning flights. Same-day requests are accepted — call (303) 353-4482.' },
        },
        {
          '@type': 'Question',
          name: 'Do Trans Voyage Taxi flat rates apply in both directions?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. PUC flat rates apply whether you are going to DIA or coming from DIA — same zone, same price, both ways.' },
        },
      ],
    },
  ],
}

const FAQ_ITEMS = [
  { q: 'How much is a taxi from downtown Denver to DIA?', a: 'Trans Voyage Taxi charges a flat rate of $72.04 from Downtown Denver to Denver International Airport, airport access fee included. The same rate applies from DIA back to downtown Denver.' },
  { q: 'Where do I get picked up at DIA?', a: "At DIA's Jeppesen Terminal, taxis pick up on Level 5, Island 1. When you book with Trans Voyage Taxi, we track your flight and time the pickup to your arrival — so you don't wait at the curb." },
  { q: 'Are the DIA flat rates the same in both directions?', a: 'Yes. PUC flat rates apply to DIA and from DIA. Same zone, same price, both ways.' },
  { q: 'Is there extra charge for late-night or holiday rides to DIA?', a: 'No. Trans Voyage Taxi flat rates are fixed 24/7, including weekends and holidays. We never apply surge pricing.' },
  { q: 'What if my neighborhood is not in a flat-rate zone?', a: 'Locations outside the four PUC flat-rate zones are served at standard Denver metered rates: $3.50 base + $2.80/mile + $5.03 airport access fee. Call (303) 353-4482 for an estimate.' },
  { q: 'Can I get a wheelchair-accessible taxi to DIA?', a: 'Yes. Trans Voyage Taxi has ADA-accessible vehicles with NEMT-trained drivers. Please mention your mobility needs when booking so we can assign the right vehicle.' },
]

const AirportTaxiPage = ({ openBooking }) => {
  const handleBook = () => { if (openBooking) openBooking() }

  return (
    <div>
      <SEO
        title="Denver Airport Taxi | Flat-Rate Taxi to DIA — Trans Voyage Taxi"
        description="Flat-rate taxi to Denver International Airport (DIA): Downtown $72 · DTC $80 · Boulder $115 · Aurora $37. No surge pricing, 24/7, flight tracking. Call (303) 353-4482."
        canonical="/airport-taxi"
        keywords="DIA taxi, Denver airport taxi, taxi to DIA, taxi from Denver to DIA, flat rate taxi DIA, airport taxi Denver CO, Denver International Airport taxi, taxi to Denver airport, DIA cab, cab to DIA, taxi DIA 24 hours, taxi to DIA no surge, DIA taxi flat rate, Denver airport cab service, ride to DIA Denver, DIA to downtown Denver taxi, DIA to Boulder taxi, DIA to Denver Tech Center taxi, DIA to Aurora taxi, how much is a taxi to DIA, best taxi to DIA Denver, Trans Voyage Taxi DIA, Denver taxi to airport, taxi DIA no surge pricing"
        schemas={[AIRPORT_SCHEMA]}
      />

      <section className="hero hero-modern">
        <div className="tv-container hero-grid">
          <div className="hero-copy">
            <div className="pill">Denver International Airport · DIA · DEN</div>
            <h1>Flat-rate taxi to DIA — no surge, 24/7, flight tracking included.</h1>
            <p className="lead">PUC-approved flat rates for your taxi to Denver International Airport. We track your flight and have a driver ready when you land — or we'll get you to the terminal on time. No apps, no surge pricing.</p>
            <div className="hero-actions">
              <button className="btn" onClick={handleBook}>Book taxi to DIA</button>
              <CallButton className="btn secondary" label="(303) 353-4482" />
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-value">$72</div>
                <div className="stat-label">Downtown Denver ↔ DIA</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">$37</div>
                <div className="stat-label">Aurora / Tower Rd ↔ DIA</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">$0</div>
                <div className="stat-label">Surge fees — ever</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-badge">PUC Licensed · Insured</div>
              <div className="hero-note">
                <div className="note-title">Flat rates in both directions — DIA to Denver &amp; Denver to DIA</div>
                <p className="muted">Same zone, same price. Airport access fee always included — no surprises at the end of the ride.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel soft">
        <div className="tv-container">
          <div className="section-head">
            <div>
              <p className="kicker">PUC-approved flat rates</p>
              <h2>Taxi to DIA — flat rates, both ways, access fee included</h2>
              <p className="muted">Colorado PUC zone fares apply to taxi rides to and from Denver International Airport. The airport access fee is always built in.</p>
            </div>
            <button className="btn" onClick={handleBook}>Book your ride</button>
          </div>

          <div className="tile-grid">
            <div className="tile">
              <div className="tile-icon">🏙️</div>
              <h3>Downtown Denver ↔ DIA</h3>
              <p>Flat-rate taxi from downtown Denver, LoDo, Capitol Hill, and the Denver CBD to and from Denver International Airport.</p>
              <span className="pill muted">$72.04 · access fee included</span>
            </div>
            <div className="tile">
              <div className="tile-icon">🏢</div>
              <h3>Denver Tech Center ↔ DIA</h3>
              <p>Direct taxi between DTC, Greenwood Village, and Denver International Airport at a fixed flat rate.</p>
              <span className="pill muted">$80.04 · access fee included</span>
            </div>
            <div className="tile">
              <div className="tile-icon">🏔️</div>
              <h3>Boulder ↔ DIA</h3>
              <p>Private taxi between Boulder, CO and Denver International Airport — no shared stops, fixed price.</p>
              <span className="pill muted">$115.04 · access fee included</span>
            </div>
            <div className="tile">
              <div className="tile-icon">📍</div>
              <h3>Aurora / Tower Road ↔ DIA</h3>
              <p>Closest flat-rate zone to DIA — Aurora and Tower Road corridor offer the lowest fixed taxi fare to the airport.</p>
              <span className="pill muted">$37.04 · access fee included</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tv-container split-stack">
        <div className="split-card">
          <p className="kicker">Why choose Trans Voyage Taxi for DIA</p>
          <h3>No surprises from pickup to the terminal</h3>
          <ul className="checklist">
            <li>Fixed flat rates — no surge pricing, not even on holidays</li>
            <li>Real-time flight tracking — driver adjusts if your flight is delayed</li>
            <li>Curbside pickup at Level 5, Island 1 of the Jeppesen Terminal</li>
            <li>24/7 dispatch — early morning, late night, any day of the year</li>
            <li>Licensed, insured, PUC-approved Colorado taxi operator</li>
            <li>Sedans, minivans, and wheelchair-accessible vehicles available</li>
          </ul>
        </div>
        <div className="split-card alt">
          <p className="kicker">How to book your taxi to DIA</p>
          <h3>Three steps to a confirmed ride</h3>
          <ol className="steps">
            <li><strong>Call or book online</strong> — pickup address, date, time, and flight number.</li>
            <li><strong>Fare confirmed</strong> — flat rate locked in, no hidden charges.</li>
            <li><strong>Driver on time</strong> — or tracking your arrival if you're landing at DIA.</li>
          </ol>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button className="btn" onClick={handleBook}>Book online</button>
            <CallButton className="btn secondary" label="Call (303) 353-4482" />
          </div>
        </div>
      </section>

      <section className="panel soft">
        <div className="tv-container">
          <p className="kicker">Common questions</p>
          <h2>Taxi to DIA — frequently asked questions</h2>
          <div className="faq-list">
            {FAQ_ITEMS.map(({ q, a }) => (
              <details className="faq-item" key={q}>
                <summary><strong>{q}</strong></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="tv-container cta-content">
          <div>
            <p className="kicker">Ready to book?</p>
            <h3>Book your taxi to DIA now</h3>
            <p className="muted">Flat rates, no surge pricing, 24/7 dispatch across the Denver metro area. Call or book online in seconds.</p>
          </div>
          <div className="cta-actions">
            <button className="btn" onClick={handleBook}>Book a ride</button>
            <CallButton className="btn secondary" label="Call (303) 353-4482" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AirportTaxiPage
