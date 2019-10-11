import React from "react"
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  ListItemIcon,
} from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/styles"

const SideBar = ({ open, onClose }) => {
  const classes = UseStyles()
  const { youtube, discord, twitch, instagram, twitter } = useStaticQuery(
    query
  ).site.siteMetadata
  const socials = [discord, youtube, instagram, twitter, twitch]
  return (
    <Drawer open={open} onClose={onClose} anchor="left">
      <Typography
        style={{ padding: 5 }}
        variant="h6"
        component="h1"
        color="inherit"
      >
        Doll
        <span className={classes.highlight}>Nut</span>
      </Typography>
      <List className={classes.list}>
        {socials.map(({ title, link, fa, divider }) => (
          <>
            <ListItem button>
              <ListItemIcon>
                <i className={`${classes[title.toLowerCase()]} ${fa} fa-2x`} />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
            {divider && <Divider />}
          </>
        ))}
      </List>
    </Drawer>
  )
}

export default SideBar

const UseStyles = makeStyles(theme => ({
  highlight: { color: theme.palette.secondary.main },
  list: { width: 250 },
  youtube: { color: theme.socials.youtube },
  discord: { color: theme.socials.discord },
  instagram: { color: theme.socials.instagram },
  twitter: { color: theme.socials.twitter },
  twitch: { color: theme.socials.twitch },
}))

const query = graphql`
  query {
    site {
      siteMetadata {
        youtube {
          title
          link
          fa
        }
        discord {
          title
          link
          fa
        }
        twitch {
          title
          link
          fa
          divider
        }
        instagram {
          title
          link
          fa
        }
        twitter {
          title
          link
          fa
        }
      }
    }
  }
`
