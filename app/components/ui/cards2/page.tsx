"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ComponentContainer, PropContainer } from '@/components/docs/setcode'
import { Card, SwipeContainer, code, useCase } from '@/components/ui/card2'
import LinksDiv from '@/components/main/LinksDiv'
import Image from 'next/image'

const Cards2page = () => {
  const [level, setLevel] = useState("2")
  const pageRefs = [useRef(null),useRef(null),useRef(null)]
  const isInView = useInView(pageRefs[0], {amount: 0.5, once: false})
  const isInView1 = useInView(pageRefs[1], {amount: 0.5, once: false})
  const isInView2 = useInView(pageRefs[2], {amount: 0.5, once: false})
 
  const places = [
    {
      id: 1,
      url: "/pic.jpg",
      info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    },
    {
      id: 2,
      url: "/pic2.jpg",
        info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."

    },
    {
      id: 3,
      url: "/pic3.jpg",
       info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    },
    {
      id: 4,
      url: "/pic4.jpg",
       info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    },
    {
      id: 5,
      url: "/pic5.jpg",
       info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    }
  ]
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
                <h1 className='text-3xl font-bold hc'>Swipe Cards 2</h1>
                <p>
                   Infinite Swipe Cards animated component.
                </p>
                <ComponentContainer 
                    component={
                    <SwipeContainer className='relative w-full h-full'>
                        <Card key={1} className='w-50 h-60 rounded-md flex items-center 
                        justify-center bg-yellow-400 shadow-md shadow-black border-white overflow-hidden'>
                            Pinapple
                        </Card>
                        <Card key={2} className='w-50 h-60 shadow-md shadow-black rounded-md flex items-center 
                        justify-center bg-red-300'>
                            Red
                        </Card>
                        <Card key={3} className='w-50 h-60 shadow-md shadow-black rounded-md flex items-center 
                        justify-center bg-green-300'>
                            Green
                        </Card>
                        <Card key={4} className='w-50 h-60 shadow-md shadow-black rounded-md flex items-center 
                        justify-center bg-purple-300'>
                            Purple
                        </Card>

                    </SwipeContainer>}
                    code={code}
                />
            </div>

            {/* use case */}
            <div ref={pageRefs[1]} id="level2" className='flex gap-4 mt-6 md:mt-10 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Use Case</h1>
                <PropContainer code={useCase} 
                component={ <SwipeContainer className='h-[300px] w-full'>
                    {
                        places.map((place) => 
                        <Card key={place.id} className='w-60 h-75 flex items-center rounded-md 
                        overflow-hidden shadow-md shadow-black'>
                           <div className='relative h-full w-full overflow-hidden rounded-md'>
                            <div className='relative w-full h-full z-10'><Image draggable={false} src={place.url} fill alt='place'/></div>
                            <div className='absolute bottom-0 rounded-b-md z-20 bg-transparent text-center backdrop-blur-md p-2 w-full text-black'>
                                {place.info}
                            </div>
                            </div>
                        </Card>
                        )
                    }
        </SwipeContainer>} />
            </div>


            {/* props */}
            <div ref={pageRefs[2]} id="level3" className='flex flex-col mt-6 md:mt-10'>
                  <h1 className='text-3xl font-bold hc'>Props Overview</h1>
                  <div>
                     <table className='w-full mt-2'>
                        <thead className='hc'>
                            <tr>
                              <td className='p-2'>Component</td>
                              <td>Prop</td>
                              <td>Best || Default</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>SwipeContainer</td>
                              <td>className</td>
                              <td>relative</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>Card</td>
                              <td>className</td>
                              <td>absolute</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>Card</td>
                              <td>key</td>
                              <td>unique</td>
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

export default Cards2page