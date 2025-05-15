"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PhoneNav from './phonenav'
import { X, Menu } from 'lucide-react'

const Phone = () => {
    const [isOpen, setisOpen] = useState(false)
  return (
  <>
        
        
            <motion.div initial={{ opacity: 0}} animate={{ opacity: isOpen ? 0 : 1}} style={{borderRadius: "50%"}} className="bg-black text-white shadow-md flex items-center justify-center z-50 h-12 w-12 fixed bottom-2 p-2 right-1">
                <motion.span><Menu onClick={() => {setisOpen(true) 
                    console.log(isOpen)}} /></motion.span>
            </motion.div> 

        <AnimatePresence>
            {
                isOpen && 
                <motion.div initial={{ y: 300}} animate={{ y: 0 , opacity:1 }} exit={{ y: 300, opacity: 0}} transition={{ duration: 0.4}} style={{
                    borderTopRightRadius: "48px",
                    borderTopLeftRadius: "48px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px"
                }} className="bg-black h-1/2 border z-50 border-gray-300 border-b-none overflow-x-hidden overflow-y-scroll shadow-t-md w-full fixed bottom-0 right-0">
                    <motion.span><X size={28} onClick={() => setisOpen(false)} className='absolute top-4 right-4 bg-gray-400 rounded-full p-1' /></motion.span>
                    <PhoneNav/>
                </motion.div>
           }
        </AnimatePresence>
        
  </>
  )
}

export default Phone