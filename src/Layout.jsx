import React from "react"
import { createMuiTheme, withStyles } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import { mainTheme } from "./themes"
import NavBar from "./components/NavBar"
import SEO from "./SEO"

const theme = createMuiTheme(mainTheme)

const Layout = ({ children, classes }) => {
  return (
    <ThemeProvider theme={theme}>
      <SEO title="DollNutTV" />
      <NavBar />
      <div className={classes.root}>{children}</div>
    </ThemeProvider>
  )
}

export default withStyles({
  root: {
    background: theme.palette.primary.main,
  },
})(Layout)