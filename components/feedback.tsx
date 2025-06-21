"use client"
import React, { useState } from 'react'
import { MessageCircleIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Feedback = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <AnimatePresence>
               {
                    !isOpen &&
                <motion.div layoutId='main' transition={{
                    duration: 0.3
                }} onClick={() => setIsOpen(true)} 
                style={{
                    borderRadius: "50%"
                }}
                className='fixed overflow-hidden w-12 h-12 flex items-center cursor-pointer justify-center z-30 right-10 bg-black bottom-20'>
                        <motion.div layoutId='icon' className="text-white"><MessageCircleIcon/></motion.div>
                    </motion.div>
                }
                {
                    isOpen &&
                    <motion.div layoutId='main' 
                    style={{
                        borderRadius: "12px"
                    }}
                    className='fixed overflow-hidden shadow-md flex flex-col p-2 pb-4 items-center bg-black text-gray-300 w-[97%] md:w-100 justify-center z-30 right-0 md:right-5  gray_border bottom-20'>
                            <div className='p-2 flex justify-between w-full py-3 mb-4 items-center'>
                                <h1 className='flex gap-2 items-center'><motion.span layoutId='icon'><MessageCircleIcon/></motion.span>Feedback</h1>
                                <motion.div 
                                initial={{
                                    x: 20,
                                    opacity: 0
                                }}
                                animate={{
                                    x:0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.3
                                }}
                                onClick={() => setIsOpen(false)} className='bg-gray-300/20 p-2 cursor-pointer rounded-full w-8 h-8 flex items-center justify-center'>X</motion.div>
                            </div>
                            {
                                isOpen &&
                                <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 25
                                }} 
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 25
                                }}
                                transition={{
                                    delay: 0.3,
                                    ease: "linear",
                                    duration: 0.3
                                }}
                                className='flex flex-col w-full gap-4'>
                                     <input type="text" className='border-2 border-gray-300/20 p-2 rounded-md outline-gray-400' placeholder='Username' />
                                    <input type="email" className='border-2 border-gray-300/20 p-2 rounded-md outline-gray-400' placeholder='Email' />
                                    <textarea name="" placeholder='Message' id="" className='h-20 border-2 border-gray-300/40 rounded-md outline-gray-400 p-2'></textarea>
                                    <button className="w-full py-2 text-center dark:bg-black text-black bg-white rounded-md">Send</button>
                                </motion.div>
                            }
                    </motion.div>
                }
        </AnimatePresence>
    </>
  )
}

export default Feedback