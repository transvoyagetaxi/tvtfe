import { Link } from 'react-router-dom'
import hero from '../assets/downtown.jpeg'
import CallButton from '../components/CallButton'
import FunWidget from '../components/FunWidget'
import LiveWidget from '../components/LiveWidget'
import SEO from '../components/SEO'

const SITE_URL = 'https://www.transvoyagetaxi.com'

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'TaxiService'],
      '@id': `${SITE_URL}/#business`,
      name: 'Trans Voyage Taxi',
      legalName: 'Trans Voyage Taxi',
      description:
        'Trans Voyage Taxi is a Denver-based taxi and transportation company providing 24/7 airport transfers to DIA, city rides, wheelchair-accessible transport, and package delivery across the Denver metro area.',
      url: SITE_URL,
      telephone: '+13033534482',
      email: 'bookings@transvoyagetaxi.com',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo192.png`,
        width: 192,
        height: 192,
      },
      image: `${SITE_URL}/logo192.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1450 South Havana Street Ste 712',
        addressLocality: 'Aurora',
        addressRegion: 'CO',
        postalCode: '80012',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 39.7175,
        longitude: -104.8348,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card',
      areaServed: [
        { '@type': 'City', name: 'Denver', addressRegion: 'CO' },
        { '@type': 'City', name: 'Aurora', addressRegion: 'CO' },
        { '@type': 'City', name: 'Boulder', addressRegion: 'CO' },
        { '@type': 'Place', name: 'Denver International Airport' },
        { '@type': 'City', name: 'Lakewood', addressRegion: 'CO' },
        { '@type': 'City', name: 'Englewood', addressRegion: 'CO' },
        { '@type': 'City', name: 'Centennial', addressRegion: 'CO' },
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 39.7392,
          longitude: -104.9903,
        },
        geoRadius: '80000',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Trans Voyage Taxi Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'TaxiService',
              name: 'DIA Airport Transfer — Downtown Denver',
              description: 'Flat-rate taxi from Downtown Denver to Denver International Airport',
            },
            price: '56.03',
            priceCurrency: 'USD',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'TaxiService',
              name: 'DIA Airport Transfer — Boulder',
              description: 'Flat-rate taxi from Boulder to Denver International Airport',
            },
            price: '89.03',
            priceCurrency: 'USD',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'TaxiService',
              name: 'Wheelchair-Accessible Taxi',
              description: 'ADA-compliant taxi with NEMT-trained drivers for medical and daily transport',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Package Delivery Denver',
              description: 'Same-day and scheduled delivery in the Denver metro area',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Trans Voyage Taxi',
      description: 'Denver taxi service — 24/7 airport transfers, accessible rides, city transport',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
  ],
}

const HOME_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a taxi from Denver to DIA cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trans Voyage Taxi offers flat-rate service from Downtown Denver to DIA for $56.03 (airport access fee included). Boulder to DIA is $89.03, Denver Tech Center to DIA is $62.03, and Tower Road to DIA is $29.03.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer wheelchair-accessible taxis in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi provides wheelchair-accessible vehicles with NEMT-trained drivers for medical visits and daily travel throughout the Denver metro area. Call (303) 353-4482 to confirm availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Trans Voyage Taxi available 24/7 for airport pickups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Trans Voyage Taxi operates 24 hours a day, 7 days a week for airport transfers to and from Denver International Airport (DIA). We monitor flight arrivals for real-time coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do taxis pick up passengers at Denver International Airport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Taxi pickups at Denver International Airport's Jeppesen Terminal are located at Level 5, Island 1. Let us know your airline and arrival door for smooth curbside service.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a taxi in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book a Trans Voyage Taxi ride online at transvoyagetaxi.com, by email at bookings@transvoyagetaxi.com, or by calling (303) 353-4482 anytime. Share your pickup address, date, time, and destination to get a fast confirmation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Trans Voyage Taxi serve the Denver Tech Center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi serves the Denver Tech Center and all surrounding neighborhoods with flat-rate airport transfers ($62.03 to DIA) and on-demand city rides.',
      },
    },
  ],
}

