"use client"
import React, { useState } from 'react'
import { CircleCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const Steps = () => {
    const [progress, setProgress] = useState(1)
    const [currentId, setCurrentId] = useState(0)
    const texts = [
       {
            icon: "",
            text: "Continue"
       },
       {
        icon: <CircleCheck size={17}/>,
        text: "Finish"
        }

    ]
    const handleClick = () => {
        setProgress(progress + 1)
        if(progress === 2){
            setCurrentId(1)
        }
        if(progress === 3){
            setProgress(3)
            
        }
    }

    const back = () => {
        setProgress(progress - 1)
        setCurrentId(0)
        if(progress === 1){
            setProgress(1)
        }
    }
  return (
    <div className='w-full h-1/2 gap-5 rounded-md items-center flex flex-col justify-center md:w-1/2'>

        <div className="flex relative gap-6 mx-auto w-fit rounded-full p-1">
            {
                [1,2,3].map((item) => 
                <div className='border-4 z-20  border-gray-100 rounded-full' key={item}>

                </div>)
            }
            <motion.div layout 
            style={{
                borderRadius: progress === 1 ? "20%" : "4px"
            }}
            className='absolute inset-0 w-fit bg-green-300 rounded-full gap-6 p-1 flex z-10'>
                {
                    [1,2,3].map((item) => 
                        (progress >= item) &&
                            <div className='border-4 opacity-0 z-20 border-white rounded-full' key={item}>

                            </div>
                    )
                }
            </motion.div>
        </div>
        <div className='flex gap-2 relative h-14 w-[80%] items-center justify-right p-2 overflow-hidden'>
           <AnimatePresence>
                {
                    progress > 1 && 
                    <motion.div 
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    animate={{
                        opacity: progress > 1 ? 1 : 0,
                        x: progress > 1 ? 0 : -300
                    }}
                    transition={{
                        duration: 0.4
                    }}
                    exit={{
                        opacity: 0,
                        x: -100
                    }}
                    onClick={() => back()}
                    className='px-2 cursor-pointer py-2 rounded-full bg-gray-200 items-center w-[25%] flex text-center justify-center'>
                        <p>Back</p>
                    </motion.div>
                }
           </AnimatePresence>
            <motion.div 
            layout onClick={() => handleClick()} className={cn('absolute cursor-pointer w-full overflow-hidden bg-blue-600 h-10 items-center justify-center text-center text-white px-3 py-2 rounded-full right-0', progress > 1 ? "w-[72%]" : "w-[100%]")}>
                  <motion.div layout className='relative w-fit flex items-center justify-center text-center mx-auto px-2 h-6 overflow-y-hidden'>
                        <AnimatePresence>
                            {
                                texts.map((text, i) =>
                                currentId === i &&
                                <motion.p initial={{
                                    y: progress === 3 ? 50 : progress < 3 ? -50 : 0
                                }}
                                animate={{
                                    y: 0
                                }} 
                                exit={{
                                    y: progress === 3 ? 50 : progress < 3 ? -50 : 0
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "linear"
                                }}
                                className='flex absolute top-0 mx-auto  left-0 right-0 gap-1 items-center text-center justify-center' key={text.text}>
                                    {text.icon} {text.text}
                                </motion.p>
                                )
                            }
                            <p className='opacity-0'>{texts[0].text}</p>
                        </AnimatePresence>
                  </motion.div>
            </motion.div>
        </div>


    </div>

  )
}

export default Steps