import React, {useState} from 'react'

const Subscription = () => {
    const [input, setInput] = useState('')
  return (
    <div className="bg-black w-screen text-white "> 
        <div className="px-4 py-20 grid lg:grid-cols-2 lg:px-40 mx-auto">
            <div className="flex flex-col ">

                <h1 className="text-2xl px-1 sm:text-3xl md:text-4xl font-bold" >
                    Want tips & tricks to optimize your flow?
                </h1>

                <p className="py-3 px-1">
                    Sign up to our newsletter and stay up to date.
                </p>

            </div>

            <div className="flex flex-col">

                <div className="flex sm:flex-row gap-3 p-3 px-1 lg:px-36 flex-col  items-center w-full">
                    <input 
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-md h-10 w-64 p-3 text-black"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    />
                    <button className="bg-[#00df9a] rounded-md text-black font-medium w-[200px] h-10 whitespace-nowrap text-ellipsis">
                        Notify me
                    </button>

                </div>
                    <p className="p-3 px-1 lg:px-36 md:w-[700px] ">
                        We care about the protection of your data. Read our <span> </span>
                        <span className="text-[#00df9a] underline cursor-pointer hover:scale-125 duration-300">Privacy Policy.</span>
                    </p>

            </div>
        </div>
    </div>
  )
}

export default Subscription