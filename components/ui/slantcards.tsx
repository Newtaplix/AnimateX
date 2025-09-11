import Image from 'next/image'
import React from 'react'
import { motion as m } from 'framer-motion'

export const SlantCards = () => {
  return (
    <div>
      <m.div
       initial={{
        rotateY: 65
      }} 
      whileHover={{
        rotateY: 0
      }}
      className='bg-gray-400/4 p-1' 
      style={{transformStyle: "preserve-3d"}}>
          <m.div
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(40px)"
          }}
          className="p-2 shadow-md shadow-black rounded-md border-1 h-70 w-60 border-gray-500/8 bg-gray-700/8 
          flex flex-col items-center gap-2 justify-center">
            <div className='w-20 h-20 relative border-1 border-gray-400/8 overflow-hidden rounded-full'>
                <Image fill alt="Image" src={"/images.jpeg"}/>
            </div>
            <div className='text-center'>
              <h1 className='text-white'>Newton-Raul</h1>
              <p className='italic text-gray-500'>~Frontend Developer</p>
              <p className='text-xs'>Currently building AnimateX. An animated ui library for Nextjs & Reactjs devs.</p>
            </div>
          </m.div>
      </m.div>
    </div>
  )
}
