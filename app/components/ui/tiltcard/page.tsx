"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ComponentContainer, PropContainer } from '@/components/docs/setcode'
import { TiltCard, code, useCase } from '@/components/ui/tiltcard'
import LinksDiv from '@/components/main/LinksDiv'
import Image from 'next/image'

const PasswordConfirmPage = () => {
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
                <h1 className='text-3xl font-bold hc'>Tilt Card</h1>
                <p>
                   A smoothly animated tilt card component to bring some hover magic to your site.
                </p>
                <ComponentContainer 
                    component={
                   <TiltCard>
                      <div className='h-full w-full flex items-center justify-center'>
                          <p className='text-2xl text-white'>Hover Me!!</p>
                      </div>
                   </TiltCard>}
                    code={code}
                />
            </div>

            {/* use case */}
            <div ref={pageRefs[1]} id="level2" className='flex gap-4 mt-6 md:mt-10 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Use Case</h1>
                <PropContainer code={useCase} 
                component={  
                <TiltCard className='overflow-hidden'>
                  <div className='h-full bg-white text-center w-full flex-col flex p-2 items-center justify-center'>
                      <div className='w-24 overflow-hidden border-3 border-gray-400 h-24 rounded-full relative'>
                          <Image src={"/images.jpeg"} fill alt='pic'/>
                      </div>
                      <div className="text-black">
                          <p>@Newton</p>
                          <p className="text-gray-500 text-[12px]">~Software Developer</p>
                      </div>
                      <p className='text-xs text-black mt-3'>Hi there! Am a software developer and I love building animations on the web.</p>
                  </div>
               </TiltCard>} />
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
                              <td>absolute inset-4 rounded-md bg-gray-800</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>shadowStyle</td>
                              <td>string</td>
                              <td>none</td>
                              <td>w-60 h-75 rounded-md bg-gray-200/5 relative</td>
                            </tr>
                        </tbody>

                     </table>
                      
                  </div>
            </div>
           
            <LinksDiv previous='/components/ui/confirm' next='' prevText='Confirm' nexText=''/>
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

export default PasswordConfirmPage