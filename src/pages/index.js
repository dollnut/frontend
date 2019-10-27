import React from "react"
import Layout from "../Layout"
import HomeContainer from "../components/home/HomeContainer"
import FirebaseProvider from "../firebase/FirebaseWrapper"
export default () => {
  return (
    <FirebaseProvider>
      <Layout>
        <HomeContainer />
      </Layout>
    </FirebaseProvider>
  )
}
