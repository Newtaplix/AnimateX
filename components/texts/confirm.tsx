"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { cn } from '@/lib/utils'

const Confirm = () => {
    const [Password, setPassword] = useState("")
    const [confirm, setConfirm] = useState<string[]>([])
    const [Confirm, SetConfirm] = useState("")
    const [PassArr, setArr] = useState<string[]>([])
    const [isTyping, setIsTyping] = useState({pass: false , con: false})
    const controls = useAnimation()
   

    const SetPassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value.slice(0, 18)
        setPassword(text)
        setIsTyping({pass: true, con: isTyping.con})
        setArr(text.split(""))
    }

    const ConfirmSplit = (e:React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value.slice(0, Password.length)
        SetConfirm(text)
        setIsTyping({con: true, pass: isTyping.pass})
        setConfirm(text.split(""))
        if(confirm.length === PassArr.length){
            controls.start({
                x: [0, -10, 10,-10, 10, 0],
                transition: {
                    duration: 0.3
                }

            })
        }
    }

  return (
    <div className="p-3 flex flex-col items-center w-full md:w-1/2 justify-center gap-3">
        <motion.div
        animate={controls}
        className="border w-full h-10 rounded-md relative">
                
                <motion.div layout 
                 style={{
                    width: `${Password.length * 13}px`,
                }}
                className='absolute h-6 w-fit z-10 bg-red-200/0 rounded-full flex overlow-x-hidden items-center my-1.5 text-transparent mx-2 py-[2px] overflow-clip'>
                 <AnimatePresence>
                    {
                        confirm.map((letter, i) => 
                            i < confirm.length &&
                            <motion.div
                            initial={{
                                width: 0,
                            }} 
                            animate={{
                                width: 13
                            }}
                            exit={{
                                width: 0
                            }}
                            key={i} className={cn("h-6 w-3 m-0 bg-red-400", letter === PassArr[i] ? "bg-green-300" : "bg-red-300")}/>
                        )
                   }
                 </AnimatePresence>
                </motion.div>
               <div className="absolute h-full z-20 w-full top-0 left-0 bg-transparent rounded-md">
                    <input 
                    value={Password} 
                    style={{
                        letterSpacing: isTyping.pass && Password.length !== 0 ? "6px" : ""
                    }}
                    className="p-2 px-3 text-xl gap-3 w-full h-full rounded-md bg-transparent outline-none text-[16px]" type='password' onChange={(e) => SetPassword(e)} placeholder="Password"/>
               </div>
          
          
        </motion.div>
        <div className="border rounded-md w-full">
                
              <input 
                style={{
                    letterSpacing: isTyping.con && confirm.length !== 0 ? "6px" : ""
                }}
              value={Confirm} className="p-2 px-3 w-full rounded-md outline-none text-[16px]" type='password' onChange={(e) => ConfirmSplit(e)} placeholder="Confirm Password"/>
        </div>
       
    </div>
  )
}

export default Confirm