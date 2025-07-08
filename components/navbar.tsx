"use client"
import React, { useState } from 'react'
import { Github, Twitter, Linkedin, ChevronDown} from 'lucide-react'
import Link from 'next/link'
import Logo from './logo'
import Search_Input from './texts/search_input'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isdropped, SetIsDropped] = useState(false)
  const links = [
    {
      icon: <Github/>,
      link: "none"
    }  ,{
      icon: <Twitter/>,
      link: "none"
    },  {
      icon: <Linkedin/>,
      link: "none"
    }
  ]
  
  return (
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
                      <div className=" hc p-1 rounded-full md:bg-transparent relative flex w-13 flex-col h-10 
                      md:h-fit md:w-fit text-white md:flex-row gap-2 items-center"> 
                        <div onClick={() => SetIsDropped(!isdropped)} 
                        className={cn('w-full h-full absolute items-center md:hidden justify-center flex z-20 rounded-full',
                        isdropped? "bg-white text-black": "bg-black text-white")}>
                            <motion.span 
                            animate={{
                              rotate: isdropped ? "180deg" : 0
                            }}
                            transition={{
                              stiffness: 0.1
                            }}
                            ><ChevronDown size={26}/></motion.span>
                          </div>
                        {
                          links.map((item, i) => 
                          <motion.span key={i}
                          animate={{
                              y: isdropped ? ((i + 0.9) * 50) : 0
                          }} 
                          transition={{
                            delay: (i * 0.1),
                            duration: 0.4,
                            type: "spring"
                          }}
                          className={`px-2 md:relative absolute left-0 mx-auto bg-black md:bg-transparent
                          rounded-full flex items-center justify-center h-10 w-10 -z-${i * 10}`}>
                            <Link href={item.link}>{item.icon}</Link>
                        </motion.span>)
                        }              
                      </div>
                </div>
           </div>
    </div>
  )
}

export default Navbar