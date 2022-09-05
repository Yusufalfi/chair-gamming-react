import React from 'react'
import { Link } from 'react-router-dom'
import chair1 from "../../asset/images/chair-1.png"
import chair2 from "../../asset/images/chair-2.png"
import chair3 from "../../asset/images/chair-3.png"
import chair4 from "../../asset/images/chair-4.png"

const Suggestion = () => {
  return (
    <section className="bg-gray-100 px-4 py-16 mb-5">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Complete your room <br className="" />with what we designed
          </h3>
        </div>
        <div className="flex overflow-x-auto mb-4 -mx-3">
          <div className="px-3 flex-none" style={{width: "320px"}}>
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                <img
                  src={chair1}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Cangkir Mauttie</h5>
              <span className="">IDR 89.300.000</span>
              <Link to="details.html" className="stretched-link">
                
              </Link>
            </div>
          </div>
          <div className="px-3 flex-none" style={{width: "320px"}}>
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                <img
                  src={chair2}
                  alt="chair2"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Saman Kakka</h5>
              <span className="">IDR 14.500.399</span>
              <Link to="" className="stretched-link">
                
              </Link>
            </div>
          </div>
          <div className="px-3 flex-none" style={{width: "320px"}}>
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                <img
                  src={chair3}
                  alt="chair3"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Lino Dino</h5>
              <span className="">IDR 22.000.000</span>
              <Link to="" className="stretched-link">
                
              </Link>
            </div>
          </div>
          <div className="px-3 flex-none" style={{width: "320px"}}>
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                <img
                  src={chair4}
                  alt="chair4"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Syail Ammeno</h5>
              <span className="">IDR 6.399.999</span>
              <Link to="" className="stretched-link">
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Suggestion