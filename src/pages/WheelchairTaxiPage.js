import CallButton from '../components/CallButton'
import SEO from '../components/SEO'

const SITE_URL = 'https://www.transvoyagetaxi.com'

const WHEELCHAIR_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Wheelchair Accessible Taxi', item: `${SITE_URL}/wheelchair-accessible-taxi` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/wheelchair-accessible-taxi#service`,
      provider: { '@id': `${SITE_URL}/#business` },
      name: 'Wheelchair Accessible Taxi & NEMT — Denver Metro, CO',
      description: 'ADA-compliant wheelchair-accessible taxi and non-emergency medical transport (NEMT) in Denver, Aurora, Lakewood, Englewood, and the greater Denver metro area. NEMT-trained drivers available 24/7.',
      serviceType: ['WheelchairTransport', 'NEMT', 'TaxiService'],
      url: `${SITE_URL}/wheelchair-accessible-taxi`,
      areaServed: [
        { '@type': 'City', name: 'Denver', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Aurora', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Lakewood', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Englewood', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Centennial', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Westminster', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Thornton', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Arvada', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Littleton', addressRegion: 'CO', addressCountry: 'US' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Trans Voyage Taxi offer wheelchair-accessible vehicles in Denver?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Trans Voyage Taxi provides ADA-compliant wheelchair-accessible vehicles with NEMT-trained drivers throughout the Denver metro area, including Aurora, Lakewood, Englewood, and Centennial. Call (303) 353-4482 to confirm vehicle availability.' },
        },
        {
          '@type': 'Question',
          name: 'What is NEMT and does Trans Voyage Taxi provide it?',
          acceptedAnswer: { '@type': 'Answer', text: 'NEMT stands for Non-Emergency Medical Transport — transportation for people with medical needs or mobility challenges who do not require an ambulance. Trans Voyage Taxi grew from NEMT roots and provides NEMT-trained drivers with ADA-compliant, wheelchair-accessible vehicles for medical appointments, hospital visits, and daily travel in the Denver metro area.' },
        },
        {
          '@type': 'Question',
          name: 'Can I get a wheelchair-accessible taxi to Denver International Airport?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Trans Voyage Taxi provides wheelchair-accessible taxi rides to DIA at PUC flat rates: Downtown Denver ($72.04), Denver Tech Center ($80.04), Boulder ($115.04), and Tower Road / Aurora ($37.04). Call (303) 353-4482 to confirm vehicle availability and book your accessible ride to the airport.' },
        },
        {
          '@type': 'Question',
          name: 'Do I need to book a wheelchair-accessible taxi in advance?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, please call at least 24 hours in advance to reserve a wheelchair-accessible vehicle so we can confirm the right vehicle is available. For medical appointments, let us know the type of wheelchair or mobility equipment when you book. Call (303) 353-4482.' },
        },
        {
          '@type': 'Question',
          name: 'Are Trans Voyage Taxi drivers trained for NEMT passengers?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Trans Voyage Taxi drivers are NEMT-trained and experienced in assisting passengers with mobility challenges, including wheelchair users and those needing boarding assistance. Our NEMT background ensures respectful, safe transport for every rider.' },
        },
      ],
    },
  ],
}

const FAQ_ITEMS = [
  { q: 'What cities do you serve with wheelchair-accessible taxis?', a: 'Trans Voyage Taxi provides wheelchair-accessible transport throughout Denver, Aurora, Lakewood, Englewood, Centennial, Thornton, Westminster, Arvada, Littleton, and the greater Denver metro area.' },
  { q: 'Can I get a wheelchair-accessible taxi to DIA?', a: 'Yes. We provide ADA-accessible taxi rides to Denver International Airport at PUC flat rates. Call (303) 353-4482 to confirm vehicle availability and describe your wheelchair or mobility equipment when you book.' },
  { q: 'Do I need to bring my own ramp or lift?', a: 'No. Our accessible vehicles are equipped with ramps or lifts as appropriate. Let us know the type of wheelchair (manual, power, transport) when you call so we can match the right vehicle to your needs.' },
  { q: 'How much does a wheelchair-accessible taxi cost in Denver?', a: 'City rides in Denver metro follow standard metered rates ($3.50 base + $2.80/mile). Taxi rides to DIA use PUC flat rates. Call (303) 353-4482 for a fare estimate on your specific route.' },
  { q: 'Is NEMT covered by insurance or Medicaid in Colorado?', a: 'Some Medicaid and insurance plans in Colorado cover non-emergency medical transport. Trans Voyage Taxi operates privately — contact your care coordinator for Medicaid NEMT coordination. We can provide receipts for reimbursement upon request.' },
  { q: 'How far in advance should I book?', a: 'Please call at least 24 hours ahead to guarantee an accessible vehicle is available for your trip. For routine medical appointments, booking several days ahead is ideal. Same-day requests are accepted by phone when vehicles are available.' },
]

