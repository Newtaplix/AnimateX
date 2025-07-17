import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Image from 'next/image'



interface contentAlert{
    width: number,
    height: number,
    iconStyle?: string,
    alertStyle?: string,
    image?: string,
    conditional?: boolean,
    displayDuration? : number   
}


export const ContentAlert = ({width, height, alertStyle, conditional, iconStyle, image = "/", displayDuration = 4}:contentAlert) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isDown, setIsDown] = useState(false)
    
    // defaultstyles
    const defaultAlertStyle = 'w-fit items-center absolute top-0 mx-auto flex'
    const defaultIconStyle = 'flex justify-center rounded-full items-center'


    // component variants
        const drop:Variants = {
            hidden:{
                opacity: 0,
                y: -20
            },
            show:{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }
        }

        // icon variant
        const iconVariants:Variants = {
            hidden: {
                width: 0,
                opacity: 0,
                x: 20
            },
            show:{
                width: width,
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }
        }

        //display condition
    useEffect(() => {
       if(conditional){
        setIsDown(true)
        setTimeout(() => setIsOpen(true), 500)
        setTimeout(() => setIsOpen(false), (displayDuration * 1000))
        setTimeout(() => setIsDown(false), ((displayDuration + 0.5) * 1000))
       }
    }, [conditional, displayDuration])

  return (
    <>
    {/* parent container */}
        <AnimatePresence>
            { isDown &&
                <motion.div 
                layout
                variants={drop}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={ defaultAlertStyle + " " + alertStyle}>

                        {/* icon container */}
                        <AnimatePresence>
                                {
                                        isOpen &&
                                        <motion.div
                                        layout
                                        variants={iconVariants}
                                        className={defaultIconStyle + " " + iconStyle}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        style={{
                                            width : width,
                                            height: height
                                        }}
                                        >
                                            <ArrowUp size={20}/>
                                        </motion.div> 
                                    }
                        </AnimatePresence>
                {/* image container */}
                <motion.div 
                layout
                style={{
                    width : width,
                    height: height
                }}
                className='relative rounded-full overflow-hidden'>
                            <Image fill src={image} alt='Image'/>
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    </>
  )
}


export const Code = `
    import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Image from 'next/image'



interface contentAlert{
    width: number,
    height: number,
    iconStyle?: string,
    alertStyle?: string,
    image?: string,
    conditional?: boolean,
    displayDuration? : number   
}


export const ContentAlert = ({width, height, alertStyle, conditional, iconStyle, image = "/", displayDuration = 4}:contentAlert) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isDown, setIsDown] = useState(false)
    
    // defaultstyles
    const defaultAlertStyle = 'w-fit items-center absolute top-0 mx-auto flex'
    const defaultIconStyle = 'flex justify-center rounded-full items-center'


    // component variants
        const drop:Variants = {
            hidden:{
                opacity: 0,
                y: -20
            },
            show:{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }
        }

        // icon variant
        const iconVariants:Variants = {
            hidden: {
                width: 0,
                opacity: 0,
                x: 20
            },
            show:{
                width: width,
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.4,
                    ease: "easeInOut"
                }
            }
        }

        //display condition
    useEffect(() => {
       if(conditional){
        setIsDown(true)
        setTimeout(() => setIsOpen(true), 500)
        setTimeout(() => setIsOpen(false), (displayDuration * 1000))
        setTimeout(() => setIsDown(false), ((displayDuration + 0.5) * 1000))
       }
    }, [conditional, displayDuration])

  return (
    <>
    {/* parent container */}
        <AnimatePresence>
            { isDown &&
                <motion.div 
                layout
                variants={drop}
                initial="hidden"
                animate="show"
                exit="hidden"
                className={ defaultAlertStyle + " " + alertStyle}>

                        {/* icon container */}
                        <AnimatePresence>
                                {
                                        isOpen &&
                                        <motion.div
                                        layout
                                        variants={iconVariants}
                                        className={defaultIconStyle + " " + iconStyle}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        style={{
                                            width : width,
                                            height: height
                                        }}
                                        >
                                            <ArrowUp size={20}/>
                                        </motion.div> 
                                    }
                        </AnimatePresence>
                {/* image container */}
                <motion.div 
                layout
                style={{
                    width : width,
                    height: height
                }}
                className='relative rounded-full overflow-hidden'>
                            <Image fill src={image} alt='Image'/>
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    </>
  )
}



`

export const Use = `
"use client"
import React, { useState } from 'react'
import { ContentAlert } from './contentAlert'

const Page = () => {
    const [alert, setAlert] = useState(false)
  return (
    <div className='flex items-center justify-center'>
    <ContentAlert width={32} height={32} 
    conditional={alert} 
    image="/pic.jpg"
    displayDuration={5}
    iconStyle='bg-white text-white rounded-full'
    alertStyle='p-1 bg-white mx-auto rounded-full'/>
    <button onClick={() => setAlert(!alert)} className='p-2 rounded-md text-black bg-white mt-20'>Notify</button>
</div>
  )
}

export default Page
`