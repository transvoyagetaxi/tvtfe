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
        { '@type': 'ListItem', position: 2, name: 'Services & Rates', item: `${SITE_URL}/services` },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/services#airport-service`,
      provider: { '@id': `${SITE_URL}/#business` },
      name: 'Denver DIA Airport Taxi Service',
      description: 'Flat-rate taxi rides to and from Denver International Airport (DIA), available 24/7. Rates include the airport access fee.',
      serviceType: 'TaxiService',
      areaServed: [
        { '@type': 'Place', name: 'Denver International Airport, CO', alternateName: ['DIA', 'DEN'] },
        { '@type': 'City', name: 'Denver', addressRegion: 'CO' },
        { '@type': 'City', name: 'Aurora', addressRegion: 'CO' },
        { '@type': 'City', name: 'Boulder', addressRegion: 'CO' },
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'Downtown Denver to DIA',
          description: 'Flat-rate taxi from Downtown Denver to Denver International Airport, airport access fee included.',
          price: '72.04',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '72.04',
            priceCurrency: 'USD',
            valueAddedTaxIncluded: true,
          },
          availability: 'https://schema.org/InStock',
          seller: { '@id': `${SITE_URL}/#business` },
        },
        {
          '@type': 'Offer',
          name: 'Boulder to DIA',
          description: 'Flat-rate taxi from Boulder to Denver International Airport, airport access fee included.',
          price: '115.04',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '115.04',
            priceCurrency: 'USD',
            valueAddedTaxIncluded: true,
          },
          availability: 'https://schema.org/InStock',
          seller: { '@id': `${SITE_URL}/#business` },
        },
        {
          '@type': 'Offer',
          name: 'Denver Tech Center to DIA',
          description: 'Flat-rate taxi from Denver Tech Center (DTC) to Denver International Airport, airport access fee included.',
          price: '80.04',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '80.04',
            priceCurrency: 'USD',
            valueAddedTaxIncluded: true,
          },
          availability: 'https://schema.org/InStock',
          seller: { '@id': `${SITE_URL}/#business` },
        },
        {
          '@type': 'Offer',
          name: 'Tower Road / Aurora to DIA',
          description: 'Flat-rate taxi from Tower Road / Aurora area to Denver International Airport.',
          price: '37.04',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '37.04',
            priceCurrency: 'USD',
            valueAddedTaxIncluded: true,
          },
          availability: 'https://schema.org/InStock',
          seller: { '@id': `${SITE_URL}/#business` },
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/services#wheelchair`,
      provider: { '@id': `${SITE_URL}/#business` },
      name: 'Wheelchair-Accessible NEMT Taxi Denver',
      description: 'ADA-compliant wheelchair-accessible taxi and non-emergency medical transport (NEMT) in Denver, Aurora, and the greater Denver metro area. NEMT-trained drivers for medical appointments and daily travel.',
      serviceType: ['WheelchairAccessibleTransport', 'NEMT'],
      areaServed: { '@type': 'City', name: 'Denver', addressRegion: 'CO' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the flat rate from Downtown Denver to DIA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The flat rate from Downtown Denver to Denver International Airport is $72.04, including the airport access fee. No hidden charges.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the taxi flat rate from Boulder to Denver airport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The flat-rate taxi fare from Boulder to Denver International Airport (DIA) is $115.04, airport access fee included.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the flat rate from Denver Tech Center to DIA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The flat-rate taxi fare from Denver Tech Center (DTC) to Denver International Airport is $80.04, airport access fee included.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the taxi meter rate in Denver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Denver taxicab metered rates are $3.50 base fare, $2.80 per mile, and $0.40 per waiting minute when the vehicle travels under 15 mph. A $5.03 airport access fee applies to DIA trips on the meter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide NEMT (non-emergency medical transport) in Denver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Trans Voyage Taxi started as a non-emergency medical transport provider and still offers NEMT-trained drivers with wheelchair-accessible vehicles for medical appointments and daily travel in the Denver metro area including Aurora, Lakewood, and Englewood.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer same-day package delivery in Denver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Trans Voyage Taxi provides scheduled and on-demand package delivery for time-sensitive items throughout Denver and surrounding areas. Email bookings@transvoyagetaxi.com to arrange delivery.',
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
        {
          '@type': 'Question',
          name: 'Can I get a taxi from Aurora to Denver International Airport?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Trans Voyage Taxi is headquartered in Aurora, CO and provides flat-rate taxi service from Aurora to Denver International Airport (DIA). The Tower Road zone rate is $37.04; other Aurora locations may vary — call (303) 353-4482 for a quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Trans Voyage Taxi compare to Yellow Cab or Metro Taxi Denver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trans Voyage Taxi offers PUC-approved flat-rate airport zones — unlike standard metered-only service — along with ADA-accessible NEMT vehicles, online booking, and 24/7 dedicated dispatch. While Yellow Cab of Denver and Metro Taxi Denver are established fleets, Trans Voyage Taxi focuses on personalized service, transparent flat-rate DIA pricing (Zone A $72.04, Zone B $80.04, Zone C $115.04, Zone D $37.04), and wheelchair-accessible NEMT transport for medical and daily travel needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a Denver taxi cheaper than a rideshare app to DIA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Denver PUC-approved taxi flat rates to DIA do not surge. Trans Voyage Taxi charges $72.04 from Downtown Denver, $80.04 from the Denver Tech Center, $115.04 from Boulder, and $37.04 from the Tower Road / Aurora zone — fixed regardless of time, weather, or demand. Rideshare apps like Uber and Lyft use dynamic pricing that can increase significantly during peak hours, bad weather, or high-demand periods.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Trans Voyage Taxi compare to Denver airport shuttles like Groome Transportation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Shared airport shuttle services like Groome Transportation and Goldenwest Airport Shuttle pick up and drop off multiple passengers, which means extra stops and longer travel times. Trans Voyage Taxi provides private, direct door-to-door service to Denver International Airport with no shared rides, fixed flat-rate zone pricing, and real-time flight tracking for arrivals.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the taxi fare from DIA to Lakewood or Littleton?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Lakewood and Littleton are not in a PUC flat-rate DIA zone, so standard metered rates apply. A taxi from Denver International Airport to Lakewood is typically $95–$115, and to Littleton approximately $90–$110, including the $5.03 airport access fee. Fares are calculated at $3.50 base plus $2.80 per mile. Call (303) 353-4482 for an exact quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the taxi fare from DIA to Centennial or Greenwood Village?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Centennial and Greenwood Village are not in a PUC flat-rate zone. A taxi from Denver International Airport to Centennial is typically $85–$105, and to Greenwood Village approximately $80–$100, including the $5.03 DIA airport access fee. Standard metered rates of $3.50 base plus $2.80 per mile apply. Call (303) 353-4482 for a personalized quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the taxi fare from Denver to Lakewood or from Aurora to Denver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A metered taxi from Denver to Lakewood is typically $20–$40 depending on origin and destination addresses. A taxi from Aurora to downtown Denver is typically $25–$45. Fares run at $3.50 base fare plus $2.80 per mile — no airport access fee applies for non-DIA trips. Call (303) 353-4482 for a quote on your specific route.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the $5.03 airport access fee apply to all taxi trips in Denver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The $5.03 DIA airport access fee applies only to trips that originate or terminate at Denver International Airport (DIA). City trips between Denver, Aurora, Lakewood, and other metro-area destinations do not include this fee. Trans Voyage Taxi\'s flat-rate DIA zone prices already include the airport access fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the taxi fare from downtown Denver to Cherry Creek or LoDo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Short city trips within Denver such as downtown to Cherry Creek or within LoDo are metered at $3.50 base fare plus $2.80 per mile. A trip from downtown Denver to Cherry Creek is typically $10–$18 depending on traffic and exact addresses. Call (303) 353-4482 or book online at transvoyagetaxi.com for same-day city rides.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a flat rate from DIA to Broomfield or Thornton?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Broomfield and Thornton are not currently in a PUC-approved flat-rate zone from DIA. Standard metered rates apply: $3.50 base plus $2.80 per mile plus the $5.03 airport access fee. A taxi from DIA to Broomfield is typically $90–$115, and to Thornton approximately $75–$95. Call (303) 353-4482 for an exact fare quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the taxi rate from Denver International Airport to the Denver Tech Center?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trans Voyage Taxi charges a PUC-approved flat rate of $80.04 from Denver International Airport to the Denver Tech Center (DTC) — Zone B. This flat rate includes the airport access fee and applies in both directions (DIA to DTC and DTC to DIA). No meter, no surge — fixed price guaranteed.',
          },
        },
      ],
    },
  ],
}

