"use client"
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export const SliderNav = () => {
    const [current, setCurrent] = useState(0)
    const contents = [
        {
            title: "Page 1",
            content: <div className='w-full h-full bg-green-500'>Page 1</div>
        },
        {
            title: "Page 2",
            content: <div className='w-full h-full bg-yellow-500'>Page 2</div>
        },
        {
            title: "Page 3",
            content: <div className='w-full h-full bg-blue-500'>Page 3</div>
        }
    ]
  return (
    <div className='w-fit flex p-2 px-4 rounded-full bg-white'>
        {
            contents.map((info, i) => 
            <div onMouseEnter={() => setCurrent(i)} key={i} className='px-4 relative'>
                <div className='relative flex text-black gap-2 items-center justify-center'>
                    {info.title} <ChevronDown/>
                </div>              
            </div>)
        }
        
        <motion.div 
                layoutId='page'
                animate={{
                    // x: `${current * 100}%`
                }}
                transition={{
                    duration: 0.4
                }}
                className='absolute h-40 w-60 rounded-md bg-red-400 top-10 left-0 overflow-hiddn'>
                        <motion.div animate={{
                            x: `-${current * 100}%`
                        }} style={{
                            width: `${(contents.length + 1) * 100}%`
                        }} className='h-full flex left-0 bg-black py-2 justify-start'>                      
                                {contents.map((infos, i) => 
                                <div style={{width: "100%"}} key={i}>{infos.content}</div>)}
                        </motion.div>
                </motion.div> 

    </div>
  )
}
