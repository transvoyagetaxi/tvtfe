import { Link } from 'react-router-dom'
import hero from '../assets/downtown.jpeg'
import CallButton from '../components/CallButton'
import FareEstimator from '../components/FareEstimator'
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
      alternateName: 'Trans Voyage Taxi Denver',
      description:
        'Trans Voyage Taxi is a Denver-based taxi company providing 24/7 flat-rate airport transfers to DIA, city rides, wheelchair-accessible NEMT transport, and package delivery across the Denver metro area including Aurora, Boulder, Lakewood, Englewood, Centennial, Arvada, and Westminster. Licensed, insured, and staffed by NEMT-trained professional drivers.',
      url: SITE_URL,
      telephone: '+13033534482',
      email: 'bookings@transvoyagetaxi.com',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo512.png`,
        width: 512,
        height: 512,
      },
      image: `${SITE_URL}/logo512.png`,
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
      hasMap: 'https://maps.google.com/?q=Trans+Voyage+Taxi+1450+South+Havana+Street+Suite+712+Aurora+CO+80012',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+13033534482',
        contactType: 'reservations',
        areaServed: 'Denver Metro Area, CO',
        availableLanguage: 'English',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
      areaServed: [
        { '@type': 'City', name: 'Denver', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Aurora', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Boulder', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Lakewood', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Englewood', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Centennial', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Arvada', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Westminster', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Thornton', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Littleton', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'City', name: 'Broomfield', addressRegion: 'CO', addressCountry: 'US' },
        { '@type': 'Place', name: 'Denver International Airport', alternateName: ['DIA', 'DEN'] },
        { '@type': 'Place', name: 'Denver Tech Center', alternateName: 'DTC' },
        { '@type': 'Place', name: 'Cherry Creek, Denver' },
        { '@type': 'Place', name: 'LoDo, Denver' },
        { '@type': 'Place', name: 'Capitol Hill, Denver' },
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
      knowsAbout: [
        'Airport Transportation Denver',
        'DIA Taxi Service',
        'Wheelchair Accessible Transport Denver',
        'NEMT Non-Emergency Medical Transport',
        'Denver Taxi Service',
        'Package Delivery Denver',
        'Denver International Airport Transfers',
        'Aurora Colorado Taxi Service',
        'Boulder to DIA Transportation',
        'Denver Tech Center to DIA Taxi',
      ],
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible Vehicles', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Credit Card Accepted', value: true },
        { '@type': 'LocationFeatureSpecification', name: '24-Hour Service', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'NEMT Trained Drivers', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Flight Tracking for Airport Pickups', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Flat Rate Airport Pricing', value: true },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Trans Voyage Taxi Services',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Downtown Denver to DIA Taxi — Flat Rate',
            description: 'Flat-rate taxi from Downtown Denver to Denver International Airport (DIA). Airport access fee included. Available 24/7.',
            price: '72.04',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '72.04',
              priceCurrency: 'USD',
              valueAddedTaxIncluded: true,
            },
            itemOffered: {
              '@type': 'TaxiService',
              name: 'Downtown Denver to DIA Taxi',
              provider: { '@id': `${SITE_URL}/#business` },
            },
            seller: { '@id': `${SITE_URL}/#business` },
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Boulder to DIA Taxi — Flat Rate',
            description: 'Flat-rate taxi from Boulder to Denver International Airport (DIA). Airport access fee included.',
            price: '115.04',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '115.04',
              priceCurrency: 'USD',
              valueAddedTaxIncluded: true,
            },
            itemOffered: {
              '@type': 'TaxiService',
              name: 'Boulder to DIA Taxi',
              provider: { '@id': `${SITE_URL}/#business` },
            },
            seller: { '@id': `${SITE_URL}/#business` },
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Denver Tech Center to DIA Taxi — Flat Rate',
            description: 'Flat-rate taxi from Denver Tech Center (DTC) to Denver International Airport. Airport access fee included.',
            price: '80.04',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '80.04',
              priceCurrency: 'USD',
              valueAddedTaxIncluded: true,
            },
            itemOffered: {
              '@type': 'TaxiService',
              name: 'Denver Tech Center to DIA Taxi',
              provider: { '@id': `${SITE_URL}/#business` },
            },
            seller: { '@id': `${SITE_URL}/#business` },
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Tower Road / Aurora to DIA Taxi — Flat Rate',
            description: 'Flat-rate taxi from Tower Road / Aurora area to Denver International Airport.',
            price: '37.04',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '37.04',
              priceCurrency: 'USD',
              valueAddedTaxIncluded: true,
            },
            itemOffered: {
              '@type': 'TaxiService',
              name: 'Tower Road to DIA Taxi',
              provider: { '@id': `${SITE_URL}/#business` },
            },
            seller: { '@id': `${SITE_URL}/#business` },
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Wheelchair-Accessible NEMT Taxi Denver',
            description: 'ADA-compliant wheelchair-accessible taxi service in Denver metro area. NEMT-trained drivers for medical appointments, hospital visits, and daily travel.',
            itemOffered: {
              '@type': 'TaxiService',
              name: 'Wheelchair Accessible Taxi Denver',
              provider: { '@id': `${SITE_URL}/#business` },
            },
            seller: { '@id': `${SITE_URL}/#business` },
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Denver Metro City Rides',
            description: 'On-demand metered taxi rides across the Denver metro area. $3.50 base fare plus $2.65 per mile.',
            itemOffered: {
              '@type': 'TaxiService',
              name: 'Denver City Taxi Service',
              provider: { '@id': `${SITE_URL}/#business` },
            },
            seller: { '@id': `${SITE_URL}/#business` },
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'Same-Day Package Delivery Denver',
            description: 'Scheduled and on-demand package delivery throughout the Denver metro area.',
            itemOffered: {
              '@type': 'Service',
              name: 'Denver Package Delivery',
              provider: { '@id': `${SITE_URL}/#business` },
            },
            seller: { '@id': `${SITE_URL}/#business` },
            availability: 'https://schema.org/InStock',
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Trans Voyage Taxi',
      description: 'Denver taxi service — 24/7 DIA airport transfers, wheelchair-accessible NEMT rides, and city transport across the Denver metro area.',
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-US',
    },
  ],
}

