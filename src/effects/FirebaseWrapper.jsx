import firebase from "firebase"
import React, { createContext, useContext, useEffect, useState } from "react"

const firebaseConfig = {
  apiKey: "AIzaSyDMJO0nixP1iiqdodrrkAyjXYzULrPx2NM",
  authDomain: "mockcoffee-1557995671684.firebaseapp.com",
  databaseURL: "https://mockcoffee-1557995671684.firebaseio.com",
  projectId: "mockcoffee-1557995671684",
  storageBucket: "mockcoffee-1557995671684.appspot.com",
  messagingSenderId: "227941824086",
  appId: "1:227941824086:web:faa912a6eb6fdb2f",
}

firebase.initializeApp(firebaseConfig)

export const FirebaseContext = createContext()
export const useFirebase = () => useContext(FirebaseContext)
const database = firebase.database()
const FirebaseProvider = ({ children }) => {
  const [chatroom, setChatroom] = useState([])
  const turnChatroomOn = () => {
    database.ref("/chatroom").on("value", snapshot => {
      setChatroom(Object.values(snapshot.val()))
    })
  }
  useEffect(() => {}, [])
  return (
    <FirebaseContext.Provider value={{ turnChatroomOn, chatroom }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
