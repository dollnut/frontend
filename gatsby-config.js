/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    youtube: { link: "", title: "YouTube", fa: "" },
    discord: { link: "", title: "Discord", fa: "" },
    instagram: { link: "", title: "Instagram", fa: "" },
    twitter: { link: "", title: "Twitter", fa: "" },
    twitch: { link: "", title: "Twitch", fa: "" },
  },
  plugins: [`gatsby-plugin-material-ui`, "gatsby-plugin-react-helmet"],
}
