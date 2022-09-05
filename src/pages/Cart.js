import React from 'react'
import Header from '../parts/Header'
import BreadCrumb from '../components/BreadCrumb/index'
import SiteMap from 'parts/HomePages/SiteMap'
import Footer from 'parts/Footer'
import ShoppingCarts from 'parts/Carts/ShoppingCarts'
import ShippingDetail from 'parts/Carts/ShippingDetail'

const Cart = () => {
  return (
    <>
        <Header theme="black" />
        <BreadCrumb list={[
          {url: "/", name:"Home"},
          {url: "/cart", name:"Shopping Cart"},
        
        ]}/>

        <section className="md:py-16">
            <div className="container mx-auto px-4">
                <div className="flex -mx-4 flex-wrap">
                    <ShoppingCarts />
                    <ShippingDetail />
                </div>
            </div>
        </section>


        <SiteMap />
        <Footer />
    </>
  )
}

export default Cart