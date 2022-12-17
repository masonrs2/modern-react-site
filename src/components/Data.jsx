import React from 'react'
import laptop from "../assets/laptop.jpg"

const Data = () => {
  return (
    <div className="w-full bg-white fl">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-16 grid-cols-1 px-4 md:px-0">
          <img src={laptop} alt="laptop" className="w-[31rem] " />
        <div className="flex flex-col justify-center">

          <p className="text-[#00df9a] uppercase font-semibold" >
            Data Analytics Dashboard
          </p>

          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl py-1">
              Manage Data Analytics Centrally
          </h2>

          <p className="max-w-2xl py-2 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti porro labore, iure repellat eos possimus nisi aliquam. Quas quisquam quasi fugiat sit quaerat cum ea vel excepturi odio rem! Dolorum!
          </p>

          <button className="rounded-md bg-black w-[13rem] text-[#00df9a] max-w-[11rem] h-10 font-medium md:mx-0 mx-52">
            Get Started
          </button>
        </div>
        </div>
    </div>
  )
}

export default Data