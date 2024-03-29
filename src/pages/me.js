import React from "react"
import FirebaseProvider from "../firebase/FirebaseWrapper"
import Layout from "../Layout"
import AccountPage from "../components/account/AccountPage"

export default () => {
  return (
    <FirebaseProvider>
      <Layout>
        <AccountPage />
      </Layout>
    </FirebaseProvider>
  )
}
