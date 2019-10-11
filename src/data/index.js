import { red, purple, blue, indigo, grey } from "@material-ui/core/colors"

export const socialLinks = [
  {
    fa: "fas fa-home",
    title: "DollNut",
    color: indigo["A400"],
    divider: true,
    hideOnNav: true,
    internalLink: "/",
  },
  {
    fa: "fab fa-youtube",
    title: "YouTube",
    color: red[600],
  },
  {
    fa: "fab fa-twitch",
    title: "Twitch",
    color: purple[600],
  },
  {
    fa: "fab fa-twitter",
    title: "Twitter",
    color: blue[300],
  },
  {
    fa: "fab fa-discord",
    title: "Discord",
    color: indigo[300],
  },
  {
    fa: "fab fa-instagram ",
    title: "Instagram",
    color: purple[400],
    divider: true,
  },
  {
    fa: "fas fa-user-circle",
    title: "Login",
    color: grey[900],
    hideOnNav: true,
    internalLink: "/login",
  },
]
