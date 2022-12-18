import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Pricing = () => {

  const subscriptions = [
    {
      id: 1,
      name: "Single User",
      price: "$149",
      storage: "500 GB Storage",
      users: "1 Users Allowed",
      send: "Send up to 2 GB",
      img: single
    },
    {
      id: 2,
      name: "Partnership",
      price: "$199",
      storage: "1 TB Storage",
      users: "3 Users Allowed",
      send: "Send up to 10 GB",
      img: double,
    },
    {
      id: 3,
      name: "Group Account",
      price: "$299",
      storage: "5 TB Storage",
      users: "10 Users Allowed",
      send: "Send up to 20 GB",
      img: triple,
    },
  ]

  return (
    <div className="bg-white w-screen text-black ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mx-auto px-5 py-24">
           {
            subscriptions.map((subscription) => (
              <div className="flex flex-col items-center justify-center rounded-lg hover:scale-105 duration-300 shadow-md hover:bg-gray-200/40 w-full px-4"
                   key={subscription.id}
              >
                <img src={subscription.img} alt={subscription.name}
                     className="mx-auto w-20" />
                <h1 className="font-bold py-5 text-2xl">
                  {subscription.name}
                </h1>
                <h1 className="font-bold md:text-4xl">
                  {subscription.price}
                </h1>
                <div className="text-center">
                  <p className="border-b py-2 mt-8 font-semibold md:text-lg">{subscription.storage}</p>
                  <p className="border-b border-b py-2 mt-8 font-semibold md:text-lg w-48 lg:w-[300px]">{subscription.users}</p>
                  <p className="border-b py-2 mt-8 font-semibold md:text-lg">{subscription.send}</p>

                <button 
                className={`font-semibold w-[200px] my-8 h-12 mx-auto rounded-md cursor-pointer
                          ${subscription.id === subscriptions.length-1 ? "bg-black text-[#00df9a]" : "bg-[#00df9a]"} `}>
                   Start Trial
                </button>
                </div>
              </div>
            ))
           }
        </div>
    </div>

  )
}

export default Pricing