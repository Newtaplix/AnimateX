"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Text, MessageCircle } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ComponentContainer, PropContainer } from '@/components/docs/setcode'
import { Feedback, FeedBackCode, UseCase } from '@/components/ui/feedback'
import LinksDiv from '@/components/main/LinksDiv'
const FeedbackPage = () => {
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
                <h1 className='text-3xl font-bold hc'>FeedBack</h1>
                <p>
                    A fully customisable animated feedback component, Making user feedback experience fun, smooth and unforgetable
                </p>

                <p className="flex flex-col gap-1"><span className='text-red-500'>Warning</span> <span>Until this is updated.
                  User will be required to enter the copied code and configure the post function so it 
                  works with their process.
                  </span></p>
                <ComponentContainer 
                    component={<Feedback
                    placeHolder = "Kindly drop in your feedback here"
                    buttonCommand={() => null}
                    buttonText='Send'
                    message='Thanks for your feedback it helps alot'
                    openLabel= <MessageCircle size={20}/>
                    blockName='Feedback' 
                    buttonClassName='bg-black p-2 rounded-md text-white cursor-pointer'
                    inputClassName='p-2 outline-2 outline-gray-200/5 rounded-md h-40 bg-black'
                    />}
                    code={FeedBackCode}
                />
            </div>

            {/* use case */}
            <div ref={pageRefs[1]} id="level2" className='flex gap-4 mt-6 md:mt-10 flex-col py-4'>
                <h1 className='text-3xl font-bold hc'>Use Case</h1>
                <PropContainer code={UseCase} 
                component={ <Feedback
                  buttonText='Comment'
                  buttonClassName='bg-gray-300 text-black p-2 rounded-md'
                  message='Thanks for the Feedback'
                  blockName='Feedback'
                  placeHolder='Input text here'
                  inputClassName='bg-black p-2 rounded-md' 
                  openLabel={<MessageCircle size={24}/>}
                  buttonCommand={() => null}/>} />
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
                              <td className='p-2'>buttonCommand</td>
                              <td>Function</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>message</td>
                              <td>string</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>buttonClassName</td>
                              <td>string</td>
                              <td>none</td>
                              <td>flex items-center</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>blockname</td>
                              <td>string</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>placeHolder</td>
                              <td>string</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>openLabel</td>
                              <td>React.ReactNode</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>buttonText</td>
                              <td>string</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>inputCommand</td>
                              <td>Funtion</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                            <tr className='border-t-1 bc'>
                              <td className='p-2'>InputCLassName</td>
                              <td>string</td>
                              <td>none</td>
                              <td>none</td>
                            </tr>
                        </tbody>

                     </table>
                      
                  </div>
            </div>
           
            <LinksDiv previous='/components/ui/Accordion' next='/components/ui/Fade' prevText='Accordion' nexText='Fade'/>
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

export default FeedbackPage