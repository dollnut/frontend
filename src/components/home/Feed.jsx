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
  ListItemIcon,
} from "@material-ui/core"
import { red } from "@material-ui/core/colors"

const dummyData = [
  {
    fa: "fab fa-youtube",
    color: red[600],
    text: "New Video Posted",
    date: "10/13/19",
    link: "",
  },
]

const Feed = () => {
  return (
    <div style={{ margin: 10 }}>
      {" "}
      <AppBar elevation={4} position="static">
        <Toolbar>
          <Typography variant="h6">Feed</Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={4}>
        <List>
          {dummyData.map(({ fa, color, text, date, link }) => (
            <ListItem button component="a" href={link}>
              <ListItemIcon style={{ color }}>
                <i className={`fa-2x ${fa}`} />
              </ListItemIcon>
              <ListItemText primary={text} secondary={date} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  )
}

export default Feed
