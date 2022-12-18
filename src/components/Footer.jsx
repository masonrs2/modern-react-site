import React from 'react'
import {
  FaFacebookSquare,
  FaInstagram,
  FaDribbbleSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from 'react-icons/fa';

const Footer = () => {

  const array1 = [
    {
      id: 1,
      content: "Solutions",
    },
    {
      id: 2,
      content: "Analytics",
    },
    {
      id: 3,
      content: "Marketing",
    },
    {
      id: 4,
      content: "Commerce",
    },
    {
      id: 5,
      content: "Insights",
    }
  ]

  const array2 = [
    {
      id: 1,
      content: "Support",
    },
    {
      id: 2,
      content: "Pricing",
    },
    {
      id: 3,
      content: "Documentation",
    },
    {
      id: 4,
      content: "Guides",
    },
    {
      id: 5,
      content: "Insights",
    }
  ] 

  const array3 = [
    {
      id: 1,
      content: "Company",
    },
    {
      id: 2,
      content: "About",
    },
    {
      id: 3,
      content: "Blog",
    },
    {
      id: 4,
      content: "Jobs",
    },
    {
      id: 5,
      content: "Partners",
    }
  ]

  const array4 = [
    {
      id: 1,
      content: "Legal",
    },
    {
      id: 2,
      content: "Claim",
    },
    {
      id: 3,
      content: "Policies",
    }
  ]

  return (
    <div className="bg-black w-screen h-[600px] lg:h-[400px] text-gray-300 py-16 px-4 mx-auto flex flex-row overflow-x-hidden overscroll-none ">
       <div clasName="">
          <div className="flex flex-col px-1 lg:px-36 mt-6">

            <h1 className="text-[#00df9a] uppercase font-bold text-3xl w-full">
              React.
            </h1>
            <p className="w-[450px] py-4 ">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
            </p>

            <div className="flex flex-row md:w-[100%] my-1 whitespace-nowrap ">
              <FaTwitterSquare  size={30} className="mr-8" />
              <FaInstagram  size={30} className="mr-8"  />
              <FaFacebookSquare  size={30} className="mr-8" />
              <FaGithubSquare  size={30} className="mr-8" />
              <FaDribbbleSquare size={30} className="mr-8"  />
            </div>

          </div>

          <div className="flex flex-row text-gray-400 relative lg:left-[650px] lg:top-[-260px] xl:left-[700px] 2xl:left-[850px] ">

            <div className="flex flex-col lg:col-span-2 justify-between px-2 py-12">
              {
                array1.map((item) => (
                  <div className="py-2"> 
                    <p className={`hover:scale-105 duration-300 hover:underline cursor-pointer`}>
                      {item.content}
                    </p>
                  </div>
                ))
              }
            </div>

            <div className="flex flex-col lg:col-span-2 justify-between px-2 py-12 ml-14">
              {
                array2.map((item) => (
                  <div className="py-2"> 
                    <p className={`hover:scale-105 duration-300 hover:underline cursor-pointer`}>
                      {item.content}
                    </p>
                  </div>
                ))
              }
            </div>

            <div className="flex flex-col lg:col-span-2 justify-between px-2 py-12 ml-14 ">
              {
                array3.map((item) => (
                  <div className="py-2"> 
                    <p className={`hover:scale-105 duration-300 hover:underline cursor-pointer`}>
                      {item.content}
                    </p>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col lg:col-span-2  px-2 py-12 ml-14 ">
              {
                array4.map((item) => (
                  <div className="py-2"> 
                    <p className={`hover:scale-105 duration-300 hover:underline cursor-pointer`}>
                      {item.content}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
       </div>
    </div>

  )
}

export default Footer