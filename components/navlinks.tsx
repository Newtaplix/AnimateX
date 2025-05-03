"use client"
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface listContent{
    text: string,
    link: string
}
interface ListProps{
    list: listContent[]
}

const Navlinks = ({ list }:ListProps) => {
    const [selected, setSelected] = useState<number>(0)

    const [choosen, setChoosen] = useState<number>(0)

    const linkslist = list

    const current = choosen > -1 ? linkslist[choosen].text : "default"
  return (
    <div>
        <div>
            <p className='text-center text-gray-500 text-xs mb-3'>/{current}</p>
        </div>
        <div className='flex p-2 py-1 md:py-2 md:px-4 relative border border-gray-300 rounded-full'>
            {
                linkslist.map((items, i) => 
                <motion.div key={i}
                onClick={() => setChoosen(i)}
                onMouseEnter={() => setSelected(i)}
                onMouseLeave={() => setSelected(choosen)}
                className='text-black bg-transparent cursor-pointer text-xs md:text-xl z-10 font-bold flex items-center justify-center text-center relative px-2 md:px-4 py-1 rounded-full'>
                <motion.span 
                animate={{
                    color: selected === i ? "white" : "black"
                }}
                transition={{
                    delay: selected === i ? 0.4 : 0
                }}
                className={cn('bg-transparent text-black relative z-10')}>{items.text}</motion.span>
                    <AnimatePresence>
                        {
                            selected === i &&
                            <motion.div 
                            layoutId='nav-link'
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut"
                            }}
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity:selected === i ? 1 : 0,
                                background: "black",
                            }}
                            exit={{
                                opacity: 0
                            }}
                            layout
                            className='bg-black absolute z-0 inset-0 rounded-full'/>
                        }
                    </AnimatePresence>
                </motion.div>
                )
            }
        </div>
  </div>
  )
}

export default Navlinks