import SEO from '../components/SEO'

const SITE_URL = 'https://www.transvoyagetaxi.com'

const DRIVE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Drive with Us', item: `${SITE_URL}/drive` },
      ],
    },
    {
      '@type': 'JobPosting',
      '@id': `${SITE_URL}/drive#job`,
      title: 'Professional Taxi Driver — Denver Metro',
      description: 'Trans Voyage Taxi is seeking professional, courteous drivers for 24/7 taxi and NEMT service across the Denver metro area. Full-time, part-time, and flexible shifts available. PUC-licensed operation.',
      hiringOrganization: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#business`,
        name: 'Trans Voyage Taxi',
        sameAs: SITE_URL,
      },
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1450 South Havana Street Ste 712',
          addressLocality: 'Aurora',
          addressRegion: 'CO',
          postalCode: '80012',
          addressCountry: 'US',
        },
      },
      employmentType: ['FULL_TIME', 'PART_TIME', 'CONTRACTOR'],
      datePosted: '2025-01-01',
      validThrough: '2026-12-31',
      applicantLocationRequirements: {
        '@type': 'Country',
        name: 'US',
      },
    },
  ],
}

const BENEFITS = [
  {
    icon: '🗓️',
    title: 'Flexible scheduling',
    desc: 'Choose the hours that work for you — full-time, part-time, weekends, or nights. We work around your life.',
  },
  {
    icon: '💰',
    title: 'Competitive earnings',
    desc: 'Earn on flat-rate DIA airport runs and metered city trips with consistent demand year-round.',
  },
  {
    icon: '🤝',
    title: 'Supportive team',
    desc: 'Join a team that values professionalism. We provide onboarding, dispatch support, and ongoing guidance.',
  },
  {
    icon: '♿',
    title: 'Make a difference',
    desc: 'Our NEMT routes help Denver residents get to medical appointments when they need it most — meaningful work.',
  },
]

const REQUIREMENTS = [
  'Valid Colorado driver\'s license in good standing',
  'Clean driving record (MVR check required)',
  'Ability to pass a background check',
  'Professional, courteous attitude toward passengers',
  'Reliable transportation or willingness to use company vehicles',
  'Smartphone for dispatch communication',
]

const DrivePage = ({ openDrive }) => (
  <div>
    <SEO
      title="Drive with Trans Voyage Taxi | Denver Taxi Driver Opportunities"
      description="Join the Trans Voyage Taxi team in Denver. Flexible schedules, competitive pay, full-time and part-time shifts available. Apply to drive for Denver's trusted taxi and NEMT service."
      canonical="/drive"
      keywords="taxi driver jobs Denver, drive for Trans Voyage Taxi, Denver taxi driver, NEMT driver Denver, taxi job Denver CO, cab driver Denver, part time taxi driver Denver, full time taxi driver Colorado"
      schemas={[DRIVE_SCHEMA]}
    />

    <section className="drive-hero">
      <div className="tv-container">
        <div className="pill">Denver Metro · Aurora · DIA</div>
        <h1>Drive with Trans Voyage Taxi</h1>
        <p className="lead">Join Denver's trusted taxi and NEMT team. Flexible hours, steady demand, and a dispatch team that has your back — 24/7.</p>
        <div className="hero-actions">
          <button className="btn" onClick={openDrive}>Apply now</button>
          <a className="btn secondary" href="mailto:bookings@transvoyagetaxi.com?subject=Driver inquiry">Email us first</a>
        </div>
      </div>
    </section>

    <section className="panel soft">
      <div className="tv-container">
        <div className="section-head">
          <div>
            <p className="kicker">Why drive with us</p>
            <h2>A team built on respect and reliability</h2>
            <p className="muted">Trans Voyage Taxi started as an NEMT provider and has grown into a full-service Denver taxi company. We treat our drivers the same way we treat our riders — with honesty, care, and professionalism.</p>
          </div>
        </div>
        <div className="tile-grid">
          {BENEFITS.map(b => (
            <div className="tile" key={b.title}>
              <div className="tile-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="tv-container split-stack">
      <div className="split-card">
        <p className="kicker">What we're looking for</p>
        <h3>Driver requirements</h3>
        <p className="muted">We hold our drivers to a high standard because our passengers depend on us. Here's what you'll need to get started:</p>
        <ul className="checklist">
          {REQUIREMENTS.map(r => <li key={r}>{r}</li>)}
        </ul>
      </div>
      <div className="split-card alt">
        <p className="kicker">Ready to apply?</p>
        <h3>It only takes two minutes</h3>
        <p className="muted">Fill out a short application and we'll reach out to walk you through the next steps. No complicated forms — just your basic info and we'll take it from there.</p>
        <div className="split-actions">
          <button className="btn" onClick={openDrive}>Start application</button>
        </div>
      </div>
    </section>

    <section className="cta-banner">
      <div className="tv-container cta-content">
        <div>
          <p className="kicker">Join the team</p>
          <h3>Ready to drive for Denver's trusted taxi company?</h3>
          <p className="muted">Call us at (303) 353-4482 or apply online — we'll get back to you quickly.</p>
        </div>
        <div className="cta-actions">
          <button className="btn" onClick={openDrive}>Apply now</button>
          <a className="btn secondary" href="tel:+13033534482">Call (303) 353-4482</a>
        </div>
      </div>
    </section>
  </div>
)

export default DrivePage
