"use client"
import React from 'react'
import { LayoutDashboard, Atom, Rocket, Book, Zap } from 'lucide-react'
import Logo from './logo'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Search_Input from './texts/search_input'
import Image from 'next/image'
import Link from 'next/link'

interface nav{
    isopen?: boolean
}

const Sidebar = ({ isopen }:nav) => {
    
    const router = useRouter()
    const param = usePathname()
    const route = (link:string) =>  {
        
        router.push(link)
    }
   
  const links = [
    {
        main: "Introduction",
        icon: <Zap size={14}/>,
        links: [
            {
                title: "Getting Started",
                icon: <Book size={14}/>,
                link: "/components/docs/introduction"
            },
            {
                title: "Setup",
                icon: <Rocket size={14}/>,
                link: "/components/docs/setup"
            }
        ]
    },
    {
        main: "UI",
        icon: "",
        links: [
            {
                title: "Accordion",
                icon: "",
                link: "/components/ui/Accordion"
            }

        ]
    }
  ]
  return (
   <motion.div layout className={cn('w-80 md:w-60 lg:w-80 border-r-1 tc border-gray-600 h-full main fixed z-60 md:flex md:relative md:flex-col transform transition-transform duration-500 left-0 top-0 md:translate-x-0',
    isopen ? "translate-x-0" : "-translate-x-[100%]"
   )}>
        <div className='hc flex justify-between w-full items-center p-2 md:pt-6 border-b-1 border-gray-600'>
            <Logo width={4} height={4}/>
            <LayoutDashboard size={18}/>
        </div>
        <div className='w-full p-2 px-1 hidden md:flex'><Search_Input/></div>
        <div className='pl-3 px-1 h-full'>
            <div className='flex gap-2 pt-3 p-1 pl-1 items-center tc'>
                <Atom size={18}/>
                <p className='hc'>UI</p>
            </div>
            <div className="pl-3 text-[14px] h-full overflow-y-scroll scrollbar-hide">
               
                {
                    links.map((item) => 
                    <div key={item.main} className="pt-3 border-l-2 border-gray-600">
                        <div className=" px-2 hc flex gap-2 items-center">
                            {item.icon}
                            <p>{item.main}</p>
                        </div>
                        <div>
                            {
                                item.links.map((link, i) => 
                                <div key={i} onClick={() => route(link.link)} 
                                className={cn("px-2 flex gap-2 py-1 items-center cursor-pointer rounded-r-sm relative", 
                                link.link === param && "text-purple-400 bg-white/4")}>
                                    {link.icon}
                                    <p>{link.title}</p>
                                    {
                                        link.link === param &&
                                        <motion.div layoutId="keyio" className="absolute top-0 -left-[2px] w-[2px] rounded-full 
                                        bg-purple-400 h-full"/>
                                    }
                                </div>
                                )
                            }
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
        <div className='justify-end flex items-center px-0'>
            <div className='bg-gray-300/5 p-1 rounded-tl-md'>
                <Link href="https://github.com/Newtaplix/AnimateX" className='w-6 h-6 rounded-full overflow-hidden flex items-center relative'>
                    <Image src={"/github.svg"} alt='git' fill/>
                </Link>
            </div>
        </div>
   </motion.div>
  )
}

export default Sidebar