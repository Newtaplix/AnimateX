"use client"
import React, { useState } from 'react'
import { motion, Variants } from "framer-motion"
import { cn } from '@/lib/utils'

const Premium = () => {
    const [type, setType] = useState(true)
    const [yearly, setYearly] = useState(false)
    const colorTrans:Variants = {
        initial: {
            color: "black"
        },
        animate:{
            color: yearly ? "white" : "black",
            transition:{
                delay: 0.1
            }
        }

    }
     const colorTrans2:Variants = {
        initial: {
            color: "black"
        },
        animate:{
            color: !yearly ? "white" : "black",
            transition:{
                delay: 0.1
            }
        }

    }
  return (
    <div className="flex flex-row border w-full md:w-[60%] h-16 p-1 lg:w-[70%] justify-between p-0 items-center overflow-hidden rounded-full shadow-md">
        <div onClick={() => setType(true)} className='flex-1 cursor-pointer p-2 py-3 h-full flex relative items-center justify-center'>
            <motion.span
            initial={{
                color: "black"
            }}
            animate={{
                color: type ? "white" : "black"
            }}
            transition={{
                duration: 0.5,
                delay: 0.1
            }}
             className={cn("z-20 text-bold")}>Free</motion.span>
           {
                type &&
                 <motion.div layoutId='bg' className="absolute bg-black inset-0 rounded-full z-10"/>
           }
        </div>
        <div onClick={() => setType(false)} className={cn('items-center p-2 cursor-pointer flex-1 justify-center rounded-full rounded-full h-full relative flex flex-col', !type ? "text-white" : "text-black")}>
            <motion.h1 layout
                initial={{
                    scale: 1,
                    opacity: 1
                }}
                animate={{
                    scale: type ? 1 : 0.8,
                    opacity: type ? 1 : 0
                }}
                transition={{
                   duration: 0.4,
                   delay: 0.1
                }}
             className='z-10'>Premium</motion.h1>
           
              {
                type &&
                 <motion.div initial={{
                    scale: 0.8
                 }} layout className={cn("flex z-20 gap-2 items-center")}>
                      <motion.span 
                      layoutId='month'>Monthly</motion.span>
                    <motion.div layoutId="div" className='w-[6px] h-[6px] bg-black rounded-full'/>
                    <motion.span layoutId='anual'>Annual</motion.span>
                 </motion.div>
                    
              }
       
            {
                !type &&
                <div className='absolute inset-0 text-white z-20 rounded-full p-1 flex items-center justify-center gap-1'>
                    <motion.div
                     onClick={() => setYearly(false)} className='relative cursor-pointer flex-1 h-full rounded-full flex items-center justify-center'>
                        <motion.span 
                        variants={colorTrans}
                        initial="initial"
                        animate="animate"
                        layoutId='month' className={cn('z-30')}>Monthly</motion.span>
                       {
                            !yearly &&
                             <motion.div layoutId='sec' className='absolute z-20 bg-white inset-0 rounded-full'/>
                       }
                    </motion.div>
                    <motion.div layoutId='div' className="w-[6px] h-[6px]  bg-black rounded-full"/>
                    <motion.div onClick={() => setYearly(true)} className='relative flex-1 cursor-pointer h-full rounded-full flex items-center justify-center'>
                         <motion.span
                          variants={colorTrans2}
                            initial="initial"
                            animate="animate" 
                         layoutId='anual' className={cn('z-30')}>Annual</motion.span>
                        {
                            yearly &&
                             <motion.div layoutId='sec' className='absolute z-20 bg-white inset-0 rounded-full'/>
                       }
                    </motion.div>
                </div>
            }
            {
                !type &&
                <motion.div layoutId='bg' className='absolute bg-black z-10 rounded-full inset-0' />
            }
        </div>
    </div>
  )
}

export default Premium