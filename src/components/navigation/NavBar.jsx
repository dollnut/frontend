import React, { useState } from "react"
import { AppBar, Toolbar, Button, IconButton, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import FavoriteIcon from "@material-ui/icons/Favorite"
import TvIcon from "@material-ui/icons/Tv"
import MenuIcon from "@material-ui/icons/Menu"
import SideBar from "./SideBar"
import { socialLinks } from "../../data"

const NavBar = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const classes = useStyles()
  return (
    <AppBar className={classes.root}>
      <SideBar open={openSidebar} onClose={() => setOpenSidebar(false)} />
      <Toolbar>
        <div className={classes.socials}>
          <IconButton
            color="inherit"
            onClick={() => {
              setOpenSidebar(true)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Hidden smDown>
            {socialLinks.map(
              ({ title, link, hideOnNav }) =>
                !hideOnNav && (
                  <Button
                    component="a"
                    href={link}
                    target="_blank"
                    color="inherit"
                    className={classes.button}
                  >
                    {title}
                  </Button>
                )
            )}
          </Hidden>

          <Button variant="contained" color="secondary">
            <FavoriteIcon className={classes.favoriteIcon} />
            <Hidden smUp>Donate</Hidden>
            <Hidden xsDown>Support the Stream</Hidden>
          </Button>
        </div>
        <Button color="inherit">
          <TvIcon className={classes.tvIcon} />
          Stream
        </Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  button: {},
  favoriteIcon: { margin: theme.spacing(0, 1, 0, 0) },
  socials: {
    flexGrow: 1,
  },
  tvIcon: {
    margin: theme.spacing(0, 1, 0, 0),
  },
}))
