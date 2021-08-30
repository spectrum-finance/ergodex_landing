import React from 'react'
import Helmet from 'react-helmet'

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

      <meta property="og:title" content={ergodexTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={ergodexUrl + path} />

      <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js" />
    </Helmet>
  )
}

export default SEO