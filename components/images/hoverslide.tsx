import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
const HoverSlide = () => {
    const [isHover, setHover]= useState(false)

    const img = [
        {
            image: "/pic.jpg"
        },
        {
            image: "/pic.jpg"
        },
        {
            image: "/pic.jpg"
        },
        {
            image: "/pic.jpg"
        }
    ]
  return (
    <div className="flex gap-2 w-[65%] relative h-full bg-green-500 items-center">
        {
            img.map((item, i) => 
                <div key={i} className={`absolute top-[50%] bottom-[30%] right-0 left-0 w-fit my-auto mx-auto`}>
                     <motion.div
                     onMouseEnter={() => setHover(true)}
                      className={cn("relative w-30 absolute h-38 border-4 cursor-pointer rounded-md border-gray-200 overflow-clip shadow-md", isHover ? `rotate-${ i * 5}` : "" )}>
                        <Image src={item.image} alt='Image' fill/>
                    </motion.div>
                </div>
           )
        }
    </div>
  )
}

export default HoverSlide