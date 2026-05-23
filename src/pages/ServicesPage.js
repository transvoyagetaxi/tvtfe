import Services from '../components/Services'
import SEO from '../components/SEO'

const SITE_URL = 'https://www.transvoyagetaxi.com'

const SERVICES_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      ],
    },
    {
      '@type': 'Service',
      provider: { '@id': `${SITE_URL}/#business` },
      name: 'Denver DIA Airport Taxi Service',
      description: 'Flat-rate taxi rides to and from Denver International Airport, 24/7.',
      areaServed: { '@type': 'Place', name: 'Denver International Airport, CO' },
      offers: [
        { '@type': 'Offer', name: 'Downtown Denver to DIA', price: '56.03', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Boulder to DIA', price: '89.03', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Denver Tech Center to DIA', price: '62.03', priceCurrency: 'USD' },
        { '@type': 'Offer', name: 'Tower Road to DIA', price: '29.03', priceCurrency: 'USD' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the flat rate from Downtown Denver to DIA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The flat rate from Downtown Denver to Denver International Airport is $56.03, including the airport access fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the taxi meter rate in Denver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Denver taxicab metered rates are $3.50 base fare, $2.65 per mile, and $0.40 per waiting minute when the vehicle travels under 15 mph. A $5.03 airport access fee applies to DIA trips.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide NEMT (non-emergency medical transport) in Denver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Trans Voyage Taxi started as a non-emergency medical transport provider and still offers NEMT-trained drivers with wheelchair-accessible vehicles for medical appointments and daily travel in the Denver metro area.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer same-day package delivery in Denver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Trans Voyage Taxi provides scheduled and on-demand package delivery for time-sensitive items throughout Denver and surrounding areas. Email bookings@transvoyagetaxi.com to arrange delivery.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of a taxi from DIA to Cherry Creek?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A metered taxi from Denver International Airport to Cherry Creek is typically $62–$70 plus a $5.03 airport access fee.',
          },
        },
      ],
    },
  ],
}

const ServicesPage = () => (
  <div className="tv-container">
    <SEO
      title="Taxi Services & Rates in Denver | Trans Voyage Taxi — DIA Flat Rates"
      description="Denver taxi rates and services: flat-rate DIA airport transfers (Downtown $56 | Boulder $89), metered city rides, ADA-accessible transport, and same-day package delivery. Call (303) 353-4482."
      canonical="/services"
      schemas={[SERVICES_SCHEMA]}
    />
    <p className="kicker">Services</p>
    <h2>Ride-ready for every trip</h2>
    <p className="lead">Airport, metro, delivery, and accessible transport with clear pricing and fast confirmations.</p>
    <Services />
  </div>
)

export default ServicesPage
