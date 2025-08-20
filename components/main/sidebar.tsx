"use client"
import React from 'react'
import { LayoutDashboard, Atom, Rocket, Book, Zap, Menu, Text, Blocks, Drama, MousePointer,Square, TextCursor } from 'lucide-react'
import Logo from './logo'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Search_Input from '../texts/search_input'

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
        main: "Buttons",
        icon: <MousePointer size={14}/>,
        links: [
            {
                title: "Press Button",
                icon: "",
                link: "/components/ui/pressbtn",
                tag: ''
            },
            {
                title: "Aura Button",
                icon: "",
                link: "/components/ui/aurabutton",
                tag: ''
                
            },
            {
                title: "Aero Button",
                icon: "",
                link: "/components/ui/aerobtn",
                tag: 'New'
                
            },
            {
                title: "Pulse",
                icon: "",
                link: "/components/ui/pulse",
                tag: ''
            },
            {
                title: "Shimmer Button",
                icon: "",
                link: "/components/ui/shimmerbtn",
                tag: ''
            },
            {
                title: "Delete",
                icon: "",
                link: "/components/ui/deleteBtn",
                tag: ''
            },
            {
                title: "Arrow Button",
                icon: "",
                link: "/components/ui/arrowbtn",
                tag: 'New'
            },
              
        ]
    },{
        main: "Menus",
        icon: <Menu size={14}/>,
        links: [
            {
                title: "Circular",
                icon: "",
                link: "/components/ui/circular",
                tag: ""
            },
            {
                title: "Gooey",
                icon: "",
                link: "/components/ui/gooey",
                tag: ""
            },
            {
                title: "Pill",
                icon: "",
                link: "/components/ui/pill",
                tag: ""
            }
        ]
    },{
        main: "Blocks",
        icon: <Blocks size={14}/>,
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
        ]
    },
    {
        main: "Cards",
        icon: <Square size={14}/>,
        links: [
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
                tag: ""
            },
            {
                title: "Tilt Card",
                icon: "",
                link: "/components/ui/tiltcard",
                tag: ""
            },
            {
                title: "Infinite Sliding",
                icon: "",
                link: "/components/ui/infinite",
                tag: "New"
            }
        ]
    },
    {
        main: "Backgrounds",
        icon: <Drama size={14}/>,
        links: [
            {
                title: "Meteor Shower",
                icon: "",
                link: "/components/ui/meteo",
                tag: ''
            },
            {
                title: "Hover Aura",
                icon: "",
                link: "/components/ui/hoveraura",
                tag: ""
            },
            {
                title: "Stars Glimmer",
                icon: "",
                link: "/components/ui/stars",
                tag: ""
            },
            {
                title: "Fade",
                icon: "",
                link: "/components/ui/fade",
                tag: ''
            },
        ]
    },{
        main: "Inputs",
        icon: <TextCursor size={14}/>,
        links: [
            {
                title: "Password Confirm",
                icon: "",
                link: "/components/ui/confirm",
                tag: ""
            }
        ]
    },
    {
        main: "Texts",
        icon: <Text size={14}/>,
        links: [
            {
                title: "Zoop",
                icon: "",
                link: "/components/ui/zoop",
                tag: ''
            },
            {
                title: "Incrementer",
                icon: "",
                link: "/components/ui/incrementer",
                tag: 'New'
            },
            {
                title: "Blur Fade",
                icon: "",
                link: "/components/ui/textblur",
                tag: 'New'
            },
        ]
    },
    {
        main: "Modals",
        icon: <Blocks size={14}/>,
        links: [
            {
                title: "Subscription Card",
                icon: "",
                link: "/components/ui/subCard",
                tag: 'New'
            }
        ]
    },
  ]
  return (
   <motion.div layout className={cn('w-[80%] md:w-60 lg:w-80 gap-4 border-r-1 tc bc h-screen main fixed z-60 md:flex md:relative md:flex-col transform transition-transform duration-500 left-0 top-0 md:translate-x-0',
    isopen ? "translate-x-0" : "-translate-x-[100%]"
   )}>
       <div className='min-h-fit max-h-[25%]'>
            <div className='hc flex justify-between w-full items-center p-2 border-b-1 bc'>
                <Logo width={4} height={4}/>
                <LayoutDashboard size={18}/>
            </div>
            <div className='w-full p-2 px-1 hidden md:flex'><Search_Input/></div>
       </div>
        <div className='pl-3 px-1 h-[85%] mb-4 md:h-[80%]'>
            <div className='flex gap-2 p-1 pl-1 items-center tc'>
                <Atom size={18}/>
                <p className='hc'>UI</p>
            </div>
            <div className="pl-3 text-[14px] overflow-x-hidden pb-5 h-[100%] scroll-dark relative scroll-bar scroll-button overflow-y-scroll ">
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
                                <div key={i} onClick={() => {
                                    route(link.link)}} 
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
   </motion.div>
  )
}

export default Sidebar