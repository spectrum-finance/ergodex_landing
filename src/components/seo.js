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

      <meta property="og:image" content='https://adapulse.io/wp-content/uploads/2021/06/2021-06-27-21.13.19-800x395.jpg' />
      <meta property="og:title" content={ergodexTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={'website'} />
      <meta property="og:url" content={ergodexUrl + path} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@ErgoDEX" />
      <meta name="twitter:site" content="@ErgoDEX" />
      <meta property="og:image" content='https://adapulse.io/wp-content/uploads/2021/06/2021-06-27-21.13.19-800x395.jpg' />
    </Helmet>
  )
}

export default SEO