const WheelchairTaxiPage = ({ openBooking }) => {
  const handleBook = () => { if (openBooking) openBooking() }

  return (
    <div>
      <SEO
        title="Wheelchair Accessible Taxi Denver | NEMT Transport — Trans Voyage Taxi"
        description="ADA-compliant wheelchair-accessible taxi and NEMT transport in Denver, Aurora & metro CO. NEMT-trained drivers, 24/7 availability, taxi to DIA. Call (303) 353-4482."
        canonical="/wheelchair-accessible-taxi"
        keywords="wheelchair accessible taxi Denver, NEMT Denver Colorado, wheelchair taxi Denver CO, ADA taxi Denver, non-emergency medical transport Denver, wheelchair transport Denver metro, accessible taxi Aurora CO, NEMT trained drivers Denver, wheelchair van Denver, medical transport Denver, ADA transportation Denver, disability transport Denver, wheelchair accessible vehicle Denver, NEMT taxi Aurora, handicap taxi Denver, wheelchair accessible DIA taxi, accessible airport taxi Denver, NEMT Denver metro, wheelchair taxi near me Denver"
        schemas={[WHEELCHAIR_SCHEMA]}
      />

      <section className="hero hero-modern">
        <div className="tv-container hero-grid">
          <div className="hero-copy">
            <div className="pill">ADA Accessible · NEMT Trained · Denver Metro</div>
            <h1>Wheelchair-accessible taxi and NEMT transport in Denver.</h1>
            <p className="lead">ADA-compliant vehicles with NEMT-trained drivers for medical appointments, hospital visits, taxi rides to DIA, and daily travel across Denver, Aurora, and the greater metro area. Available 24/7.</p>
            <div className="hero-actions">
              <button className="btn" onClick={handleBook}>Book accessible ride</button>
              <CallButton className="btn secondary" label="(303) 353-4482" />
            </div>
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-value">ADA</div>
                <div className="stat-label">ADA-compliant vehicles</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">NEMT</div>
                <div className="stat-label">Trained drivers</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Dispatch available</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-badge">NEMT Rooted · Licensed &amp; Insured</div>
              <div className="hero-note">
                <div className="note-title">NEMT-trained, ADA-ready</div>
                <p className="muted">Our drivers are trained in NEMT protocols and experienced in assisting wheelchair users and passengers with mobility challenges throughout the Denver metro.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel soft">
        <div className="tv-container">
          <div className="section-head">
            <div>
              <p className="kicker">Accessible transportation — Denver metro</p>
              <h2>Wheelchair-accessible taxi services across Denver, Aurora, and the metro area</h2>
              <p className="muted">Trans Voyage Taxi started as a non-emergency medical transport (NEMT) company. Accessibility is central to who we are — not an add-on feature.</p>
            </div>
            <button className="btn" onClick={handleBook}>Book now</button>
          </div>

          <div className="tile-grid">
            <div className="tile">
              <div className="tile-icon">🏥</div>
              <h3>Medical appointments</h3>
              <p>Reliable, punctual transport to hospitals, clinics, dialysis centers, and doctor's offices across Denver, Aurora, and Lakewood. NEMT-trained drivers for every ride.</p>
              <span className="pill muted">NEMT trained · on-time</span>
            </div>
            <div className="tile">
              <div className="tile-icon">✈️</div>
              <h3>Wheelchair-accessible taxi to DIA</h3>
              <p>ADA-accessible taxi to Denver International Airport at PUC flat rates. Call to confirm vehicle type before booking.</p>
              <span className="pill muted">Flat rate · ADA vehicle</span>
            </div>
            <div className="tile">
              <div className="tile-icon">🏙️</div>
              <h3>Daily Denver metro rides</h3>
              <p>Door-to-door wheelchair-accessible transport for errands, events, and daily travel throughout Denver, Aurora, Lakewood, and the wider metro area.</p>
              <span className="pill muted">Metro-wide coverage</span>
            </div>
            <div className="tile">
              <div className="tile-icon">♿</div>
              <h3>NEMT non-emergency transport</h3>
              <p>Non-emergency medical transport for passengers who need extra assistance but do not require ambulance service. NEMT-trained and experienced drivers.</p>
              <span className="pill muted">NEMT roots · trained staff</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tv-container split-stack">
        <div className="split-card">
          <p className="kicker">What makes us different</p>
          <h3>NEMT training is in our DNA</h3>
          <p className="muted">Trans Voyage Taxi grew from non-emergency medical transport. Respectful, safe service for passengers with mobility challenges is not something we added — it is what we were built to do.</p>
          <ul className="checklist">
            <li>NEMT-trained and experienced drivers</li>
            <li>ADA-compliant wheelchair-accessible vehicles</li>
            <li>Boarding and assistance protocols for every passenger</li>
            <li>Serving Denver, Aurora, Lakewood, Englewood, and metro area</li>
            <li>Flat-rate taxi rides to DIA in accessible vehicles</li>
            <li>24/7 dispatch — call anytime at (303) 353-4482</li>
          </ul>
        </div>
        <div className="split-card alt">
          <p className="kicker">How to book</p>
          <h3>Reserve your accessible ride</h3>
          <ol className="steps">
            <li><strong>Call (303) 353-4482</strong> — describe your mobility equipment and needs.</li>
            <li><strong>We confirm vehicle availability</strong> and your fare upfront.</li>
            <li><strong>Driver arrives on time</strong>, prepared with the right accessible vehicle.</li>
          </ol>
          <p className="muted" style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>Please call to book — accessible vehicles require advance confirmation to guarantee availability for your trip.</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button className="btn" onClick={handleBook}>Book online</button>
            <CallButton className="btn secondary" label="Call (303) 353-4482" />
          </div>
        </div>
      </section>

      <section className="panel soft">
        <div className="tv-container">
          <p className="kicker">Common questions</p>
          <h2>Wheelchair accessible taxi — Denver FAQ</h2>
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
            <p className="kicker">Accessible transport — Denver metro</p>
            <h3>Book a wheelchair-accessible taxi in Denver today</h3>
            <p className="muted">NEMT-trained drivers, ADA-accessible vehicles, 24/7 availability across the Denver metro area. Call or book online.</p>
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

export default WheelchairTaxiPage
