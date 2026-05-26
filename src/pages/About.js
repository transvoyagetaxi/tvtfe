import welcome from '../assets/welcome.png'
import SEO from '../components/SEO'

const SITE_URL = 'https://www.transvoyagetaxi.com'

const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': `${SITE_URL}/about`,
      url: `${SITE_URL}/about`,
      name: "About Trans Voyage Taxi — Denver's Trusted Taxi & NEMT Company",
      description:
        'Trans Voyage Taxi grew from non-emergency medical transport (NEMT) roots to a full-service Denver taxi company. We provide 24/7 DIA airport transfers, ADA-accessible wheelchair transport, NEMT services, and professional city rides across Denver, Aurora, Boulder, and the greater Denver metro area.',
      publisher: { '@id': `${SITE_URL}/#business` },
      about: { '@id': `${SITE_URL}/#business` },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#business`,
      name: 'Trans Voyage Taxi',
      legalName: 'Trans Voyage Taxi',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo512.png`,
        width: 512,
        height: 512,
      },
      telephone: '+13033534482',
      email: 'bookings@transvoyagetaxi.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1450 South Havana Street Ste 712',
        addressLocality: 'Aurora',
        addressRegion: 'CO',
        postalCode: '80012',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Denver', addressRegion: 'CO' },
        { '@type': 'City', name: 'Aurora', addressRegion: 'CO' },
        { '@type': 'City', name: 'Boulder', addressRegion: 'CO' },
        { '@type': 'City', name: 'Lakewood', addressRegion: 'CO' },
        { '@type': 'City', name: 'Englewood', addressRegion: 'CO' },
        { '@type': 'City', name: 'Centennial', addressRegion: 'CO' },
        { '@type': 'City', name: 'Arvada', addressRegion: 'CO' },
        { '@type': 'City', name: 'Westminster', addressRegion: 'CO' },
      ],
      knowsAbout: [
        'Taxi Service Denver',
        'DIA Airport Transfers',
        'Non-Emergency Medical Transport (NEMT)',
        'Wheelchair Accessible Transport Denver',
        'Denver Metro Transportation',
        'Aurora Colorado Taxi',
      ],
    },
  ],
}

const About = () => {
  return (
    <div className="tv-container about-page">
      <SEO
        title="About Trans Voyage Taxi — Denver Taxi & NEMT Company | Aurora, CO"
        description="Trans Voyage Taxi: Denver's NEMT-rooted taxi company based in Aurora, CO. ADA-accessible vehicles, 24/7 DIA airport transfers, vetted professional drivers. Serving the full Denver metro area."
        canonical="/about"
        keywords="Trans Voyage Taxi, Denver taxi company, NEMT Denver Colorado, wheelchair accessible taxi Colorado, airport taxi Aurora CO, reliable taxi service Denver, non-emergency medical transport Colorado, Denver taxi about"
        schemas={[ABOUT_SCHEMA]}
      />
      <div className="about-hero">
        <div className="about-text">
          <p className="kicker">About us</p>
          <h2>Built from NEMT roots — Denver's trusted taxi &amp; accessible transport company</h2>
          <p className="lead">Trans Voyage Taxi grew from non-emergency medical transport (NEMT) to a full-service taxi company serving Denver, Aurora, Boulder, and the greater Denver metro area. We bring the same care, safety, and professionalism to every DIA airport transfer, city ride, and delivery.</p>
          <div className="meta-list">
            <span className="pill muted">Denver &amp; Aurora based</span>
            <span className="pill muted">ADA ready · NEMT trained</span>
            <span className="pill muted">24/7 dispatch</span>
          </div>
        </div>

        <div className="about-visual">
          <img src={welcome} alt="Trans Voyage Taxi — Denver taxi and NEMT service team" className="about-image" />
        </div>
      </div>

      <div className="panel soft about-panels">
        <div className="story-block">
          <h3>Our story</h3>
          <p>We expanded beyond NEMT to better serve travelers, neighbors, and businesses across Denver and Aurora. The same commitment to safety and customer care that defined our medical transport roots now powers our full taxi service — from DIA airport runs to daily city rides.</p>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <h4>Growth mindset</h4>
            <p>We welcome healthy competition because it pushes us to raise the bar for service, punctuality, and comfort across every Denver neighborhood we serve.</p>
          </div>
          <div className="story-card">
            <h4>Community pride</h4>
            <p>We are proud of our drivers and the loyalty of our riders in Denver, Aurora, and beyond. Their trust fuels our commitment to quality.</p>
          </div>
        </div>

        <div className="story-block">
          <h3>Mission</h3>
          <p>Our mission is to get you the most for your fare: safe, clean vehicles — sedans, minivans, and wheelchair-accessible options — professional drivers, on-time pickups, and clear communication for every ride in the Denver metro area.</p>
        </div>

        <div className="story-block">
          <h3>Core values</h3>
          <ul className="checklist">
            <li>Safety and professionalism on every ride</li>
            <li>Accessibility and inclusivity — ADA-compliant vehicles and NEMT-trained drivers</li>
            <li>Helpful technology and convenient online booking</li>
            <li>Community-focused service across Denver, Aurora, and the metro area</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
