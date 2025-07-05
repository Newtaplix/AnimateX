"use client"
import React from 'react'
import AnimateX from './animatex'
import{ motion} from 'framer-motion'



const Hero = () => {
  return (
    <div className='h-screen min-h-[70vh] relative md:min-h-[80vh] lg:min-h-[90vh] w-full mb-30 overflow-x-hidden'>
              <div className='absolute h-full w-full top-0 left-0 z-10 flex items-center justify-center'>
                <AnimateX/>
              </div>
              <motion.div className='blurspot bottom-3 -left-20 md:left-0 bg-pink-400'/>
                     
              <div className='blurspot top-7 -right-20 md:right-0 bg-yellow-400'/>
    </div>
  )
}

export default Hero