"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './logo'

const Sidebar = () => {
    const [isHover, setIsHovered] = useState("")
    const links = [
        {
            Maintitle: "Buttons",
            Mainlink: "/buttons",
            subLinks: [
                {
                    title: "Github",
                    link: "/buttons/github"
                },
                {
                    title: "Cart",
                    link: "/buttons/cart"
                },
                {
                    title: "Celebrate",
                    link: "/buttons/celebrate"
                }
            ]
        },
        {
            Maintitle: "Navigation",
            Mainlink: "/navigation",
            subLinks: [
                {
                    title: "Github",
                    link: "/buttons/github"
                },
                {
                    title: "Cart",
                    link: "/buttons/cart"
                },
                {
                    title: "Celebrate",
                    link: "/buttons/celebrate"
                }
            ]
        },

    ]
  return (
    <div className='w-60 p-2 h-full border-r-1 flex flex-col gap-2 '>
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
                            onMouseLeave={() => setIsHovered("")}  
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