"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ComponentsMainPage = () => {
  const [isHovered, setIsHovered] = useState<number>(0)
  const buttonlist = [
    {
      name: "Cart",
      link: "Cart",
      status: "Available"
    },
    {
      name: "New Brain",
      link: "Github",
      status: "Unavailable"
    },
    {
      name: "Cart",
      link: "",
      status: "Available"
    },
    {
      name: "New Brain",
      link: "Github",
      status: "Unavailable"
    },
    {
      name: "Cart",
      link: "",
      status: "Available"
    },
    {
      name: "New Brain",
      link: "Github",
      status: "Unavailable"
    },
    {
      name: "Cart",
      link: "",
      status: "Available"
    },
    {
      name: "New Brain",
      link: "Github",
      status: "Unavailable"
    },
  ]
  return (
   <div className='justify-center flex-1'>
      {/** Heroo section for the Components ComponentsMainPage */}
         <div className='w-full h-50 flex flex-col items-center justify-center gap-3'>
            <h1 className='font-bold text-4xl'>Components</h1>
            <p>Animated components that provides users with a seamless experience</p>
            <button className='text-white bg-black px-3 py-2 rounded-md cursor-pointer'>Feedback</button>
        </div>

      {/** Buttons links ---------------------------------------------- */}


        <div className='mt-12 mb-14 text-center justify-center w-full px-20'>
          <h1 className='font-bold text-3xl'>Buttons</h1>
          <p className='text-gray-400'>Handcrafted animated buttons</p>
          <div className='grid grid-cols-4 mx-auto gap-3 mt-3 '>
            {
              buttonlist.map((button, i)=> 
              <div
                  onMouseEnter={() => setIsHovered(i)}
                  onMouseLeave={() => setIsHovered(-1)}
                    key={`buttons ${i}`} className="p-2 flex-1 h-22 flex cursor-pointer overflow-hidden relative items-center justify-center rounded-md border">
                  <motion.div
                  animate={{
                    rotate: isHovered === i ? "20deg" : "0deg",
                    height:  isHovered === i ? "85px" : ""
                  }}
                  transition={{
                    duration: 0.5
                  }}
                   className='absolute bg-black w-[500] bg-gray-100 bottom-0 h-10'/>
                  <Link href={`components/${button.link}`} className='rounded-md p-3 w-full z-10 h-full flex justify-center items-center font-bold md:text-xl'>
                      <div>
                          {button.name}
                      </div>
                  </Link>
              </div>
              )
            }

          </div>
        </div>


        {/** end of button links ------------------------------------- */}

         {/** Buttons links ---------------------------------------------- */}


         <div className='mt-12 mb-14 text-center justify-center w-full'>
          <h1 className='font-bold text-3xl'>Buttons</h1>
          <p className='text-gray-400'>Handcrafted animated buttons</p>
          <div className='grid grid-cols-4 mx-auto gap-3 mt-3 w-[80%]'>
            {
              buttonlist.map((button, i)=> 
              <div
                  onMouseEnter={() => setIsHovered(i)}
                  onMouseLeave={() => setIsHovered(-1)}
                    key={`buttons ${i}`} className="p-2 w-44 h-22 flex cursor-pointer overflow-hidden relative items-center justify-center rounded-md border">
                  <motion.div
                  animate={{
                    rotate: isHovered === i ? "20deg" : "0deg",
                    height:  isHovered === i ? "85px" : ""
                  }}
                  transition={{
                    duration: 0.5
                  }}
                   className='absolute bg-black w-[300] bg-gray-100 bottom-0 h-10'/>
                  <Link href={""} className='rounded-md p-3 w-full z-10 h-full flex justify-center items-center font-bold md:text-xl'>
                      <div>
                          {button.name}
                      </div>
                  </Link>
              </div>
              )
            }

          </div>
        </div>


        {/** end of button links ------------------------------------- */}


   </div>
  )
}

export default ComponentsMainPage