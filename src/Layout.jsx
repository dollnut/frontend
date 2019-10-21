import React from "react"
import { createMuiTheme, withStyles } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import { mainTheme } from "./themes"
import NavBar from "./components/navigation/NavBar"
import SEO from "./SEO"
import FirebaseProvider from "./effects/FirebaseWrapper"

const theme = createMuiTheme(mainTheme)

const Layout = ({ children, classes }) => {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseProvider>
        <SEO title="DollNutTV" />
        <NavBar />
        <div className={classes.root}>{children}</div>
        <footer className={classes.footer}>
          <div>
            @dollnutTV 2019 |{" "}
            <a href="https://twitch.tv/dollnut" target="__blank">
              twitch.tv/dollnut
            </a>
          </div>
        </footer>
      </FirebaseProvider>
    </ThemeProvider>
  )
}

export default withStyles({
  root: {
    // background: theme.palette.primary.main,
  },
  footer: {
    margin: "100px 0 50px",
    color: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
})(Layout)
