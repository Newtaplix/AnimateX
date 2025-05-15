"use client"
import React, { useState } from 'react'
import { X, Folder, Trophy, Flag, Bell, ListCheck, File } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'


const Create = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState<number>(-1)

    const ListItems = [
        {
            name: 'Project',
            icon: <Folder/>
        },
        {
            name: 'Task',
            icon: <ListCheck/>
        },
        {
            name: 'Note',
            icon: <File/>
        },
        {
            name: 'Trophy',
            icon: <Trophy/>
        },
        {
            name: 'Flag',
            icon: <Flag/>
        },
        {
            name: 'Reminder',
            icon: <Bell/>
        }

    ]
  return (
    <>
    
    <div>
        <AnimatePresence>
            {
                isOpen &&
                <motion.div 
                layoutId='animated'
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                exit={{
                    opacity: 0,
                    y: 0,
                }}
                transition={{
                    duration: 0.2
                }}
                style={{
                    borderRadius: "1rem"
                }}
                className='w-64 overflow-hidden bg-black p-0'>
                    <div className='flex justify-between px-2 py-1 mt-2 items-center'>
                        {
                            isOpen && 
                            <motion.span 
                            layoutId='textlay'
                            
                            className='text-white'>Create New</motion.span>
                        }
                      <motion.span 
                      initial={{x: 20, y: 5, opacity: 0 }}
                      animate={{x: 0, y: 0, opacity: 1}}
                      exit={{x: 20, y: 5, opacity: 0}}
                      transition={{ duration: 0.4}}
                      className='bg-white flex items-center justify-center p-1 rounded-full h-fit'><X size={12} className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}/></motion.span>
                    </div>
                    <motion.div 
                    animate={{
                        scale: !isOpen ? 0.95 : 1,
                        opacity: !isOpen ? 0 : 1
                    }}
                    transition={{
                        duration: 0.2
                    }}
                    className='grid grid-cols-3 gap-2 p-2 bg-gray-400 rounded-t-2xl mt-1'>
                        {
                            ListItems.map((item, i) => 
                            <motion.div key={i}
                            onMouseEnter={() => setIsHovered(i)}
                            onMouseLeave={() => setIsHovered(-1)}
                            whileHover={{ scale: isHovered === i ? 1.1 : 1}}
                            animate={{
                                scale: isHovered === i ? 1.1 : 1,
                            }}
                            className='bg-white cursor-pointer p-2 text-gray-800 rounded-lg flex flex-col items-center justify-center gap-1'>
                                <motion.span
                                animate={{x: isHovered === i ? [0, -5 , 5, 0] : 0}}>{item.icon}</motion.span>
                                <span className='text-xs'>{item.name}</span>
                            </motion.div>
                            )
                        }
        
                    </motion.div>
    
                </motion.div>
            }
            {
                !isOpen &&
                <motion.div
                layoutId='animated'
                whileTap={{
                    scale: 0.95
                }} 
                exit={{
                    scale: 1.1,
                    opacity: 0
                }}
                transition={{
                    duration: 0.3
                }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    borderRadius: "1rem"
                }}
                className='bg-black w-fit m-auto text-white font-bold flex items-center gap-2 px-3 py-1 cursor-pointer'>
                    { !isOpen && <motion.span
                                layoutId='sign'
                                >+</motion.span>}
                    {
                        !isOpen &&
                        <motion.span
                        layoutId='textlay'
                        >Create New</motion.span>    
                    }        
                </motion.div>
            }
        </AnimatePresence>
    </div>
    </>
  )
}

export default Create