const Home = ({ openBooking }) => {
  const handleBook = () => {
    if (openBooking) openBooking()
  }

  return (
    <div>
      <SEO
        title="Denver Taxi Service | Trans Voyage Taxi — 24/7 DIA Airport Transfers"
        description="Denver's reliable taxi service. Flat-rate airport transfers to DIA, wheelchair-accessible rides, city metro trips, and package delivery. Available 24/7 — call (303) 353-4482."
        canonical="/"
        schemas={[LOCAL_BUSINESS_SCHEMA, HOME_FAQ_SCHEMA]}
      />

      <section className="hero hero-modern">
        <div className="tv-container hero-grid">
          <div className="hero-copy">
            <div className="pill">Denver Metro & DIA</div>
            <h1>Modern taxi service built for on-time airport and city rides.</h1>
            <p className="lead">Flat-rate airport trips, ADA-friendly vehicles, and professional drivers who know Denver. Book online in seconds or call us anytime.</p>

            <div className="hero-actions">
              <button className="btn" onClick={handleBook}>Book a Ride</button>
              <Link to="/services" className="btn secondary">See services</Link>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Airport & metro coverage</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">ADA</div>
                <div className="stat-label">Wheelchair-accessible rides</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">Flat rates</div>
                <div className="stat-label">Simple pricing to/from DIA</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-badge">Licensed • Insured</div>
              <img src={hero} alt="Denver skyline at dusk" className="hero-image" />
              <div className="hero-note">
                <div className="note-title">Ride-ready vehicles</div>
                <p className="muted">Sedans, minivans, and wheelchair-accessible options available on request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel tv-container widgets-panel">
        <div className="panel-header">
          <div>
            <p className="kicker">Plan smarter</p>
            <h2>Live updates and quick booking</h2>
            <p className="muted">Check time and weather in Denver, browse local tips, and reserve your ride without waiting on hold.</p>
          </div>
          <div className="panel-actions">
            <button className="btn ghost" onClick={handleBook}>Open booking</button>
          </div>
        </div>

        <div className="widget-grid">
          <div className="widget-card">
            <FunWidget />
          </div>
          <div className="widget-card">
            <LiveWidget />
          </div>
          <div className="widget-card quick-card">
            <div className="quick-card-top">
              <h3>Quick book</h3>
              <p className="muted">Email us your pickup details and we will confirm right away.</p>
            </div>
            <div className="quick-card-actions">
              <button className="btn" onClick={handleBook}>Book now</button>
              <CallButton className="btn secondary" label="(303) 353-4482" />
            </div>
          </div>
        </div>
      </section>

      <section className="panel soft">
        <div className="tv-container">
          <div className="section-head">
            <div>
              <p className="kicker">What we do</p>
              <h2>Dependable rides for every itinerary</h2>
              <p className="muted">Airport runs, city trips, scheduled delivery, and ADA-ready transport with drivers who know Denver inside and out.</p>
            </div>
            <Link to="/services" className="btn secondary">Explore services</Link>
          </div>

          <div className="tile-grid">
            <div className="tile">
              <div className="tile-icon">✈️</div>
              <h3>24/7 airport transfers</h3>
              <p>Flat-rate trips to and from DIA with real-time flight awareness and curbside pickup.</p>
              <span className="pill muted">Flat rate + access fee included</span>
            </div>
            <div className="tile">
              <div className="tile-icon">🧭</div>
              <h3>City & metro rides</h3>
              <p>Door-to-door transport across the Denver metro area for errands, events, and commutes.</p>
              <span className="pill muted">Local expertise</span>
            </div>
            <div className="tile">
              <div className="tile-icon">🧊</div>
              <h3>Package delivery</h3>
              <p>Secure delivery for time-sensitive items anywhere in Denver and surrounding areas.</p>
              <span className="pill muted">Scheduled or on-demand</span>
            </div>
            <div className="tile">
              <div className="tile-icon">♿</div>
              <h3>Accessible transport</h3>
              <p>Wheelchair-accessible vehicles and experienced NEMT-trained drivers for medical visits and daily travel.</p>
              <span className="pill muted">ADA ready</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tv-container split-stack">
        <div className="split-card">
          <p className="kicker">Service promise</p>
          <h3>Comfort, safety, and punctuality every time</h3>
          <p className="muted">We invest in driver training, maintained vehicles, and fast communication so you can travel with confidence.</p>
          <ul className="checklist">
            <li>Professional, vetted drivers</li>
            <li>Real people to confirm your ride</li>
            <li>Clean, comfortable fleet with options for every party size</li>
            <li>Live updates for airport pickups</li>
          </ul>
        </div>
        <div className="split-card alt">
          <p className="kicker">How to ride</p>
          <h3>Three easy steps</h3>
          <ol className="steps">
            <li><strong>Share your pickup</strong> — address, date, time, and destination.</li>
            <li><strong>We confirm</strong> the fare details and vehicle fit.</li>
            <li><strong>Ride arrives</strong> on time with a driver who knows the route.</li>
          </ol>
          <Link to="/about" className="btn ghost">Meet the team</Link>
        </div>
      </section>

      <section className="cta-banner">
        <div className="tv-container cta-content">
          <div>
            <p className="kicker">Always on</p>
            <h3>Ready for your next trip?</h3>
            <p className="muted">Call us or book online in seconds. We will confirm quickly and keep you updated.</p>
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

export default Home
