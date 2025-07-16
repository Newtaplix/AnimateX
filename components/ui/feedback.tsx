"use client"
import React, { useEffect, useState } from 'react'
import { X,Loader } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'


interface feedback{
    openLabel?: React.ReactNode,
    buttonText?: string,
    buttonCommand: () => void,
    placeHolder?: string,
    message?: string,
    blockName?: string,
    inputCommand?: () => void,
    className?: string,
    buttonClassName?: string,
    inputClassName?: string
}


export const Feedback = ({openLabel, buttonText,
     buttonCommand, placeHolder, message, blockName, inputClassName,
      inputCommand, buttonClassName, className}:feedback) => {
    const [isOpen, setIsOpen] = useState(false)
    const [sending, setSending] = useState(false)
    const [ isDone, setIsDone] = useState(false)
    const defaultBtn = 'flex items-center justify-center cursor-pointer'
    const defaultInput = 'p-2 w-full'
    
    
    const send = () => {
        setSending(true)
        setTimeout(() => {
            setSending(false)
            setIsDone(true)
        }, 1000)
    }
    useEffect(() => {
       setTimeout(() => {
        if(isDone){
            setIsDone(false)
            setTimeout(() => setIsOpen(false), 500)
        }
       }, 2000)
    }, [isDone])

    const onclick = () => {
        send()
        buttonCommand()
    }


  return (
    <div className={className}>
        {
            !isOpen && 
            <motion.div layoutId='zap' 
            style={{
                borderRadius: "12px"
            }}
            transition={{
                duration: 0.3,
                stiffness: 0.1
            }}
            onClick={() => setIsOpen(true)} className='p-2 flex bg-gray-200/8 overflow-hidden cursor-pointer items-center'>
               {
                    !isOpen &&
                    <motion.span 
                    initial={{x: 20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: 20, opacity: 0}}
                    transition={{
                        delay: 0.25
                    }}
                    >{openLabel}</motion.span>
               }
            </motion.div>
        }





        {/* input form container */}
        {
            isOpen &&
            <motion.div 
            style={{
                borderRadius: "12px"
            }}
            transition={{
                duration: 0.3,
                stiffness: 0.1
            }}
            layoutId='zap' 
            className='relative overflow-hidden p-2 bg-gray-200/8 w-100 flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <p>{blockName}</p>
                    <AnimatePresence>
                        {
                            isOpen &&
                            <motion.div 
                                initial={{x: 20, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                exit={{x: 20, opacity: 0}}
                                transition={{
                                    delay: 0.25
                                }} 
                                onClick={() => setIsOpen(false)} 
                                className='p-1 hover:bg-gray-200/7 w-6 h-6 
                                rounded-full flex items-center cursor-pointer justify-center'><X size={14}/></motion.div>
                        }
                    </AnimatePresence>
                </div>
                <div>
                    <textarea onChange={inputCommand}
                    className={defaultInput + " " + inputClassName}
                    placeholder={placeHolder}>

                    </textarea>
                </div>
                <div className='justify-end flex w-full'>
                    <button onClick={() => onclick()} disabled ={sending ? true : false}
                    className={defaultBtn + " " + buttonClassName}>
                        {
                            !sending ?
                            <span>{buttonText}</span> :
                            <motion.div 
                            transition={{
                                duration: 0.4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            animate={{rotate: "360deg"}}><Loader/></motion.div>
                        }
                    </button>
                </div>



                {/* Done notifier */}
                <AnimatePresence>
                {
                    isDone && 
                    <motion.div 
                    initial = {{
                        height: 0
                    }}
                    animate={{
                        height: "100%"
                    }}
                    exit={{
                        height: 0
                    }}
                    className='absolute top-0 w-full h-full bg-gray-900 p-2 text-center items-center gap-3 justify-center flex left-0 flex-col'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <motion.path 
                            d="M21.801 10A10 10 0 1 1 17 3.335"
                            initial={{pathLength: 0}}
                            animate={{
                                pathLength: isDone ? 1 : 0
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                delay: 0.3
                            }}
                            />
                            <motion.path 
                            d="m9 11 3 3L22 4"
                            initial={{pathLength: 0}}
                            animate={{
                                pathLength: isDone ? 1 : 0
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                delay: 0.4
                            }}
                            />
                          </svg>
                        <p>{message} </p>
                    </motion.div>
                }
                </AnimatePresence>
            </motion.div>
        }
    </div>
  )
}





export const FeedBackCode = `
"use client"
import React, { useEffect, useState } from 'react'
import { X,Loader } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'


interface feedback{
    openLabel?: React.ReactNode,
    buttonText?: string,
    buttonCommand: () => void,
    placeHolder?: string,
    message?: string,
    blockName?: string,
    inputCommand?: () => void,
    className?: string,
    buttonClassName?: string,
    inputClassName?: string
}


export const Feedback = ({openLabel, buttonText,
     buttonCommand, placeHolder, message, blockName, inputClassName,
      inputCommand, buttonClassName, className}:feedback) => {
    const [isOpen, setIsOpen] = useState(false)
    const [sending, setSending] = useState(false)
    const [ isDone, setIsDone] = useState(false)
    const defaultBtn = 'flex items-center justify-center cursor-pointer'
    const defaultInput = 'p-2 w-full'
    
    
    const send = () => {
        setSending(true)
        setTimeout(() => {
            setSending(false)
            setIsDone(true)
        }, 1000)
    }
    useEffect(() => {
       setTimeout(() => {
        if(isDone){
            setIsDone(false)
            setTimeout(() => setIsOpen(false), 500)
        }
       }, 2000)
    }, [isDone])

    const onclick = () => {
        send()
        buttonCommand()
    }


  return (
    <div className={className}>
        {
            !isOpen && 
            <motion.div layoutId='zap' 
            style={{
                borderRadius: "12px"
            }}
            transition={{
                duration: 0.2,
                stiffness: 0.1
            }}
            onClick={() => setIsOpen(true)} className='p-2 flex bg-gray-200/8 overflow-hidden cursor-pointer items-center'>
               {
                    !isOpen &&
                    <motion.span 
                    initial={{x: 20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    exit={{x: 20, opacity: 0}}
                    transition={{
                        delay: 0.25
                    }}
                    >{openLabel}</motion.span>
               }
            </motion.div>
        }




        {/* input form container */}
        {
            isOpen &&
            <motion.div 
            style={{
                borderRadius: "12px"
            }}
            transition={{
                duration: 0.2,
                stiffness: 0.1
            }}
            layoutId='zap' 
            className='relative overflow-hidden p-2 bg-gray-200/8 w-100 flex flex-col gap-2'>
                <div className='flex justify-between'>
                    <p>{blockName}</p>
                    <AnimatePresence>
                        {
                            isOpen &&
                            <motion.div 
                                initial={{x: 20, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                exit={{x: 20, opacity: 0}}
                                transition={{
                                    delay: 0.25
                                }} 
                                onClick={() => setIsOpen(false)} 
                                className='p-1 hover:bg-gray-200/7 w-6 h-6 
                                rounded-full flex items-center cursor-pointer justify-center'><X size={14}/></motion.div>
                        }
                    </AnimatePresence>
                </div>
                <div>
                    <textarea onChange={inputCommand}
                    className={defaultInput + " " + inputClassName}
                    placeholder={placeHolder}>

                    </textarea>
                </div>
                <div className='justify-end flex w-full'>
                    <button onClick={() => onclick()} disabled ={sending ? true : false}
                    className={defaultBtn + " " + buttonClassName}>
                        {
                            !sending ?
                            <span>{buttonText}</span> :
                            <motion.div 
                            transition={{
                                duration: 0.4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            animate={{rotate: "360deg"}}><Loader/></motion.div>
                        }
                    </button>
                </div>



                {/* Done notifier */}
                <AnimatePresence>
                {
                    isDone && 
                    <motion.div 
                    initial = {{
                        height: 0
                    }}
                    animate={{
                        height: "100%"
                    }}
                    exit={{
                        height: 0
                    }}
                    className='absolute top-0 w-full h-full bg-gray-900 p-2 text-center items-center gap-3 justify-center flex left-0 flex-col'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <motion.path 
                            d="M21.801 10A10 10 0 1 1 17 3.335"
                            initial={{pathLength: 0}}
                            animate={{
                                pathLength: isDone ? 1 : 0
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                delay: 0.3
                            }}
                            />
                            <motion.path 
                            d="m9 11 3 3L22 4"
                            initial={{pathLength: 0}}
                            animate={{
                                pathLength: isDone ? 1 : 0
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                delay: 0.4
                            }}
                            />
                          </svg>
                        <p>{message} </p>
                    </motion.div>
                }
                </AnimatePresence>
            </motion.div>
        }
    </div>
  )
}

`


export const UseCase = `
    import React from 'react'
import { Feedback } from './feedback'
import { MessageCircle } from 'lucide-react'


const page = () => {
  return (
    <Feedback
    buttonText='Comment'
    buttonClassName='bg-gray-300 text-black p-2 rounded-md'
    message='Thanks for the Feedback'
    blockName='Feedback'
    placeHolder='Input text here'
    inputClassName='bg-black p-2 rounded-md' 
    openLabel={<MessageCircle size={24}/>}
    buttonCommand={() => null}/>
    
  )
}

`
