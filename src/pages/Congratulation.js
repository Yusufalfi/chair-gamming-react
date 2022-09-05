import React from 'react'
import Header from '../parts/Header'
import BreadCrumb from '../components/BreadCrumb/index'
import SiteMap from 'parts/HomePages/SiteMap'
import Footer from 'parts/Footer'
import congrat from "../asset/images/illustration-success.png"
import {Link} from "react-router-dom"

const Congratulation = () => {
  return (
    <>
         <Header theme="black" />
        <BreadCrumb list={[
          {url: "/", name:"Home"},
          {url: "/congratulation", name:"success checkout"},
        
        ]}/>

<section className="">
    <div className="container mx-auto min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-4/12 text-center">
          <img
            src={congrat}
            alt="congrats illustration"
          />
          <h2 className="text-3xl font-semibold mb-6">Ah yes it’s success!</h2>
          <p className="text-lg mb-12">
            Furniture yang anda beli akan kami kirimkan saat ini juga so now
            please sit tight and be ready for it
          </p>
          <Link
            to="/"
            className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  </section>

        <SiteMap />
        <Footer />
    </>

  )
}

export default Congratulation