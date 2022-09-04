import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import Client from '../parts/Client'
import BrowseRoom from 'parts/HomePages/BrowseRoom'
import JustArrived from 'parts/HomePages/JustArrived'
import SiteMap from 'parts/HomePages/SiteMap'
import Footer from 'parts/Footer'

const HomePages = (props) => {
  return (
    <>
        <Header />
        <Hero />
        <BrowseRoom />
        <JustArrived />
        <Client />
        <SiteMap />
        <Footer />
    </>
  )
}

export default HomePages