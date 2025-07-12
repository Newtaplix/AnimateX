"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Text, Heart, Folder } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Github from '@/components/buttons/github'
import Link from 'next/link'
import SetCode from '@/components/docs/setcode'


const Setup = () => {
  const [level, setLevel] = useState("")
    const ref = useRef(null)
    const isInView = useInView(ref, {amount: 0.6, once: false})

    useEffect(() => {
        if (isInView){
            setLevel("Getting started")
        }else{
            setLevel("How it works")
        }
    }, [isInView])
    const sections = [
        {
            title: "How it works",
            link: "/#intro"
        },
        {
            title: "Getting started",
            link: "/#creator"     
           }
    ]
  return (
    <div className='flex gap-4 h-full tc w-full'>
       
        <div className='w-[100%] md:w-[70%] overflow-y-scroll scrollbar-hide pb-2 pt-10 md:pt-20 h-screen'>
          {/* getting started */}
            <div className='border-b-1 border-gray-500 flex gap-4 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Setup</h1>
                <p>
                Here, you will learn how to get start intergrating AnimateX into your projects.
                </p>
                <h1 className='text-3xl font-bold hc'>How it Works</h1>
            </div>
            <div className='flex flex-col gap-4 hc mt-3 pb-4 border-b-1 border-gray-500'>
                <blockquote>
                      AnimateX is a collection of handcrafted animated UI components built with Framer Motion and 
                      Tailwind CSS, Instead of installing a package, you simply <span className='hc'>Copy and Paste</span> the components 
                      directly into your project.
                    <br/>
                    <br/>
                </blockquote>
                <blockquote>
                      This gives you full control, zero setup headaches, and complete flexibility to customise each component as you like.
                    <br/>
                    <br/>
                </blockquote>
            </div>
            {/* end of intro */}

            <div className='border-gray-500 flex gap-4 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Getting Started</h1>
            </div>
           <div ref={ref} className='pl-4 border-b-1 border-gray-500 pb-4'>
                {/* step 1 ----------------------------- */}
                <div className='flex gap-2 relative pl-6 border-l-1 border-gray-600'>
                    <div className='w-8 h-8 rounded-full -top-0 hc -left-4 absolute items-center p-4 flex justify-center bg-gray-600'>1</div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <blockquote className='flex flex-wrap py-3'>
                                Create a next project. If you havent created one. You can start by running the following commands.
                                Allowing and accepting Tailwing CSS and Typescript to be enabled.
                            </blockquote>
                            <SetCode code={"create-next-app@latest 'project-name'"} terminal={"npx"}/>
                        </div>
                        <div>
                            <blockquote>
                                Then direct into project directory by running the command.
                                <SetCode terminal='cd' code='project-name'/>
                            </blockquote>
                        </div>
                    </div>
                </div>  
                {/* step 2 -------------------- */}
              <div className='flex gap-2 relative pl-6 border-l-1 border-gray-600'>
                <div className='w-8 h-8 rounded-full -top-0 hc -left-4 absolute items-center p-4 flex justify-center bg-gray-600'>2</div>
                <div>
                    <blockquote className='flex flex-wrap py-3'>
                        Install the required dependencies that is; Framer-motion, Lucide-React with the following command.
                    </blockquote>
                    <SetCode code={"install framer-motion lucide-react"} terminal={"npm"}/>
                </div>
              </div>  
                {/* step 3 -------------------- */}
              <div className='flex gap-2 relative pl-6 border-l-1 border-gray-600'>
                <div className='w-8 h-8 rounded-full -top-0 hc -left-4 absolute items-center p-4 flex justify-center bg-gray-600'>3</div>
                <div>
                    <blockquote className='flex flex-wrap py-3'>
                        In your project directory, create a folder <span className='instruct'><Folder size={14}/> components </span>
                        to store your AnimateX components.
                        This helps keeps your project organised and well structured. You can easily create a folder by running the following 
                        command in your terminal inside your project directory.
                    </blockquote>
                    <SetCode code={"components"} terminal={"mkdir"}/>
                </div>
              </div>  
                {/* step 4 ------------------------ */}
              <div className='flex gap-2 relative pl-6 border-l-1 border-gray-600'>
                <div className='w-8 h-8 rounded-full -top-0 hc -left-4 absolute items-center p-4 flex justify-center bg-gray-600'>4</div>
                <div>
                    <blockquote className='flex flex-wrap py-3'>
                        Create a file in the component folder with name of the component you will be copying from AnimateX
                    </blockquote>
                    
                </div>
              </div>  
               {/* step 5 ------------------------ */}
               <div className='flex gap-2 relative pl-6 border-l-1 border-gray-600'>
                <div className='w-8 h-8 rounded-full -top-0 hc -left-4 absolute items-center p-4 flex justify-center bg-gray-600'>5</div>
                <div>
                    <blockquote className='flex flex-wrap py-3'>
                        Come to AnimateX copy the code and paste into the newly created file. Import where required and watch your site come to 
                        life.
                    </blockquote>
                    
                </div>
              </div>  
           </div>
            <div className='justify-between flex items-center py-3'>
                <p className='underline text-[14px] flex gap-2 items-center'>Created with <Heart size={14} color='red'/></p>
                <Github text='Accordion'/>
            </div>
        </div>

        {/* on this page ---------------------- */}
        <div className='w-[30%] relative hidden md:flex md:flex-col h-fit tc text-[14px] pt-20'>
            <div>
                <div className='flex gap-2 items-center'>
                    <Text size={14}/>
                    <p>On this page</p>
                </div>
                <div className='border-l-2 border-gray-600 ml-1'>
                    {
                        sections.map((item, i) => 
                        <div key={i} onClick={() => setLevel(item.title)} className='flex mt-2 flex-col gap-2'>
                            <Link href={item.link} className='px-2 cursor-pointer relative'>
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

export default Setup