"use client"
import React, { useState } from 'react'
import { Mic, Camera, Paperclip, Sticker, LockOpen, Trash ,Lock, ChevronUp, ChevronLeft } from 'lucide-react'
import { AnimatePresence, motion, Variants } from 'framer-motion'

const TypeWritter: Variants ={
    initial:{
        opacity: 0
    },
    animate:{
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatDelay: 0.4
        }
    }
}

const WhatsApp = () => {

    const [hasStarted, setHasStarted] = useState(false)
    const locks = [{item: <LockOpen/>},{item:<Lock/>}]
    const [isExceed, setHasExceed] = useState(false)
    const max = 0
  
  return (
    <div>
        <div className='flex gap-2 relative justify-end h-50 bg-transparent'>
            <motion.div layout className='px-4 py-2 flex bg-black/95 relative justify-between w-70 md:w-80 overflow-x-hidden h-fit items-center self-end bottom-0 rounded-full text-gray-300'>
                <div className='flex gap-2'>
                    <Sticker/>
                    <span className='relative h-full'>Message<motion.p className='absolute left-0 font-bold top-0 text-green-500 h-full' variants={TypeWritter} initial="initial" animate="animate">|</motion.p></span>
                </div>
                <div className='flex gap-4'>
                    <Paperclip/>
                    <Camera/>
                </div>
               <AnimatePresence>
                    {
                        hasStarted ? 
                        <motion.div layout initial={{ x: "100%", opacity: 0}} animate={{ opacity: 1, x: 0}} exit={{ x: "100%", opacity: 0}} transition={{ duration: 0.4}} className='absolute top-0 right-0 overflow-x-hidden w-full h-full bg-black rounded-full py-2 flex justify-between'>
                            <div className='flex gap-2 items-center px-4'>
                              <div className='flex flex-col relative'>
                                <motion.div 
                                  
                                    initial={{
                                        opacity: 0,
                                        y: 0
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: isExceed ? -100 : "",
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 0
                                    }}
                                    transition={{
                                        repeat: isExceed ? 1 : Infinity,
                                        repeatDelay: 0.7,
                                        duration: 0.4
                                    }}
                                    className='text-red-600'><Mic size={16}/></motion.div>
                                    {
                                        isExceed ? 
                                        <motion.div initial={{ opacity: 0, y: 10}} animate={{opacity: 1, y:-9}} exit={{ opacity: 0, y: 10}} className='text-gray-500'><Trash size={16}/></motion.div> : ""
                                    }
                              </div>
                                <div>00:11</div>
                            </div>
                            <div className='flex gap-3 px-4 items-center overflow-hidden'>
                                <motion.div animate={{ x: [0, -5, 0]}} transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.9}}><ChevronLeft/></motion.div>
                                {
                                    hasStarted ?
                                    <motion.span initial={{opacity: 0}} animate={{opacity: hasStarted ? 1 : 0,}} exit={{opacity: 0}} transition={{ duration: 0.2}}>slide to cancel</motion.span> : ""
                                }
                            </div>
                        </motion.div> : ""
                    }
               </AnimatePresence>
            </motion.div>
           <div className='relative w-[36px] h-fit rounded-full self-end justify-end bg-black'>
                <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: -30}}
                onDrag={
                    (e, info) => {console.log(info.offset.x)
                        if(info.offset.x < -60){
                            setHasExceed(true)
                            console.log(isExceed)
                        }else{
                            setHasExceed(false)
                        }
                    } 
                }
                dragSnapToOrigin
                dragMomentum={false}
                whileHover={{ scale: 1.6}}
                onClick={() => setHasStarted(true)}
                onMouseEnter={() => setHasStarted(true)}
                onTap={() => setHasStarted(true)}
                onMouseLeave={() => 
                   { setHasExceed(false)
                    setHasStarted(false)}}
                style={{ borderRadius: "50%"}} className='p-1 z-10 absolute -bottom-1 -right-1 -left-1 w-12 h-12 flex items-center justify-center cursor-grab bg-green-500'><Mic/></motion.div>
               <AnimatePresence>
                    {
                        hasStarted ? 
                        <motion.div layout
                            initial={{
                                opacity: 0,
                                height:0
                            }}
                            animate={{
                            opacity: 1,
                            height:  125,
                            transition: {
                                duration: 0.4,
                            }}}
                            exit={{
                                opacity: 0,
                                height: 0
                            }}
                            className='bg-black/95 justify-center px-3 py-1 w-full text-center rounded-full flex text-white mb-2'>
                                <div>
                                    <AnimatePresence>
                                        {
                                            locks.map((item, i) => 
                                                max === i? 
                                                <motion.div  animate={{ y: [0, 5, 0]}}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    repeatType: "mirror",
                                                    ease: "easeInOut"
                                                }} layout layoutId='animate' key={i}>
                                                    {item.item}
                                                </motion.div> : ""
                                            )
                                        }
                                    </AnimatePresence>
                                    <motion.div animate={{ y: [0, -5, 0]}}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        ease: "easeInOut"
                                    }}
                                    className='mt-2 mx-auto text-center justify-center flex items-center'><ChevronUp size={16}/></motion.div>
                                </div>
                        </motion.div> : ""
                    }
               </AnimatePresence>
           </div>
        </div>
    </div>
  )
}

export default WhatsApp