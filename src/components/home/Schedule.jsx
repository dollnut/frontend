import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"

const Schedule = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Schedule</Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        <List>
          <ListItem>
            <ListItemText primary="Event Name" secondary="Sat 10/13/19" />
          </ListItem>
        </List>
      </Paper>
    </div>
  )
}
export default Schedule