const HOME_FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a taxi from Downtown Denver to DIA cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trans Voyage Taxi charges a flat rate of $72.04 from Downtown Denver to Denver International Airport (DIA), airport access fee included — no hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a taxi from Boulder to Denver International Airport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The flat-rate taxi fare from Boulder to Denver International Airport (DIA) with Trans Voyage Taxi is $115.04, airport access fee included.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a taxi from Denver Tech Center to DIA cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trans Voyage Taxi offers a flat rate of $80.04 from the Denver Tech Center (DTC) to Denver International Airport, airport access fee included.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Denver taxi rate per mile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Denver metered taxicab rates are $3.50 base fare plus $2.80 per mile. A waiting/slow-traffic rate of $0.40 per minute applies when the vehicle travels under 15 mph. A $5.03 airport access fee is added for trips to or from Denver International Airport (DIA).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Trans Voyage Taxi available 24 hours a day, 7 days a week?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi operates 24/7, including holidays. We provide round-the-clock airport transfers to and from Denver International Airport and monitor flight arrivals for real-time pickup coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer wheelchair-accessible taxis in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi provides ADA-compliant wheelchair-accessible vehicles with NEMT-trained drivers throughout the Denver metro area, including Aurora, Lakewood, and Boulder. Call (303) 353-4482 to confirm availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Trans Voyage Taxi provide non-emergency medical transport (NEMT) in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi has NEMT roots and provides non-emergency medical transportation in Denver, Aurora, and the greater Denver metro area. Our NEMT-trained drivers and ADA-accessible vehicles are available for medical appointments, hospital visits, and daily travel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Trans Voyage Taxi serve Aurora, Colorado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi is headquartered in Aurora at 1450 South Havana Street Ste 712 and serves all of Aurora, Denver, Lakewood, Englewood, Centennial, Arvada, Westminster, Thornton, and the greater Denver metro area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do taxis pick up passengers at Denver International Airport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Taxi pickups at Denver International Airport's Jeppesen Terminal are on Level 5, Island 1. Trans Voyage Taxi monitors your flight arrival and coordinates curbside pickup — let us know your airline and arrival door when you book.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a taxi in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book a Trans Voyage Taxi ride online at transvoyagetaxi.com, by email at bookings@transvoyagetaxi.com, or by calling (303) 353-4482 anytime, 24/7. Provide your pickup address, date, time, and destination to get a fast confirmation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book a taxi to Denver International Airport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend booking your DIA taxi at least 24 hours in advance, especially for early-morning flights. Same-day bookings are welcome subject to driver availability — call (303) 353-4482 for urgent requests.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Trans Voyage Taxi accept credit cards?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi accepts cash, credit cards, and debit cards for all rides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Trans Voyage Taxi serve Lakewood, Englewood, and other Denver suburbs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi serves the entire Denver metro area including Lakewood, Englewood, Centennial, Arvada, Westminster, Thornton, Littleton, and Broomfield in addition to Denver and Aurora.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the main taxi and cab companies serving Denver and DIA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Denver is served by several licensed taxi companies including Yellow Cab of Denver, Metro Taxi, zTrip, King Cab, and Union Taxi. Trans Voyage Taxi is a PUC-approved Denver taxi company that distinguishes itself with flat-rate airport zones to DIA, wheelchair-accessible NEMT vehicles, 24/7 dispatch, and online booking — offering a transparent, professional alternative for airport transfers and city rides across the Denver metro area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Trans Voyage Taxi a good alternative to Uber or Lyft in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi is a fully licensed, PUC-approved Colorado taxi company and a reliable alternative to Uber and Lyft in Denver. Unlike rideshare apps, Trans Voyage Taxi charges flat-rate DIA airport fares with no surge pricing, operates ADA-accessible NEMT vehicles, employs consistent professional drivers, and can be reached directly by phone at (303) 353-4482 any time of day.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Trans Voyage Taxi compare to Denver airport shuttle services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlike shared airport shuttle services such as Groome Transportation or Goldenwest Airport Shuttle, Trans Voyage Taxi provides private, door-to-door service with no shared stops or waiting for other passengers. Our PUC flat-rate DIA zones run from $37.04 (Tower Road / Aurora) to $115.04 (Boulder) and include the airport access fee. We also monitor flight arrivals for real-time pickup coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Denver taxi companies offer wheelchair-accessible vehicles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trans Voyage Taxi offers ADA-compliant wheelchair-accessible vehicles with NEMT-trained drivers throughout the Denver metro area, including Aurora, Lakewood, Englewood, and Boulder. Not all Denver taxi companies provide NEMT-level accessibility. Call (303) 353-4482 to confirm vehicle availability for your trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a taxi from DIA to Lakewood, Colorado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A metered taxi from Denver International Airport to Lakewood, Colorado is typically $95–$115, including the $5.03 DIA airport access fee. The exact fare depends on the specific Lakewood destination, traffic, and route. Trans Voyage Taxi operates 24/7 — call (303) 353-4482 for a precise quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a taxi from DIA to Englewood or Centennial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A metered taxi from Denver International Airport to Englewood is typically $80–$100, and to Centennial approximately $85–$105, including the $5.03 airport access fee. Fares vary by specific address, traffic conditions, and waiting time. Call (303) 353-4482 for an estimate for your exact destination.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a taxi from DIA to Arvada or Westminster?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A metered taxi from Denver International Airport to Arvada is typically $110–$130, and to Westminster approximately $95–$120, including the $5.03 DIA airport access fee. These are metered destinations — fares are calculated at $3.50 base plus $2.80 per mile plus the airport access fee. Call (303) 353-4482 for a quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a taxi from DIA to Thornton, Colorado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A metered taxi from Denver International Airport to Thornton, Colorado is typically $75–$95, including the $5.03 DIA airport access fee. Thornton is one of the closer Denver suburbs to DIA. Call Trans Voyage Taxi at (303) 353-4482 for a personalized quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the DIA flat-rate taxi price apply for trips from the airport back to Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi\'s PUC-approved flat rates apply in both directions — to and from Denver International Airport. The flat rate from DIA to Downtown Denver is $72.04, DIA to Denver Tech Center is $80.04, DIA to Boulder is $115.04, and DIA to the Tower Road / Aurora zone is $37.04. All flat rates include the airport access fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a taxi from DIA to downtown Denver take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drive from Denver International Airport to downtown Denver typically takes 35–45 minutes under normal traffic conditions. During weekday rush hours (7–9 AM and 4–7 PM) or after major events, the drive can take 50–70 minutes. Trans Voyage Taxi monitors traffic and flight arrivals to time your pickup as efficiently as possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Trans Voyage Taxi charge extra for luggage or oversized bags?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Trans Voyage Taxi does not charge extra for standard luggage such as suitcases, carry-on bags, or backpacks. If you have oversized equipment like ski gear, a wheelchair, or large cargo, please mention it when booking so we can confirm the right vehicle. Call (303) 353-4482 or include a note in your online booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my flight is delayed — will my taxi driver still be there?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi tracks your flight in real time. If your flight is delayed, we adjust the pickup time automatically so your driver arrives when you do — not before. There is no extra charge for flight delays. Just provide your flight number when you book and we handle the rest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a receipt for my Trans Voyage Taxi ride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trans Voyage Taxi provides receipts for all rides. Ask your driver at the end of the trip or email bookings@transvoyagetaxi.com with your ride details and we will send a receipt for expense or reimbursement purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Trans Voyage Taxi offer rides to or from Colorado ski resorts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trans Voyage Taxi primarily serves the Denver metro area and Denver International Airport. For long-distance trips to ski resorts such as Breckenridge, Vail, Keystone, or Winter Park from the Denver metro area, call (303) 353-4482 to discuss availability and pricing for your specific route.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a taxi from Aurora to downtown Denver cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A metered taxi from Aurora to downtown Denver is typically $25–$45 depending on the specific pickup and dropoff addresses within Aurora and Denver. The meter runs at $3.50 base fare plus $2.80 per mile. Call (303) 353-4482 for a quote based on your exact addresses.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum fare or cancellation fee for Denver taxi rides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trans Voyage Taxi does not charge a cancellation fee for rides cancelled with reasonable advance notice. For scheduled trips, please notify us as early as possible by calling (303) 353-4482. Standard metered fares apply for all completed rides — there is no minimum fare beyond the $3.50 base rate.',
      },
    },
  ],
}

