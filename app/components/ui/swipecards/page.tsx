"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ComponentContainer } from '@/components/docs/setcode'
import { SwipeCard } from '@/components/ui/swipecards'
import LinksDiv from '@/components/main/LinksDiv'

const SwipeCardsPage = () => {
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
    // {
    //   title: "Use Case",
    //   link: "#level2"
    // },
    {
      title: "Prop Overview",
      link: "#level3"
    }
  ]
  return (
    <div className='flex gap-4 h-full tc w-full'>
        <div className='w-full md:w-[70%] overflow-y-scroll scrollbar-hide pb-10 h-screen'>
            <div  ref={pageRefs[0]} id="level1" className='flex gap-4 flex-col mt-20 py-4'>
                <h1 className='text-3xl font-bold hc'>Swipe Cards</h1>
                <p>
                   An animated swipe cards with amazing drag effects.
                </p>
                <ComponentContainer 
                    component={<SwipeCard/>}
                    code={""}
                />
            </div>

            {/* use case */}
            {/* <div ref={pageRefs[1]} id="level2" className='flex gap-4 mt-6 md:mt-10 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Use Case</h1>
                <PropContainer code={""
                  
                } 
                component={ <></>} />
            </div> */}


            {/* props */}
            {/* <div ref={pageRefs[2]} id="level3" className='flex flex-col mt-6 md:mt-10'>
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
                              <td>conditional</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>image</td>
                              <td>string</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>alertStyle</td>
                              <td>string</td>
                              <td>none</td>
                              <td>w-fit items-center absolute top-0 mx-auto flex</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>displayDuration</td>
                              <td>number</td>
                              <td>none</td>
                              <td>4</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>iconStyle</td>
                              <td>string</td>
                              <td>none</td>
                              <td>flex justify-center rounded-full items-center</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>width</td>
                              <td>number</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>height</td>
                              <td>number</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                        </tbody>

                     </table>
                      
                  </div>
            </div> */}
           
            <LinksDiv previous='/components/ui/pressbtn' next='' prevText='Press' nexText=''/>
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

export default SwipeCardsPage