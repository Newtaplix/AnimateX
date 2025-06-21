"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Previews = () => {
  const components = [
    {
      name: "Steps",
      link: "/components/stacks/steps",
      image: "/snippets/steps.png",
      about: "Animated steps component"
    },
    {
      name: "Create",
      link: "/components/stacks/create",
      image: "/snippets/create.png",
      about: "Animated create activity panel"
    },
    {
      name: "Flowstack",
      link: "/components/images/flowstack",
      image: "/snippets/flow.png",
      about: "Image layout transitions"
    },
    {
      name: "Counter",
      link: "/components/stacks/counter",
      image: "/snippets/count.png",
      about: "Smoothly animated counter with blur effects"
    },
    {
      name: "Cart",
      link: "/components/buttons/cart",
      image: "/snippets/cart.png",
      about: "Checkout cart button"
    },
    {
      name: "Premuim",
      link: "/components/stacks/premuim",
      image: "/snippets/premuim.png",
      about: "Subcription choice component"
    },
    {
      name: "Confirm",
      link:"/components/Texts/confirm",
      image: "/snippets/confirm.png",
      about: "Animated password confirmation"
    },
    {
      name: "Inotification",
      link: "/components/Navigations/spring",
      image: "/snippets/inotifiy.png",
      about: "IOS notification stack"
    }
  ]
  return (
    <div className='text-center justify-center items-center mt-30'>
          <div>
              <h1 className='font-bold text-3xl mb-2'>Components</h1>
              <p>Is it Stacks, Cards, Buttons, Layouts every user interaction all bundled for you in one place</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center w-fit gap-6 mx-auto mt-8'>
              {
                components.map((item, i) =>
                <motion.div whileHover={{
                  y: -10,
                }} layout key={i} className='px-2 py-4 duration-5 transition hover:shadow-md cursor-pointer rounded-md bg-gray-300/30 w-60'>
                  <div className='relative bg-white overflow-hidden rounded-md w-full h-30'>
                      <Image src={item.image} fill alt='Preview'/>
                  </div>
                  <div className='text-left pt-2'>
                    <h1 className='font-bold text-xl mb-1'>{item.name}</h1>
                    <p>{item.about}</p>
                  </div>
                </motion.div>
                )
              }
          </div>
    </div>
  )
}

export default Previews