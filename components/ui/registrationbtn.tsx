"use client"
import React, { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { AnimatePresence, motion as m } from 'framer-motion'

interface authProps{
    isError: boolean,
    isCompleted: boolean,
    texts: string[],
    spinnerSpeed: number,
    className: string ,
    onClick: () => void
}

export const RegistrationButton = ({
    onClick,
    isError, 
    isCompleted, 
    texts = ["Register", "Setting Up", "Routing"], 
    spinnerSpeed = 1, 
    className}:authProps) => {
    const [loading, setLoading] = useState(false)
    const [current, setCurrent] = useState(0)

    const loaderVariants = {
        initial: {
            rotate: 0,
            opacity: 0,
            y: 5
        },
        spin: {
            rotate: 360,
            opacity: 1,
            transition: {
                duration: 0.87,
                ease: "linear",
                repeat: Infinity
            }
        }
    }
    
    useEffect(() => {
        if(loading){
            setCurrent((prev) => prev + 1)
            if(isError){
                setLoading(false)
                setCurrent(0)
            }else if(isCompleted){
                setCurrent(2)
            }
        }
    }, [loading, isCompleted, isError])

  return (
    <m.button layout 
    whileTap={{scale: spinnerSpeed}}
    onClick={() => {
        setLoading(!loading)
        onClick()
    }}
    disabled= {loading ? true : false} 
    className={`${className} p-2 px-4 rounded-md flex min-w-40 items-center cursor-pointer
     h-10 overflow-hidden relative bg-black text-white justify-center gap-2`}>
      <AnimatePresence>
        {
            loading &&
            <m.div
                variants={loaderVariants}
                animate={ loading ? "spin" : ""}
                ><Loader2/>
            </m.div>
        }
      </AnimatePresence>
     <m.div layout className='relative flex justify-center items-center h-full'>
        <p className='opacity-0'>{texts[0]}</p>
           
                {
                texts.map((t, i) => 
                    current === i &&
                        <m.div className='flex absolute w-fit top-0 left-0 right-0 mx-auto' key={i}>{t.split('').map((l, i) => 
                            <m.p initial={{y: 10, opacity: 0}} animate={{y:0, opacity: 1}} 
                            exit={{y:-50, opacity: 0}} transition={{delay: i * 0.025}} key={i}>{l}</m.p>
                        )}</m.div>
                
                )
                }
          
         </m.div>
    </m.button>
  )
}
