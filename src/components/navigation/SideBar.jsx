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
import { makeStyles } from "@material-ui/styles"
import { socialLinks } from "../../data"
import { useFirebase } from "../../effects/FirebaseWrapper"
import { navigate, Link } from "gatsby"

const SideBar = ({ open, onClose, setLoginModalOpened }) => {
  const classes = UseStyles()
  const { userLoggedIn } = useFirebase()

  const renderLoginButton = () => {
    if (!userLoggedIn) {
      return (
        <ListItem button onClick={() => setLoginModalOpened(true)}>
          <ListItemIcon>
            <i className={`fa-user-circle fas fa-2x`} />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      )
    } else {
      return (
        <ListItem button onClick={() => navigate("/me")}>
          <ListItemIcon>
            <i className={`fa-user-circle fas fa-2x`} />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
      )
    }
  }

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
        {socialLinks.map(
          ({ title, link, fa, divider, color, internalLink }) => (
            <>
              <ListItem
                button
                component={internalLink ? Link : "a"}
                to={internalLink}
              >
                <ListItemIcon>
                  <i className={`${fa} fa-2x`} style={{ color }} />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
              {divider && <Divider />}
            </>
          )
        )}
        {renderLoginButton()}
      </List>
    </Drawer>
  )
}

export default SideBar

const UseStyles = makeStyles(theme => ({
  highlight: { color: theme.palette.secondary.main },
  list: { width: 250 },
}))
