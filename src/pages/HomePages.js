import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/HomePages/Hero'
import Client from '../parts/Client'
import BrowseRoom from 'parts/HomePages/BrowseRoom'
import JustArrived from 'parts/HomePages/JustArrived'
import SiteMap from 'parts/HomePages/SiteMap'
import Footer from 'parts/Footer'

// custome hooks
import useScroll from '../helpers/hooks/useScroll'

const HomePages = () => {
  useScroll();
  
  return (
    <>
        <Header position="absolute" />
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