const ServicesPage = ({ openBooking, openDelivery }) => (
  <div className="tv-container">
    <SEO
      title="Denver Taxi Rates & Services | DIA Flat Rate Pricing — Trans Voyage Taxi"
      description="Denver taxi rates: flat-rate DIA transfers (Downtown $72 · Boulder $115 · DTC $80 · Tower Rd $37), metered city rides $3.50 + $2.80/mi, ADA-accessible NEMT transport. Call (303) 353-4482."
      canonical="/services"
      keywords="Denver taxi rates, DIA flat rate taxi, taxi from downtown Denver to DIA, taxi from Boulder to airport, Denver Tech Center taxi DIA, Aurora to DIA taxi, Denver metered taxi rates, wheelchair taxi Denver, NEMT transport Denver, package delivery Denver, taxi pricing Colorado, Denver taxi per mile, Yellow Cab Denver rates, Metro Taxi Denver rates, zTrip Denver, taxi vs Uber Denver airport, taxi vs Lyft Denver DIA, Groome Transportation alternative Denver, Goldenwest airport shuttle alternative, Denver cab company rates comparison, private airport taxi Denver vs shuttle"
      schemas={[SERVICES_SCHEMA]}
    />
    <Services openBooking={openBooking} openDelivery={openDelivery} />
  </div>
)

export default ServicesPage
