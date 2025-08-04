"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'


interface link{
    text: string,
    link: string
}

interface prop{
    list: link[],
    className?: string,
    linkStyle?:string,
    pillStyle?: string,
    id: string
}

export const PillMenu = ({list, id="pill", 
    className = 'p-1 rounded-full w-fit bg-white border-2 border-black flex',
    linkStyle = "p-2 px-4 text-xs md:text-[16px] rounded-full cursor-pointer", 
    pillStyle = "rounded-full bg-black"}:prop) => {

    const [current, setCurrent] = useState(0)


  return (

    // parent container
    <div className={className + " " + "overflow-hidden"}>
        {  
            // linksssss
            list.map((link, i) => 
            <a href={link.link} key={i} onClick={() => setCurrent(i)} 
            className={linkStyle + " " + 'flex items-center justify-center relative'}>
                {
                    current === i &&
                    <motion.div layoutId={id} transition={{type: "spring", damping: 12}} 
                    className={ pillStyle + " " + 'absolute inset-0 z-10 top-0 left-0'}/>
                }
                <span className='z-20 mix-blend-difference text-white'>
                    {link.text}
                </span>
            </a>
            )
        }
    </div>
  )
}

export const Code = `
"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'


interface link{
    text: string,
    link: string
}

interface prop{
    list: link[],
    className?: string,
    linkStyle?:string,
    pillStyle?: string,
    id: string
}

export const PillMenu = ({list, id="pill", 
    className = 'p-1 rounded-full w-fit bg-white border-2 border-black flex',
    linkStyle = "p-2 px-4 text-xs md:text-[16px] rounded-full cursor-pointer", 
    pillStyle = "rounded-full bg-black"}:prop) => {

    const [current, setCurrent] = useState(0)


  return (

    // parent container
    <div className={className + " " + "overflow-hidden"}>
        {  
            // linksssss
            list.map((link, i) => 
            <a href={link.link} key={i} onClick={() => setCurrent(i)} 
            className={linkStyle + " " + 'flex items-center justify-center relative'}>
                {
                    current === i &&
                    <motion.div layoutId={id} transition={{type: "spring", damping: 12}} 
                    className={ pillStyle + " " + 'absolute inset-0 z-10 top-0 left-0'}/>
                }
                <span className='z-20 mix-blend-difference text-white'>
                    {link.text}
                </span>
            </a>
            )
        }
    </div>
  )
}

`


export const UseCase = `
"use client"
import React from 'react'
import { PillMenu } from './pillMenu'

const Page = () => {
  const links = [
    {
        text: "Home",
        link: "#"
    },
    {
        text: "Contact",
        link: "#"
    },
    {
        text: "About",
        link: "#"
    },
    {
        text: "Testimonials",
        link: "#"
    },
    {
        text: "Contributors",
        link: "#"
    },
    {
        text: "Components",
        link: "#"
    }
]

  return (
    <PillMenu  id='bin'
    pillStyle='rounded-md bg-black p-2 px-4'
    className='rounded-md p-1 bg-white flex'
    list={links}/>
  )
}

export default Page
`