const Home = ({ openBooking }) => {
  const handleBook = () => { if (openBooking) openBooking() }

  return (
    <div>
      <SEO
        title="Denver Taxi Service | 24/7 Taxi to DIA — Trans Voyage Taxi"
        description="Denver's 24/7 taxi service — flat-rate taxi to DIA (Downtown $72 · Boulder $115 · DTC $80 · Aurora $37), wheelchair-accessible NEMT rides, city trips. Call (303) 353-4482."
        canonical="/"
        keywords="Denver taxi service, taxi to DIA, DIA taxi flat rate, Denver airport taxi, airport taxi Denver CO, taxi from downtown Denver to DIA, taxi from Boulder to airport, Denver Tech Center taxi to DIA, wheelchair accessible taxi Denver, NEMT Denver Colorado, non-emergency medical transport Denver, taxi Aurora CO, taxi Lakewood Colorado, 24 hour taxi Denver, cab service Denver, Trans Voyage Taxi, Yellow Cab Denver, Metro Taxi Denver, zTrip Denver, King Cab Denver, Union Taxi Denver, Groome Transportation Denver alternative, Goldenwest airport shuttle alternative, Denver cab companies, taxi alternative to Uber Denver, taxi instead of Lyft Denver, best taxi company Denver Colorado, A Ride Now Aurora alternative, 007 airport limo Denver alternative, Denver taxi comparison"
        schemas={[LOCAL_BUSINESS_SCHEMA, HOME_FAQ_SCHEMA]}
      />

      <section className="hero hero-modern">
        <div className="tv-container hero-grid">
          <div className="hero-copy">
            <div className="pill">Denver Metro · Aurora · DIA Transfers</div>
            <h1>Denver taxi service — flat-rate taxi to DIA and city rides.</h1>
            <p className="lead">Flat-rate taxi to DIA from $37, ADA-accessible vehicles with NEMT-trained drivers, and 24/7 dispatch. Book online in seconds or call us anytime.</p>

            <div className="hero-actions">
              <button className="btn" onClick={handleBook}>Book a Ride</button>
              <Link to="/services" className="btn secondary">See services &amp; rates</Link>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Airport &amp; metro coverage</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">ADA</div>
                <div className="stat-label">Wheelchair-accessible rides</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">PUC</div>
                <div className="stat-label">Approved flat rates · licensed zones</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-badge">Licensed · Insured</div>
              <img src={hero} alt="Denver skyline — Trans Voyage Taxi serves downtown Denver and DIA" className="hero-image" />
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
            <h2>Live Denver updates and quick booking</h2>
            <p className="muted">Check current time and weather in Denver, browse local tips, and reserve your taxi without waiting on hold.</p>
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

      <section className="panel tv-container fare-estimator-section">
        <FareEstimator />
      </section>

      <section className="panel soft">
        <div className="tv-container">
          <div className="section-head">
            <div>
              <p className="kicker">What we do</p>
              <h2>Denver taxi services for every trip</h2>
              <p className="muted">Airport runs to DIA, city trips across Denver and Aurora, scheduled delivery, and ADA-ready NEMT transport — with drivers who know every route.</p>
            </div>
            <Link to="/services" className="btn secondary">Rates &amp; services</Link>
          </div>

          <div className="tile-grid">
            <div className="tile">
              <div className="tile-icon">✈️</div>
              <h3>24/7 DIA airport transfers</h3>
              <p>Flat-rate taxi trips to and from Denver International Airport with real-time flight tracking and curbside pickup. Zone rates from $37 (Tower Road / Zone D) to $115 (Boulder / Zone C).</p>
              <span className="pill muted">Flat rate · access fee included</span>
            </div>
            <div className="tile">
              <div className="tile-icon">🧭</div>
              <h3>Denver &amp; Aurora city rides</h3>
              <p>Door-to-door transport across Denver, Aurora, Lakewood, Englewood, Centennial, and the greater Denver metro for errands, events, and commutes.</p>
              <span className="pill muted">Local expertise · metered</span>
            </div>
            <div className="tile">
              <div className="tile-icon">🧊</div>
              <h3>Same-day package delivery</h3>
              <p>Secure delivery for time-sensitive items anywhere in Denver and surrounding areas. Scheduled or on-demand.</p>
              <span className="pill muted">Scheduled or on-demand</span>
            </div>
            <div className="tile">
              <div className="tile-icon">♿</div>
              <h3>Wheelchair-accessible &amp; NEMT</h3>
              <p>ADA-compliant vehicles and NEMT-trained drivers for medical visits, hospital trips, and daily travel across the Denver metro area.</p>
              <span className="pill muted">ADA ready · NEMT trained</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tv-container split-stack">
        <div className="split-card">
          <p className="kicker">Service promise</p>
          <h3>Comfort, safety, and punctuality every time</h3>
          <p className="muted">We invest in driver training, well-maintained vehicles, and fast communication so Denver riders can travel with confidence.</p>
          <ul className="checklist">
            <li>Professional, vetted drivers</li>
            <li>Real people to confirm your ride</li>
            <li>Clean fleet — sedans, minivans, and wheelchair-accessible vehicles</li>
            <li>Flight tracking for DIA airport pickups</li>
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
            <h3>Ready for your next Denver taxi ride?</h3>
            <p className="muted">Serving Denver, Aurora, Boulder, and the greater Denver metro area around the clock. Book online or call (303) 353-4482 — we confirm quickly.</p>
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
