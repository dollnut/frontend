import React, { useState } from "react"
import { AppBar, Toolbar, List, Button, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { graphql, useStaticQuery } from "gatsby"
import FavoriteIcon from "@material-ui/icons/Favorite"
import TvIcon from "@material-ui/icons/Tv"
import MenuIcon from "@material-ui/icons/Menu"
import SideBar from "./SideBar"

const NavBar = () => {
  const [openSidebar, setOpenSidebar] = useState(false)

  const { discord, youtube, instagram, twitter, twitch } = useStaticQuery(
    query
  ).site.siteMetadata
  const classes = useStyles()
  const socials = [discord, youtube, instagram, twitter, twitch]
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
          {socials.map(({ title, link }) => (
            <Button
              component="a"
              href={link}
              target="_blank"
              color="inherit"
              className={classes.button}
            >
              {title}
            </Button>
          ))}
          <Button variant="contained" color="secondary">
            <FavoriteIcon className={classes.favoriteIcon} />
            Support the Stream
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

const query = graphql`
  query {
    site {
      siteMetadata {
        youtube {
          title
          link
        }
        discord {
          title
          link
        }
        instagram {
          title
          link
        }
        twitter {
          title
          link
        }
        twitch {
          title
          link
        }
      }
    }
  }
`
