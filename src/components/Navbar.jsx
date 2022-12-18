import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'



const Navbar = () => {
    const navbarItems = [
    {
        id: 1,
        content: 'Home'
    }, 
    {
        id: 2,
        content: 'Company'
    }, 
    {
        id: 3,
        content: 'Resources'
    }, 
    {
        id: 4,
        content: 'About'
    }, 
    {
        id: 5,
        content: 'Contact'
    }, 
]

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div>
        <div className="mx-auto bg-black w-screen h-24 flex justify-between items-center">
            <h1 className="text-[#00df9a] font-bold px-8 text-3xl md:text-3xl w-full hidden md:flex ">
                REACT.
            </h1>

            <div className="flex flex-row mr-20" >
                {
                    navbarItems.map((item) => (
                        <div key={item.id} className="hidden md:flex">
                            <ul className="text-white">
                                <li className="px-4 cursor-pointer hover:scale-105 duration-300">{item.content}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>

            <div onClick={handleNav} className="block md:hidden mr-2" > 
                {nav ? <AiOutlineClose color="white" size={20} /> : <AiOutlineMenu size={20} color="white" />}
            </div>

            <ul 
            className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#00300] ease-in-out duration-500 " : "ease-in-out duration-500 fixed left-[-100%] "}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 "> 
                    REACT.
                </h1>
            
                {
                    navbarItems.map((item) => (
                        <div key={item.id} className="py-4 ">
                            <ul className="text-white hover:bg-gray-400/20 rounded-lg ">
                                <li 
                                className={`
                                    ${item.id === navbarItems.length ? 
                                        `p-4 cursor-pointer ` 
                                        : 
                                        `p-4 cursor-pointer border-b border-gray-600 `
                                    }
                                    `
                                }
                            >{item.content}</li>
                            </ul>
                        </div>
                    ))
                }
            </ul>

    
        </div>
    </div>
  )
}

export default Navbar