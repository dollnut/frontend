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
import { socialLinks } from "../../data"

const SideBar = ({ open, onClose }) => {
  const classes = UseStyles()
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
        {socialLinks.map(({ title, link, fa, divider, color }) => (
          <>
            <ListItem button>
              <ListItemIcon>
                <i className={`${fa} fa-2x`} style={{ color }} />
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
