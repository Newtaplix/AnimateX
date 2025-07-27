import React from 'react'
import { motion } from 'framer-motion'


export const ScrollStack = () => {
  

  return (
    <div className='w-[100px] h-[200px] rounded-md flex relative bg-amber-500 items-center justify-center'>
      <motion.div 
      className='absolute bg-amber-600 top-1/2'
      animate={{
        rotate: "360deg",        
      }}
      
      style={{
        width: "10%",
        height: "100%",
        borderRadius: "50%",
        background: "blue",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"

      }}>

      </motion.div>

    </div>
  )
}
