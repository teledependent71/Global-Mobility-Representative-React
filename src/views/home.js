import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Mobility Representative</title>
        <meta property="og:title" content="Global Mobility Representative" />
      </Helmet>
    </div>
  )
}

export default Home
