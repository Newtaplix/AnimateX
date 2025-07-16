"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ComponentContainer, PropContainer } from '@/components/docs/setcode'
import { Fade, FadeCode , UseCode} from '@/components/ui/fade'
import LinksDiv from '@/components/main/LinksDiv'

const PulsePage = () => {
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
                <h1 className='text-3xl font-bold hc'>Fade</h1>
                <p>
                   A smooth transition that changes the opacity of an element over time, creating a graceful 
                   appearance and disappearance effect.
                </p>
                <ComponentContainer 
                    component={<div className='h-80 bg-gray-200/6 text-black overflow-y-scroll overflow-x-hidden flex flex-col gap-4 w-full p-2 md:w-1/2'>
                            <Fade amounty={20} view={0.6}>
                                <p className='mt-5 h-50 bg-blue-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                            </Fade>
                            <Fade amounty={20} view={0.6} repeat={true}>
                                <p className='mt-5 h-50 bg-green-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                            </Fade>
                            <Fade amountx={-20} view={0.6}>
                                <p className='mt-5 h-50 bg-red-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                            </Fade>
                            <Fade amounty={20} view={0.6} repeat={true}>
                                <p className='mt-5 h-50 bg-blue-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                            </Fade>
                            <Fade amounty={20} view={0.6}>
                                <p className='mt-5 h-50 bg-green-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                            </Fade>
                            <Fade amountx={-20} view={0.6} repeat={true}>
                                <p className='mt-5 h-50 bg-red-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                            </Fade>

                    </div>}
                    code={FadeCode}
                />
            </div>

            {/* use case */}
            <div ref={pageRefs[1]} id="level2" className='flex gap-4 mt-6 md:mt-10 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Use Case</h1>
                <PropContainer code={UseCode} 
                component={<div className='h-80 bg-gray-200/6 text-black overflow-y-scroll overflow-x-hidden flex flex-col gap-4 w-full p-2 md:w-1/2'>
                    <Fade amounty={20} view={0.5}>
                        <p className='mt-5 h-50 bg-orange-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                        Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                    </Fade>
                    <Fade amounty={20} view={0.5}>
                        <p className='mt-5 h-50 bg-yellow-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                        Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                    </Fade>
                    <Fade amountx={-20} view={0.5}>
                        <p className='mt-5 h-50 bg-red-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                        Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                    </Fade>
                    <Fade amounty={20} view={0.5}>
                        <p className='mt-5 h-50 bg-indigo-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                        Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                    </Fade>
                    <Fade amounty={20} view={0.5}>
                        <p className='mt-5 h-50 bg-brown-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                        Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                    </Fade>
                    <Fade amountx={-20} view={0.5}>
                        <p className='mt-5 h-50 bg-pink-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                        Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
                    </Fade>

            </div>} />
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
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>amountx</td>
                              <td>number</td>
                              <td>none</td>
                              <td>0</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>amounty</td>
                              <td>number</td>
                              <td>none</td>
                              <td>0</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>duration</td>
                              <td>number</td>
                              <td>none</td>
                              <td>0.5</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>view</td>
                              <td>number</td>
                              <td>none</td>
                              <td>0.5</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>repeat</td>
                              <td>boolean</td>
                              <td>none</td>
                              <td>false</td>
                            </tr>
                        </tbody>

                     </table>
                      
                  </div>
            </div>
           
            <LinksDiv previous='/components/ui/feedback' next='/components/ui/pulse' prevText='Feedback' nexText='Pulse'/>
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

export default PulsePage