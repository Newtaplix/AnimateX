"use client"
import React, { useState } from 'react'
import { SendHorizonal } from 'lucide-react'
import { motion } from 'framer-motion'

interface MessageProps {
    message: string,
    time: string,
}
const Imessage = () => {

    const [isTyping, setIsTyping] = useState(false)
    const [typed, setTyped] = useState("Message")
    const [messages, setMessages] = useState<MessageProps[]>([])
    const [numbers, setNumbers]= useState<number[]>([0])
    const [isSent, setIsSent] = useState(false)
    const [currentId, setCurrentId] = useState(0)   
    const placeHolder = 'Message'
    const now = new Date()
    const time = {hour: now.getHours(), minute: now.getMinutes()}

    const handlesend = () => {
        const message = {message:typed, time: `${time.hour}:${time.minute} ${time.hour >= 12 ? "PM" : "AM"}`}
        setMessages(prev => [...prev, message])
        console.log(messages)
        setIsTyping(false)
        setCurrentId(prev => prev + 1)
        setNumbers(prev => [...prev, currentId])
        setIsSent(true)
    }

    // const messages = ["I love you", "Will you marry me!","Booyah!","Dandadan","Solo Leveling Awakening"]
  return (
    <div className='w-full bg-gray-900/80 md:w-100 rounded-md p-2'>
        <motion.div layout className='flex flex-col items-end min-h-30 max-h-65 overflow-y-scroll scrollbar-hide bg-gray-500/40 rounded-md p-2 gap-2'>
            {
                messages.map((item, i) => 
                    <motion.div layout layoutId={`${i}`} style={{borderRadius: "20px", borderTopRightRadius: "0px"}} className='rounded-l-full max-w-[250px] w-fit text-left rounded-br-full flex-col flex text-white text-[14px] px-3 py-1 bg-black/70' key={item.message + i}>
                        <p className='text-[12px]'>{item.message}</p>
                        <span className="text-[10px] w-full text-gray-400 text-right">{item.time}</span>
                    </motion.div>
                )
            }
        </motion.div>
        <div className='flex gap-2 mt-10 relative'>
            <div onClick={() => setIsTyping(true)} className='p-2 rounded-full h-fit relative left-0 bg-black flex-1 flex items-center text-left bg-gray-900/79 border-2 border-black'>
               {
                    isTyping ?
                        numbers.map((_,i) => 
                        i === currentId &&
                                <div key={i} className='w-fit flex flex-col w-10'>
                                    <motion.input layout aria-multiline  layoutId={`${currentId}`} autoFocus onFocus={(e) => {
                                    if(isSent){
                                        e.target.value = ""
                                    }
                                }} onChange={(e) => {
                                    setIsSent(false)
                                    setTyped(e.target.value)}} style={{borderRadius: "12px"}} className='bg-gray-900/10 text-[14px] text-white w-full border-none h-full px-1 outline-none'>
                                        
                                    </motion.input>
                                    <span className="bg-white h-0 overflow-hidden">{typed}</span>
                                </div>
                            ) :  <motion.span className="text-white/60 w-fit h-full rounded-full text-[14px]">{placeHolder}</motion.span>
                        
               }
            </div>
            <motion.div whileHover={{scale: 1.1}} whileTap={{
                scale: 0.94
            }} onClick={() => handlesend()} className="rounded-full p-2 text-xl text-white cursor-pointer bg-black"><SendHorizonal/></motion.div>
        </div>
    </div>
  )
}

export default Imessage