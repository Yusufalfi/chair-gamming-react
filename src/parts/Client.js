import React from 'react'

import adobe from '../asset/images/logo-adobe.svg';
import ikea from '../asset/images/logo-ikea.svg';
import hermanmiller from '../asset/images/logo-hermanmiller.svg';
import miele from '../asset/images/logo-miele.svg';

const Client = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-center flex-wrap">
        <div
          className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img src={adobe} alt="" className="mx-auto" />
        </div>
        <div
          className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img src={ikea} alt="ikea" className="mx-auto" />
        </div>
        <div
          className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img
            src={hermanmiller}
            alt="hermanmiller"
            className="mx-auto"
          />
        </div>
        <div
          className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0"
        >
          <img src={miele} alt="miele" className="mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default Client