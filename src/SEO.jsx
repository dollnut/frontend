import React from "react"
import { Helmet } from "react-helmet"
import logo from "./img/logo.png"

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <script src="https://kit.fontawesome.com/589bc5fafd.js"></script>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link rel="shortcut icon" type="image/png" href={logo} />
    </Helmet>
  )
}

export default SEO
