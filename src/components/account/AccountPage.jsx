import React from "react"
import { Container, Paper, Typography, Button } from "@material-ui/core"
import { useFirebase } from "../../firebase/FirebaseWrapper.jsx"

const AccountPage = () => {
  const { signOut, userLoggedIn } = useFirebase()

  return (
    <Container style={{ marginTop: 100 }}>
      <Paper style={{ padding: 15 }}>
        <Typography variant="h6" color="textPrimary">
          Username
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Created Oct, 21
        </Typography>
        <Button onClick={signOut}>Sign Out</Button>
      </Paper>
    </Container>
  )
}

export default AccountPage
