"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ComponentContainer, PropContainer } from '@/components/docs/setcode'
import { Tabs } from '@/components/ui/tabs'
import LinksDiv from '@/components/main/LinksDiv'

const HorizontalScrollPage = () => {
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

  const arr = [{
    title: "Tab 1",
    content: <div className='w-full h-full bg-red-400 flex flex-shrink-0 items-center justify-center text-black text-4xl'>Tab 1</div>
},{
    title: "Tab 2",
    content:<div className='w-full h-full bg-green-400 flex items-center flex-shrink-0 justify-center text-black text-4xl'>Tab 2</div>
},{
    title: "Tab 3",
    content: <div className='w-full h-full bg-yellow-400 flex-shrink-0 flex items-center justify-center text-black text-4xl'>Tab 3</div>
}]
  return (
    <div className='flex gap-4 h-full tc w-full'>
        <div className='w-full md:w-[70%] overflow-y-scroll scrollbar-hide pb-10 h-screen'>
            <div  ref={pageRefs[0]} id="level1" className='flex gap-4 flex-col mt-20 py-4'>
                <h1 className='text-3xl font-bold hc'>Tabs</h1>
                <p>
                    Animated tabs component
                </p>
                <ComponentContainer 
                    component={
                    <Tabs tabs={arr}/>
                    }
                    code={""}
                />
            </div>

            {/* use case */}
            <div ref={pageRefs[1]} id="level2" className='flex gap-4 mt-6 md:mt-10 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Use Case</h1>
                <PropContainer code={""} 
                component={<></>} />
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
                              <td className='p-2'>className</td>
                              <td>string</td>
                              <td>none</td>
                              <td>absolute inset-0 z-10</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>displacement</td>
                              <td>number</td>
                              <td>none</td>
                              <td>1</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>speed</td>
                              <td>number</td>
                              <td>none</td>
                              <td>0.6</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>pulseDelay</td>
                              <td>number</td>
                              <td>none</td>
                              <td>0.4</td>
                            </tr>
                        </tbody>

                     </table>
                      
                  </div>
            </div>
           
            <LinksDiv previous='/components/ui/fade' next='/components/ui/zoop' prevText='Fade' nexText='Zoop'/>
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

export default HorizontalScrollPage