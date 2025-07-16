import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


export const Stacktrans = () => {

    const [images, setImages] = useState(["/pic.jpg","/pic3.jpg","/pic2.jpg"])


  return (
    <div>
        <div className='relative flex flex-reverse items-center bg-red-400 justify-center'>
            {
                images.map((image, i) => 
                <motion.div 
                layout
                className='absolute bg-red-500 shadow-lg cursor-pointer shadow-black rounded-md' 
                
                initial={{
                    x: i * -24,
                    y: i * 24,
                    zIndex: Math.floor(((i/images.length) * 5))
                }}
                 key={image}>
                    <div className='relative left-0 w-48 h-64 rounded-md overflow-hidden'>
                        <Image src={image} fill alt='image'/>
                    </div>
                </motion.div>
                )
            }
          
            <div className='absolute h-10 bg-red-500 w-150 flex justify-between'>
                <div className="p-2 rounded-full text-white bg-black">Prev</div>
                <div className="p-2 rounded-full text-white bg-black">Next</div>
            </div>
        </div>
    </div>
  )
}
