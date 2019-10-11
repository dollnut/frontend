import React from "react"
import { Helmet } from "react-helmet"

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
    </Helmet>
  )
}

export default SEO
