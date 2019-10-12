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
} from "@material-ui/core"

const Feed = () => {
  return (
    <div>
      {" "}
      <AppBar elevation={4} position="static">
        <Toolbar>
          <Typography variant="h6">Feed</Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={4}>
        <List>
          {[1, 1, 1, 1, 1].map(() => (
            <ListItem>
              <ListItemText primary="TRUE" />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  )
}

export default Feed
