import React from "react"
import {
  makeStyles,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  List,
  ListItemText,
  ListItem,
  Hidden,
} from "@material-ui/core"
import banner from "../../img/banner.png"
import CTA from "./CTA"
import Feed from "./Feed"
import Schedule from "./Schedule"

const HomeContainer = () => {
  const classes = useStyles()
  return (
    <Container style={{ marginTop: 100 }}>
      <Grid container justify="space-around" alignItems="center">
        <Grid item xs={12} md={6}>
          <img src={banner} alt="" srcset="" className={classes.banner} />
        </Grid>
        <Grid item xs={12} md={4}>
          <CTA />
        </Grid>
      </Grid>
      <Grid container justify="space-around" style={{ margin: "15px 0" }}>
        <Grid item xs={12} md={6}>
          <Feed />
        </Grid>
        <Hidden xsDown>
          <Grid item xs={12} md={5}>
            <Schedule />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}

export default HomeContainer

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  banner: { width: "100%" },
}))
