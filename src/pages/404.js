import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`, marginTop: `30%`}}>
      <h1>Weird...</h1>
      <p>I must've not created this page yet.</p>
    </div>
  </Layout>
)

export default NotFoundPage
