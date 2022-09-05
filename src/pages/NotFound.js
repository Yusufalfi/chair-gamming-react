import React from 'react'
import Header from '../parts/Header'
import PageError from 'parts/PageError'
import SiteMap from 'parts/HomePages/SiteMap'
import Footer from 'parts/Footer'

const NotFound = () => {
  return (
    <>
        <Header theme="black" />
        <PageError />
        <SiteMap />
        <Footer />
    </>
  )
}

export default NotFound