import React from 'react'
import Header from '../parts/Header'
import Client from '../parts/Client'
import ProductDetails from 'parts/Detail/ProductDetails'
import Suggestion from 'parts/Detail/Suggestion'

import SiteMap from 'parts/HomePages/SiteMap'
import Footer from 'parts/Footer'
import BreadCrumb from '../components/BreadCrumb/index'

const Detail = () => {
  return (
    <>
        <Header theme="black" />
        <BreadCrumb list={[
          {url: "/", name:"Home"},
          {url: "/categories/123", name:"Office Room"},
          {url: "/categories/321/products/123", name:"Details"},
        ]}/>

        <ProductDetails />
        <Suggestion />
        <Client />
        <SiteMap />
        <Footer />
    </>
  )
}

export default Detail