import React, { ChangeEvent, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const SearchInput = () => {
  const [typing, setTyping] = useState(false)

  const handleIsTyping = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length > 0){
      setTyping(true)
    } else {
      setTyping(false)
    }
  }
  return (
    <>
       
        {/* svg filter */}
        <svg className='w-0 h-0 absolute'>
            <defs>
                <filter id='goo'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation={"6"} result='blur'/>
                    <feColorMatrix in='blur' mode={"matrix"} values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7' result='goo'/>
                    <feBlend in='SourceGraphic' in2={"goo"}/>
                </filter>
            </defs>
        </svg>


        <div className='rounded-md text-black w-1/2 relative border-2 border-gray-200/3 [filter:url(#goo)]'>   
            <input placeholder='Search something' onChange={(e) => handleIsTyping(e)} 
            className='h-full rounded-md w-full bg-white p-2 z-20 border-2 border-black relative outline-black'/>
          
                  <AnimatePresence>
                  {
                      typing &&
                      <motion.div
                      initial={{
                        y: 30,
                        opacity: 0,
                      }} 
                      animate={{
                        y: 55,
                        opacity: 1
                      }}
                      exit={{
                        y: 0,
                        opacity: 0
                      }}
                      className='absolute w-full top-0 h-20 rounded-md bg-white overflow-hidden z-10 [filter:url(#goo)]'></motion.div>
                    }
                  </AnimatePresence>
        </div>
    </>
    
  )
}
