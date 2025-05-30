import * as React from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import useSiteMetadata from "../hooks/use-site-metadata"

type Props = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: React.ReactNode
}

const Seo = ({
  title = ``,
  description = ``,
  pathname = ``,
  image = ``,
  children = null,
}: Props) => {
  const site = useSiteMetadata()

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteImage: defaultImage,
    author,
    siteLanguage,
  } = site

  const seo = {
    title: title ? `${title} | ${siteTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <Helmet>
      <html lang={siteLanguage} />
      <title>{seo.title}</title>

      {/* Standard meta */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Favicon + Apple Touch */}
      <link rel="icon" href={withPrefix(`/favicon.ico`)} />
      <link rel="icon" type="image/png" sizes="32x32" href={withPrefix(`/favicon-32x32.png`)} />
      <link rel="icon" type="image/png" sizes="16x16" href={withPrefix(`/favicon-16x16.png`)} />
      <link rel="apple-touch-icon" sizes="180x180" href={withPrefix(`/apple-touch-icon.png`)} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.description} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />

      {/* Theme-specific */}
      <meta name="gatsby-theme" content="@lekoarts/gatsby-theme-cara" />

      {/* Custom head children */}
      {children}
    </Helmet>
  )
}

export default Seo
