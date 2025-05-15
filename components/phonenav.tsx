"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const PhoneNav = () => {
    const [isHover, setIsHovered] = useState("noon")
    const route = useRouter()
    const links = [
        // {
        //     Maintitle: "Buttons",
        //     Mainlink: "/buttons",
        //     subLinks: [
        //         {
        //             title: "Cart",
        //             link: "/components/Buttons/cart"
        //         }
        //     ]
        // },
        {
            Maintitle: "Stacks",
            Mainlink: "/stacks",
            subLinks: [
                {
                    title: "Create",
                    link: "/components/Stacks/create"
                },
                {
                    title: "Calendar",
                    link: "/components/Stacks/calender"
                },
                {
                    title: "Choose",
                    link: "/components/Stacks/choose"
                },
                {
                    title: "Counter",
                    link: "/components/Stacks/counter"
                },
                {
                    title: "Imessage",
                    link: "/components/Stacks/imessage"
                },
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
      

    ]

    const handleNavigate = (link:string) => {
        route.push(link)
    }
  return (
    <div className='w-full md:hidden pt-14 pl-4 top-0 bg-white  p-2 h-full flex-col gap-2'>
        {
            links.map((link, i) => 
            <div key={i} className='flex flex-col gap-1'>
                <h1 className='font-bold text-xl flex'>{link.Maintitle}<hr/></h1>
                <div className='pl-3 flex-col gap-1'>
                    {
                        link.subLinks.map((sub) => 
                        <motion.p 
                            onMouseEnter={() => setIsHovered(sub.title)} 
                            onMouseLeave={() => setIsHovered("nono")}
                            onClick={() => handleNavigate(sub.link)} 
                            className="cursor-pointer mb-2" 
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

export default PhoneNav