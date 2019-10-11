/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    youtube: {
      link: "",
      title: "YouTube",
      fa: "fab fa-youtube",
    },
    discord: {
      link: "",
      title: "Discord",
      fa: "fab fa-discord",
    },
    instagram: {
      link: "",
      title: "Instagram",
      fa: "fab fa-instagram",
    },
    twitter: {
      link: "",
      title: "Twitter",
      fa: "fab fa-twitter",
    },
    twitch: {
      link: "",
      title: "Twitch",
      fa: "fab fa-twitch",
      divider: true,
    },
  },
  plugins: [`gatsby-plugin-material-ui`, "gatsby-plugin-react-helmet"],
}
