import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.transvoyagetaxi.com'
const OG_IMAGE = `${SITE_URL}/logo512.png`

const SEO = ({ title, description, canonical, keywords, schemas = [] }) => {
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:image:alt" content="Trans Voyage Taxi — Denver taxi service" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Trans Voyage Taxi" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Trans Voyage Taxi — Denver taxi service" />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEO
