"use client"
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Inotification = () => {
    const [isStacked, setStacked] = useState<number[]>([])
    const stack = [
        {
            id: 0,
            notifications: [
                "Hurray! Am getting married tomorrow",
                "Just kidding. I got an entire century.",
                "But my friend Micheal got some kids already.",
                "Crazy right! Am just playing"
            ]
        },
        {
            id: 1,
            notifications: [
                "Hurray! Am getting married tomorrow",
                "Just kidding. I got an entire century.",
                "But my friend Micheal got some kids already.",
                "Crazy right! Am just playing"
            ]
        },
        {
            id: 2,
            notifications: [
                "Hurray! Am getting married tomorrow",
                "Just kidding. I got an entire century.",
                "But my friend Micheal got some kids already.",
                "Crazy right! Am just playing"
            ]
        },
       

    ]

    const manageStack = (id:number) => {
        if(isStacked.includes(id) ){
            const newArr = isStacked.filter((i) => i !== id)
            setStacked(newArr) }
        else{
        setStacked(prev => [...prev, id])
        console.log(isStacked)
    }
    }

  return (
    <div className="w-full md:w-[50%] flex flex-col h-[80%] overflow-y-scroll scrollbar-hide">
        {
            stack.map((item, id) => 
                <motion.div layout key={item.id} 
                whileInView={{opacity: 1, scale: 1, }} 
                initial={{opacity: 0, scale: 0.8}}
                transition={{
                    duration: 0.5,
                    delay: 0.05,
                    ease: "easeInOut"
                }}
                onClick={() => manageStack(id)} className={cn('w-full relative flex items-center', isStacked.includes(id) ? "flex-col-reverse mb-3" : "flex-col mb-3 min-h-20")}>
                    {
                        item.notifications.map((message, i) => 
                            <motion.div layout key={message}
                            style={{
                                width: isStacked.includes(id) ? "100%" : `${Math.floor((i+1)/item.notifications.length * 100)}%`
                            }}
                            className={cn(`h-14 border cursor-pointer text-center w-full flex overflow-hidden justify-center rounded-md`, isStacked.includes(id) ?  `relative` :`absolute shadow-md overflow-y-hidden mt-${(6-(i*2))}`)}>
                                <div className='w-full p-2 h-full relative overflow-hidden rounded-md'>
                                        <div className='top-0 left-0 absolute bg-gray-100 blur-[6px] w-full h-[200px] rounded-md'/>
                                        <div className='absolute text-center w-full flex items-center justify-center h-full bg-transparent top-0 left-0'>
                                            {
                                                i === item.notifications.length - 1 ? 
                                                <motion.p layout>{message}</motion.p>  :
                                            <AnimatePresence>
                                                    {
                                                        i < item.notifications.length -1 &&
                                                        <motion.p layout 
                                                            initial={{opacity: 0, y: -10}} 
                                                            animate={{y: isStacked.includes(id) ? 0 : -10, opacity: isStacked.includes(id) ? 1 : 0}}
                                                            exit={{opacity: 0, y: -10}}
                                                            >{message}
                                                        </motion.p>  
                                                    }
                                            </AnimatePresence>
                                            } 
                                        </div>                       
                                </div>
                            </motion.div>
                        )
                    }
                </motion.div>
                
            )
        }
    </div>
  )
}

export default Inotification