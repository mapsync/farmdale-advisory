import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="MapSync" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
          <link rel="manifest" href="/img/site.webmanifest" />
          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#4783b7" />
          <meta name="apple-mobile-web-app-title" content={data.site.siteMetadata.title} />
          <meta name="application-name" content={data.site.siteMetadata.title} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:image:width" content="279" />
          <meta property="og:image:height" content="279" />
          <meta property="og:description" content={data.site.siteMetadata.description} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
      </div>
    )}
  />
)

export default TemplateWrapper
