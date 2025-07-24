"use client"
import React from 'react'
import { LayoutDashboard, Atom, Rocket, Book, Zap } from 'lucide-react'
import Logo from './logo'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Search_Input from '../texts/search_input'
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
                link: "/components/docs/introduction",
                tag: null

            },
            {
                title: "Setup",
                icon: <Rocket size={14}/>,
                link: "/components/docs/setup",
                tag: ""
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
                link: "/components/ui/Accordion",
                tag: ''
                
            },
            {
                title: "Content Alert",
                icon: "",
                link: "/components/ui/contentalert",
                tag: ''
            },
            {
                title: "Feedback",
                icon: "",
                link: "/components/ui/feedback",
                tag: ''
            }
            ,
            {
                title: "Fade",
                icon: "",
                link: "/components/ui/fade",
                tag: ''
            }
            ,
            {
                title: "Pulse",
                icon: "",
                link: "/components/ui/pulse",
                tag: ''
            },
            {
                title: "Zoop",
                icon: "",
                link: "/components/ui/zoop",
                tag: ''
            },
            {
                title: "Press Button",
                icon: "",
                link: "/components/ui/pressbtn",
                tag: ''
            },
            {
                title: "Swipe Cards",
                icon: "",
                link: "/components/ui/swipecards",
                tag: ''
                
            },
            {
                title: "Swipe Cards 2",
                icon: "",
                link: "/components/ui/cards2",
                tag: "New"
            },
            {
                title: "Password Confirm",
                icon: "",
                link: "/components/ui/confirm",
                tag: "New"
            },
            {
                title: "Tilt Card",
                icon: "",
                link: "/components/ui/tiltcard",
                tag: "New"
            }
           

        ]
    }
  ]
  return (
   <motion.div layout className={cn('w-80 md:w-60 lg:w-80 border-r-1 tc bc h-full main fixed z-60 md:flex md:relative md:flex-col transform transition-transform duration-500 left-0 top-0 md:translate-x-0',
    isopen ? "translate-x-0" : "-translate-x-[100%]"
   )}>
        <div className='hc flex justify-between w-full items-center p-2 md:pt-6 border-b-1 bc'>
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
                    <div key={item.main} className="pt-3 border-l-2 bc">
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
                                    <p className='flex gap-2'>{link.title}
                                       {link.tag ?  <span className='p-[2px] px-[4px] border-1 text-xs border-gray-200/6 bg-gray-200/6 flex items-center rounded-full text-gray-400'>{link.tag}</span> : null}</p>
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