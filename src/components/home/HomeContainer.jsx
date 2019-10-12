import React from "react"
import {
  Paper,
  Typography,
  makeStyles,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core"
import banner from "../../img/banner.png"
import video from "../../img/video.png"
import { socialLinks } from "../../data"

const HomeContainer = () => {
  const classes = useStyles()
  return (
    <Container style={{ marginTop: 100 }}>
      <Grid container justify="space-around" alignItems="center">
        <Grid item xs={12} md={6}>
          <img src={banner} alt="" srcset="" className={classes.banner} />
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper className={classes.root} elevation={4} square={false}>
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography variant="h6">PlaceHolderText Pog</Typography>
              </Toolbar>
            </AppBar>
            <div padding="5px 0">
              <img src={video} style={{ width: "100%" }} />
            </div>
          </Paper>
          <Button
            fullWidth
            size="large"
            variant="contained"
            color="secondary"
            style={{ margin: "15px 0" }}
          >
            Watch Now
          </Button>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {socialLinks.map(
              ({ title, link, fa, color, hideOnNav }) =>
                !hideOnNav && (
                  <IconButton
                    style={{ color }}
                    component="a"
                    href={link}
                    title={title}
                  >
                    <i className={`${fa} fa-2x`} />
                  </IconButton>
                )
            )}
          </div>
        </Grid>
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
