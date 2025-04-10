import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `DAEL IT`,
    siteTitleAlt: `DAEL IT Startseite`,
    siteHeadline: `DAEL IT Support für Ihr Business`,
    siteUrl: `https://dael-it.netlify.app`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteImage: `/banner.jpg`,
    siteLanguage: `en`,
    author: `@lekoarts_de`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DAEL IT Startseite`,
        short_name: `DAEL`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        display: `standalone`,
        icon: `/favicon.ico`, // ← добавлено для отображения favicon
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
