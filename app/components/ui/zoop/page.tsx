"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Text, Heart } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Github from '@/components/buttons/github'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ComponentContainer, PropContainer } from '@/components/docs/setcode'
import { Zoop, ZoopCode, UseCaseCode } from '@/components/ui/zoop'

const ZoopButtonPage = () => {
  const [level, setLevel] = useState("2")
  const pageRefs = [useRef(null),useRef(null),useRef(null)]
  const isInView = useInView(pageRefs[0], {amount: 0.5, once: false})
  const isInView1 = useInView(pageRefs[1], {amount: 0.5, once: false})
  const isInView2 = useInView(pageRefs[2], {amount: 0.5, once: false})

  useEffect(() => {
    if (isInView){
        setLevel("0")
    }
    if(isInView1){
        setLevel("1")
    }
    if(isInView2){
        setLevel("2")
    }
}, [isInView, isInView1, isInView2])


  const sections = [
    {
      title: "Preview",
      link: "#level1"
    },
    {
      title: "Use Case",
      link: "#level2"
    },
    {
      title: "Prop Overview",
      link: "#level3"
    }
  ]
  return (
    <div className='flex gap-4 h-full tc w-full'>
        <div className='w-full md:w-[70%] overflow-y-scroll scrollbar-hide pb-10 h-screen'>
            <div  ref={pageRefs[0]} id="level1" className='flex gap-4 flex-col mt-20 py-4'>
                <h1 className='text-3xl font-bold hc'>Accordion</h1>
                <p>
                    A fully customisable animated Stagger animation or I like to call it a Zoop animation.
                    Perfect for your hero sections, links and even buttons giving users an amazing hover experience. 
                </p>
                <ComponentContainer 
                    component={<Zoop text={`Hover Me`} className='text-2xl 4xl bg-transparent' />}
                    code={ZoopCode}
                />
            </div>

            {/* use case */}
            <div ref={pageRefs[1]} id="level2" className='flex gap-4 mt-6 md:mt-10 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Use Case</h1>
                <PropContainer code={UseCaseCode} 
                component={<Zoop text='AnimateX' />} />
            </div>


            {/* props */}
            <div ref={pageRefs[2]} id="level3" className='flex flex-col mt-6 md:mt-10'>
                  <h1 className='text-3xl font-bold hc'>Props Overview</h1>
                  <div>
                     <table className='w-full mt-2'>
                        <thead className='hc'>
                            <tr>
                              <td className='p-2'>Prop</td>
                              <td>Type</td>
                              <td>Options</td>
                              <td>Default</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>onClick</td>
                              <td>function</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>Text</td>
                              <td>string</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>ClassName</td>
                              <td>string</td>
                              <td>none</td>
                              <td>overflow-hidden relative</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>duration</td>
                              <td>number</td>
                              <td>none</td>
                              <td>0.25</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>stagger</td>
                              <td>number</td>
                              <td>none</td>
                              <td>0.025</td>
                            </tr>
                        </tbody>

                     </table>
                      
                  </div>
            </div>
           
            <div className=' border-t-1 text-center bc py-3 flex-col gap-2 mt-10'>
                <div className="justify-between flex items-center">
                  <Github text='Setup'/>
                  <Github text='Profile Slider'/>
                </div>
                <div className="text-center flex flex-col items-center mt-4 justify-center">
                  <p className='underline text-[14px] flex gap-2'>Created with <Heart size={14} color='red'/> by Ngwa Newton-Raul</p>
                  <p className='underline text-[14px] gap-2 '>Star on Github.</p>
                </div>
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
                                    level === String(i) &&
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

export default ZoopButtonPage