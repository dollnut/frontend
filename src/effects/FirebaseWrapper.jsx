import firebase from "firebase"
import React, { createContext, useContext, useEffect, useState } from "react"
import { redirectTo } from "@reach/router"
import { navigate } from "gatsby"

var firebaseConfig = {
  apiKey: "AIzaSyDMJO0nixP1iiqdodrrkAyjXYzULrPx2NM",
  authDomain: "mockcoffee-1557995671684.firebaseapp.com",
  databaseURL: "https://mockcoffee-1557995671684.firebaseio.com",
  projectId: "mockcoffee-1557995671684",
  storageBucket: "mockcoffee-1557995671684.appspot.com",
  messagingSenderId: "227941824086",
  appId: "1:227941824086:web:acee79ab51a25c038f2df7",
}

firebase.initializeApp(firebaseConfig)

export const FirebaseContext = createContext()
export const useFirebase = () => useContext(FirebaseContext)

const database = firebase.database()
const auth = firebase.auth()
const firestore = firebase.firestore()

const FirebaseProvider = ({ children }) => {
  const [chatroom, setChatroom] = useState([])
  const [userLoggedIn, setUserLoggedIn] = useState(null)

  const turnChatroomOn = () => {
    database.ref("/chatroom").on("value", snapshot => {
      setChatroom(Object.values(snapshot.val()))
    })
  }

  const loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        const token = result.credential.accessToken
        const user = result.user
      })
      .catch(function(error) {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = error.credential
      })
  }

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        firestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              setUserLoggedIn(true)
            } else {
              setUserLoggedIn(false)
            }
          })
      } else {
        setUserLoggedIn(false)
      }
    })
  }, [])
  return (
    <FirebaseContext.Provider
      value={{
        turnChatroomOn,
        chatroom,
        loginGoogle,
        userLoggedIn,
        signOut,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
