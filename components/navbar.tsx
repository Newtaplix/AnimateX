"use client"
import React, { useState } from 'react'
import { ChevronRight} from 'lucide-react'
import Logo from './logo'
import Search_Input from './texts/search_input'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Sidebar from './sidebar'
import Image from 'next/image'

const Navbar = () => {
  const [isdropped, SetIsDropped] = useState(false)
 
  
  return (
   <div>
         <div className='w-full md:max-w-7xl fixed top-0 left-0 right-0 bg-transparent 
    mx-auto rounded-md backdrop-blur-lg md:px-4 px-1 py-[4px] z-60'>
           <div className='flex gap-2 justify-between items-center text-black'>
                <div className="flex items-center gap-2">
                    <Logo/>
                    <h1 className='font-bold hc hidden md:flex text-xl'>AnimateX</h1>
                </div>
                <div className="flex gap-2 items-center justify-end">
                      <div className='w-full'>
                          <Search_Input/>
                      </div>
                      <div className=" hc p-1 rounded-full md:bg-transparent relative flex justify-center flex-col
                      md:h-fit md:w-fit text-white md:flex-row gap-2 items-center"> 
                        <div onClick={() => SetIsDropped(!isdropped)} 
                        className={cn('w-7 h-7 items-center md:hidden justify-center flex z-20 rounded-full',
                        isdropped? "bg-white text-black": "bg-black text-white")}>
                            <motion.span 
                            animate={{
                              rotate: isdropped ? "180deg" : 0
                            }}
                            transition={{
                              stiffness: 0.1
                            }}
                            ><ChevronRight size={24}/></motion.span>
                          </div>
                            <div className='gap-3 hidden md:flex'>
                              <div><Image src={"/github.svg"} alt='git' width={24} height={24}/></div>
                              <div><Image src={"/X.svg"} alt='git' width={24} height={24}/></div>
                              <div><Image src={"/discord.svg"} alt='git' width={24} height={24}/></div>
                            </div>
                      </div>
                      
                </div>
           </div>
    </div>
    <div className="md:hidden">
        <Sidebar isopen={isdropped}/>
    </div>
   </div>
  )
}

export default Navbar