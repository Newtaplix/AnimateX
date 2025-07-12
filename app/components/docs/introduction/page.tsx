"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Text, Heart } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Github from '@/components/buttons/github'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Introduction = () => {
    const [level, setLevel] = useState("")
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5, once: false})

    useEffect(() => {
        if (isInView){
            setLevel("Creator")
        }else{
            setLevel("Introduction")
        }
    }, [isInView])
    const sections = [
        {
            title: "Introduction",
            link: "/#intro"
        },
        {
            title: "Creator",
            link: "/#creator"     
           }
    ]
  return (
    <div className='flex gap-4 h-full tc w-full'>
        <div className='w-full md:w-[70%] overflow-y-scroll scrollbar-hide pb-10 py-20 h-screen'>
            <div className='border-b-1 bc flex gap-4 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Introduction</h1>
                <p>
                Get to know what AnimateX is and how you can use it.
                </p>
                <h1 className='text-3xl font-bold hc'>What is AnimateX</h1>
            </div>
            <div className='flex flex-col gap-4 hc mt-3 pb-4 border-b-1 bc'>
                <blockquote>
                    AnimateX is a modern animation library focused on delivering smooth, visually striking
                    ui components powered by Framer Motion, Next.js and Tailwind CSS. It was built out of need 
                    for more expressive and motion driven web interfaces where evry component not only works but feels alive.
                    <br/>
                    <br/>
                </blockquote>
                <blockquote>
                    This project started as a passion to go beyond static design and bring real movement into the frontend experience.
                     Every component in AnimateX is carefully crafted, tested, and refined with performance and creativity in mind.
                     <br/>
                     <br/>
                </blockquote>
                <blockquote>
                    From buttons and modals to loaders and transitions. AnimateX makes it easy for developers to intergrate powerful animations 
                    without getting lost in complexity. It also includes custom documentations making the learning process intuitive and enjoyable.
                    <br/>
                    <br/>
                </blockquote>

                <motion.div id='creator' ref={ref}
                className='p-2 rounded-md border-1 bc relative 
                overflow-hidden bg-white/4 tc '>
                    <p>Created by <span>Ngwa Newton-Raul</span> a developer who wanted more than just functionality. 
                    AnimateX is where <span>Code meets motion</span></p>
                    <div className="absolute top-0 left-0 w-[2px] rounded-full 
                                    bg-purple-400 h-full"/>
                </motion.div>
            </div>
            <div className='justify-between flex items-center py-3'>
                <p className='underline text-[14px] flex gap-2 items-center'>Created with <Heart size={14} color='red'/></p>
                <Github text='Setup'/>
            </div>
        </div>
        <div className='w-[30%] hidden md:flex md:flex-col relative h-fit tc text-[14px] pt-20'>
            <div>
                <div className='flex gap-2 items-center'>
                    <Text size={14}/>
                    <p>On this page</p>
                </div>
                <div className='border-l-2 bc ml-1'>
                    {
                        sections.map((item, i) => 
                        <div key={i} onClick={() => setLevel(item.title)} className='flex mt-2 flex-col gap-2'>
                            <Link href={item.link} className={cn('px-2 cursor-pointer relative')}>
                                {item.title}
                               {
                                    level === item.title &&
                                    <motion.div layoutId="key" className="absolute top-0 -left-[2px] w-[2px] rounded-full 
                                    bg-purple-400 h-full"/>
                               }
                            </Link>
                        </div>
                        )
                    }

                </div>
            </div>

        </div>
    </div>
  )
}

export default Introduction