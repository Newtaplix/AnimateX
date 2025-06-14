"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ComponentsMainPage = () => {
  const [isHovered, setIsHovered] = useState<number>(-1)
  const componentlist = [
    {
      title: "Stacks",
      index: "Stacks",
      description: "Stacked components such as calendars, panel etc.",
      subcomponents: [
        {
          name: "Steps",
          link: "steps",
          status: "Available"
        },
         {
          name: "Premuim",
          link: "premuim",
          status: "Available"
        },
        {
          name: "Create",
          link: "create",
          status: "Available"
        },
        {
          name: "Choose",
          link: "choose",
          status: "Available"
        },
        {
          name: "Counter",
          link: "counter",
          status: "Available"
        },
        {
          name: "Valentine",
          link: "valentine",
          status: "Available"
        },
      
        {
          name: "Imessage",
          link: "imessage",
          status: "Available"
        },
        {
          name: "Inotification",
          link: "inotification",
          status: "Available"
        },
      ]
    },
    {
      title: "Buttons",
      index: "Buttons",
      description: "Handcrafted animated buttons",
      subcomponents: [
        {
          name: "Cart",
          link: "cart",
          status: "Available"
        },
        {
          name: "Toast",
          link: "toast",
          status: "Available"
        },
        {
          name: "Github",
          link: "github",
          status: "Available"
        },
        // {
        //   name: "Rainbow",
        //   link: "vercel",
        //   status: "Available"
        // },
      ]
    },
    {
      title: "Inputs & Text",
      index: "Texts",
      description: "Animated input forms and some crazy texts.",
      subcomponents: [
        {
          name: "Shake",
          link: "shaking",
          status: "Available"
        },
        {
          name: "Confirmation",
          link: "confirm",
          status: "Available"
        },
      ]
    },
    {
      title: "Navigations",
      index: "Navigations",
      description: "Navbars to keep your web navigation seamless.",
      subcomponents: [
        {
          name: "Spring",
          link: "spring",
          status: "Available"
        },
      ]
    },
    {
      title: "Images",
      index: "Images",
      description: "Animated Components with Images",
      subcomponents: [
        {
          name: "Flowstack",
          link: "flowstack",
          status: "Available"
        },
        {
          name: "Hover Slide",
          link: "hoverslide",
          status: "Available"
        },
      ]
    }
  ]
  return (
   <div className='justify-center px-2 flex-1 mt-10'>
      {/** Heroo section for the Components ComponentsMainPage */}
         <div className='w-full h-50 flex flex-col items-center justify-center gap-3'>
            <h1 className='font-bold text-4xl'>Components</h1>
            <p>Animated components that provides users with a seamless experience</p>
            <button className='text-white bg-black px-3 py-2 rounded-md cursor-pointer'>Feedback</button>
        </div>

      {/** Buttons links ---------------------------------------------- */}


      {
        componentlist.map((item, i) => 
            <div key={i} className='mt-12 mb-14 text-left justify-center w-full px-2 md:px-3 lg:px-20'>
              <h1 className='font-bold text-3xl'>{item.title}</h1>
              <p className='text-gray-400'>{item.description}</p>
              <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-3 mt-3 '>
                {
                  item.subcomponents.map((component, i)=> 
                  <div
                      onMouseEnter={() => setIsHovered(i)}
                      onMouseLeave={() => setIsHovered(-1)}
                        key={`buttons ${i}`} className="p-2 flex-1 h-30 md:h-22 flex cursor-pointer overflow-hidden relative items-center justify-center rounded-md border">
                      <motion.div
                      animate={{
                        rotate: isHovered === i ? "20deg" : "0deg",
                        y: isHovered === i ? "-30px" : "0" ,
                        // height:  isHovered === i ? "85px" : "",
                        scale: isHovered === i ? 3 : 1
                      }}
                      transition={{
                        duration: 0.5
                      }}
                      className='absolute w-[2000] bg-gray-100 bottom-0 h-[50%] md:h-10'/>
                      <Link href={`components/${item.index}/${component.link}`} className='rounded-md p-3 w-full z-10 h-full flex justify-center items-center font-bold md:text-xl'>
                          <div>
                              {component.name}
                          </div>
                      </Link>
                  </div>
                  )
                }

              </div>
            </div>
        )
      }


        {/** end of button links ------------------------------------- */}

   </div>
  )
}

export default ComponentsMainPage