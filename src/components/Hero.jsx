import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className="text-white " >
        <div className="flex justify-center flex-col w-full h-screen text-center mx-auto mt-[-96px] max-w-[800px]">
            <p className='text-[#00df9a] uppercase font-semibold ' >
                Growing with data analytics
            </p>
            <h1 className="py-6 text-4xl sm:text-6xl md:text-7xl font-bold">
                Grow with data.
            </h1>

            <div className="flex justify-center items-center">
                
                <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl"> 
                    Flex, flexible financing for 
                </h2>

                <Typed 
                    className="p-2 mt-1 text-gray-500 font-semibold text-xl sm:text-4xl md:text-5xl"
                    strings={["BTB", "BTC", "SaaS"]}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                    />
            </div>

            <p className="text-gray-500 font-bold md:text-2xl text-lg md:max-w-5xl max-w-3xl px-10 py-2 text-center">
                Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms. 
            </p>

            <button className="text-black py-3  bg-[#00df9a] w-52 rounded-md mx-auto mt-4 cursor-pointer font-semibold">
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Hero