import React from 'react'
import Helmet from 'react-helmet'
import OGimage from '../images/og_ergodex.jpg'

const SEO = ({ description, title, path }) => {
  const ergodexUrl = 'https://ergodex.io'
  const ergodexTitle = 'ErgoDEX'

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <html lang="en" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={title} />

      <title>{ergodexTitle}</title>

      <meta property="og:image" content={OGimage} />
      <meta property="og:title" content={ergodexTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={ergodexUrl + path} />
    </Helmet>
  )
}

export default SEO