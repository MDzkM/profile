import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{minHeight: `80vh`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`}}>
      <h1>Weird...</h1>
      <p>I must've not created this page yet.</p>
    </div>
  </Layout>
)

export default NotFoundPage
