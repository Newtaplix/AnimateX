"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ComponentContainer, PropContainer } from '@/components/docs/setcode'
import LinksDiv from '@/components/main/LinksDiv'
import { Squishy, ReactCode, NextjsCode, UseCse1, UseCase2 } from '@/components/ui/squishy'


const AuthButtonPage = () => {
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
const images = [
  {
      image: "/pic.jpg",
      heading: "Barcelona, Spain",
        description: "Known for Gaudi's colourful architecture, Mediterranean beaches, tapes bars, and lively culture. A Blend of art, relaxation and nightlife.",
       link: "#"
      
  },
  {
      image: "/pic2.jpg",
      heading: "Cape Town, South Africa",
       description: "Nested between mountains and ocean, Cape Town has table Mountain, beaches, vineyards, and nearby safaris. A mix of adventure and culture.",
       link: "#"
      
  },
  {
      image: "/pic3.jpg",
      heading: "Hawaii, USA",
       description: "Each island offers unique beauty from active volcanoes on the Big Island, to bush jungles in Kauai",
       link: "#"
      
  },
  {
      image: "/pic4.jpg",
      heading: "Bahamas",
       description: "The beauty of the Bahamas is defined by its impossible spectrum of blue. Its waters shift from deep sapphire to luminous.",
       link: "#"
      
  },
  {
      image: "/pic5.jpg",
      heading: "Bahamas",
       description: "The beauty of the Bahamas is defined by its impossible spectrum of blue. Its waters shift from deep sapphire to luminous.",
       link: "#"
      
  },
  {
      image: "/pic.jpg",
      heading: "Bahamas",
      description: "The beauty of the Bahamas is defined by its impossible spectrum of blue. Its waters shift from deep sapphire to luminous.",
      link: "#"
  },
  {
      image: "/pic2.jpg",
      heading: "Bahamas",
      description: "The beauty of the Bahamas is defined by its impossible spectrum of blue. Its waters shift from deep sapphire to luminous.",
      link: "#"
  },
  {
      image: "/pic3.jpg",
      heading: "Bahamas",
      description: "The beauty of the Bahamas is defined by its impossible spectrum of blue. Its waters shift from deep sapphire to luminous.",
      link: "#"
      
  },

]


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
                <h1 className='text-3xl font-bold hc'>Squishy Cards</h1>
                <p>
                    Animated image gallery with close, open cards effect.
                </p>
                <ComponentContainer
                    component={<Squishy content={images}/>}
                    code={NextjsCode}
                    codejs={ReactCode}
                />
                

            </div>

            {/* use case */}
            <div ref={pageRefs[1]} id="level2" className='flex gap-4 mt-6 md:mt-10 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Use Case</h1>
                <div className='flex gap-4 mt-4'>
                    <p>autoplay= <span className='property'>true</span></p>
                    <p>switchDelay= <span className='property'>2</span></p>
                </div>
                <PropContainer
                    component={<Squishy autoplay={true} switchDelay={2} content={images}/>}
                    code={UseCse1}

                />
               <PropContainer
                    component={<Squishy content={images}/>}
                    code={UseCase2}
                />
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
                              <td className='p-2'>content</td>
                              <td>Array[image, heading, link, description]</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>autoplay</td>
                              <td>boolean</td>
                              <td>none</td>
                              <td>false</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>switchDelay</td>
                              <td>number</td>
                              <td>none</td>
                              <td>2</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>FCardWidth</td>
                              <td>number</td>
                              <td>none</td>
                              <td>400</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>ICardWidth</td>
                              <td>number</td>
                              <td>none</td>
                              <td>40</td>
                            </tr>
                        </tbody>

                     </table>
                      
                  </div>
            </div>
           
            <LinksDiv previous='/components/ui/pulse' next='' prevText='Pulse' nexText=''/>
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

export default AuthButtonPage