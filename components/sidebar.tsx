"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './logo'
import { useRouter } from 'next/navigation'


const Sidebar = () => {
    const [isHover, setIsHovered] = useState("noon")
    const route = useRouter()
    const links = [
        {
            Maintitle: "Stacks",
            Mainlink: "/stacks",
            subLinks: [
                {
                    title: "Steps",
                    link: "/components/Stacks/steps"
                },
                {
                    title: "Premium",
                    link: "/components/Stacks/premuim"
                },
                {
                    title: "Create",
                    link: "/components/Stacks/create"
                },
                {
                    title: "Choose",
                    link: "/components/Stacks/choose"
                },
                {
                    title: "Valentine",
                    link: "/components/Stacks/valentine"
                },
                {
                    title: "Counter",
                    link: "/components/Stacks/counter"
                },
                {
                    title: "Imessage",
                    link: "/components/Stacks/imessage"
                },
                {
                    title: "Inotification",
                    link: "/components/Stacks/inotification"
                }
            ]
        },
        {
            Maintitle: "Buttons",
            Mainlink: "/buttons",
            subLinks: [
                {
                    title: "Checkout",
                    link: "/components/Buttons/cart"
                },
                // {
                //     title: "Second Brain",
                //     link: "/components/Buttons/secondbrain"
                // }
                {
                    title: "Toast",
                    link: "/components/Buttons/toast"
                },
                {
                    title: "Github",
                    link: "/components/Buttons/github"
                },
                // {
                //     title: "Vercel",
                //     link: "/components/Buttons/vercel"
                // }
            ]
        },
        {
            Maintitle: "Texts & Inputs",
            Mainlink: "/texts",
            subLinks: [
                {
                    title: "Shake",
                    link: "/components/Texts/shaking"
                },
                {
                    title: "Confirmation",
                    link: "/components/Texts/confirm"
                }
            ]
        },
        {
            Maintitle: "Navigation",
            Mainlink: "/navigation",
            subLinks: [
                {
                    title: "Spring",
                    link: "/components/Navigations/spring"
                },
            ]
        },
        {
            Maintitle: "Images",
            Mainlink: "/images",
            subLinks: [
                {
                    title: "Flowstack",
                    link: "/components/Images/flowstack"
                },
                {
                    title: "Hover Slide",
                    link: "/components/Images/hoverslide"
                },

            ]
        },
    

    ]

    const handleNavigate = (link:string) => {
        route.push(link)
    }
  return (
    <div className='w-[80%] hidden md:flex-col md:flex md:w-50 lg:w-60 absolute top-0 bg-white z-20 left-0 md:relative p-2 h-full border-r-1 flex-col gap-2'>
        <div className='w-full h-30 flex items-center justify-center mb-5 border-b-1'>
            <Logo/>
        </div>
        {
            links.map((link, i) => 
            <div key={i} className='flex flex-col gap-1'>
                <h1 className='font-bold text-xl flex'>{link.Maintitle}<hr/></h1>
                <div className='pl-2 flex-col gap-1'>
                    {
                        link.subLinks.map((sub) => 
                        <motion.p 
                            onMouseEnter={() => setIsHovered(sub.title)} 
                            onMouseLeave={() => setIsHovered("nono")}
                            onClick={() => handleNavigate(sub.link)} 
                            className="cursor-pointer" 
                            animate={{
                                x: isHover === sub.title ? 10 : 0
                            }}
                            transition={{
                                duration: 0.5
                            }}
                            key={sub.link}>
                            {sub.title}
                        </motion.p>
                        	)
                    }
                </div>

            </div>
            )
        }

    </div>
  )
}

export default Sidebar