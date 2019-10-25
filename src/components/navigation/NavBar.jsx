import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Hidden,
  Modal,
  Paper,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import FavoriteIcon from "@material-ui/icons/Favorite"
import TvIcon from "@material-ui/icons/Tv"
import MenuIcon from "@material-ui/icons/Menu"
import SideBar from "./SideBar"
import { socialLinks } from "../../data"
import { useFirebase } from "../../effects/FirebaseWrapper"
import { Link } from "gatsby"

const NavBar = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [loginModalOpened, setLoginModalOpened] = useState(false)
  const { loginGoogle, userLoggedIn, signOut } = useFirebase()
  const classes = useStyles()

  const handleLoginGoogle = () => {
    ;(async () => {
      await loginGoogle()
      setLoginModalOpened(false)
    })()
  }

  const renderLoginModal = () => {
    return (
      <Modal
        className={classes.modal}
        open={loginModalOpened}
        onClose={() => setLoginModalOpened(false)}
      >
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Login
          </Typography>
          <div>
            <Button
              fullWidth
              className={classes.loginButton}
              variant="contained"
              onClick={handleLoginGoogle}
            >
              Google
            </Button>
            <Button
              fullWidth
              className={classes.loginButton}
              variant="contained"
            >
              Google
            </Button>
            <Button
              fullWidth
              className={classes.loginButton}
              variant="contained"
            >
              Google
            </Button>
            <Button
              fullWidth
              className={classes.loginButton}
              variant="contained"
            >
              Google
            </Button>
          </div>
        </Paper>
      </Modal>
    )
  }

  const renderLoginButton = () => {
    if (userLoggedIn) {
      return (
        <Button color="inherit" component={Link} to="/me">
          Account
        </Button>
      )
    } else {
      return (
        <Button color="inherit" onClick={() => setLoginModalOpened(true)}>
          Login
        </Button>
      )
    }
  }

  return (
    <>
      {renderLoginModal()}
      <AppBar className={classes.root}>
        <SideBar
          open={openSidebar}
          onClose={() => setOpenSidebar(false)}
          setLoginModalOpened={setLoginModalOpened}
        />
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
              <Hidden xsDown>Support the Stream</Hidden>
            </Button>
          </div>
          <Button color="inherit">
            <TvIcon className={classes.tvIcon} />
            Stream
          </Button>
          {renderLoginButton()}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    borderBottom: `5px solid ${theme.palette.secondary.light}`,
  },
  button: {},
  favoriteIcon: { margin: theme.spacing(0, 1, 0, 0) },
  socials: {
    flexGrow: 1,
  },
  tvIcon: {
    margin: theme.spacing(0, 1, 0, 0),
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: 15,
  },
  loginButton: {
    // width: 250,
    margin: "0px 0 15px",
  },
}))
