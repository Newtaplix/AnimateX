"use client"
import React, { useState } from 'react'
import Create from './Stacks/create'
import Github from './buttons/github'
import Premium from './Stacks/premium'
import Choose from './Stacks/choose'
import FlowStack from './images/flowstack'
import Confirm from './texts/confirm'
import CheckOut from './buttons/checkout'
import Navlinks from './navs/spring'
import Counter from './Stacks/counter'
import { PlusCircle, Blocks } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Toast from './buttons/toast'
import Title from './title'
const Previews = () => {
  const [current, setCurrent] = useState(<FlowStack/>)
  const [onIt, setOnit] = useState(0)
  const list = [
    {text: "Home", link: "home"},
    {text: "Contact", link: "contact"},
    {text: "About", link: "about"},
    {text: "Message", link: "message"},
    {text: "Review", link: "review"}

  ]
  const buttons = [
    {
      name: "Create",
      component: <Create/>
    },
    {
      name: "Github",
      component: <Github/>
    },
    {
      name: "Premium",
      component: <Premium/>
    },
    {
      name: "Choose",
      component: <Choose/>
    },
    {
      name: "Confirm",
      component: <Confirm/>
    },
    {
      name: "Flowstack",
      component: <FlowStack/>
    },
    {
      name: "Checkout",
      component: <CheckOut text='Checkout' quantity='7'/>
    },
    {
      name: "Navbar",
      component: <Navlinks list={list}/>
    },
    {
      name: "Counter",
      component: <Counter/>
    },
    {
      name: "Toasts",
      component: <Toast/>
    }
  ]

  return (
        <div className='mt-34'>
              <div className='text-center flex flex-col w-full gap-3 md:gap-6 md:w-fit mx-auto'>
                      <Title icon={<Blocks size={14}/>} title='Components'/>
                      <h1 className='text-2xl hc md:text-3xl'>Complete blocks for rapid developemt.</h1>
                      <p className='tc'>
                          A library of clean, animated components designed for modern interfaces
                          and seamless user experiences.
                      </p>
            </div>
              <div className='text-center flex flex-col w-full px-2 lg:flex-row gap-2 mt-12 md:w-[80%] mx-auto'>
                  <div className='text-left flex-1'>
                   
                      <div>
                        
                        <div className='flex-wrap flex gap-2'>
                            {
                              buttons.map((item, i) => 
                              <div onClick={() => {
                                setCurrent(item.component)
                                setOnit(i)
                              }} className={cn('p-[3px] rounded-[9px] border-1 w-fit border-gray-400/5', onIt === i ? "bg-gray-400/10" : "")} key={i}>
                                  <div className='bg-gray-400/10 px-6 cursor-pointer hc p-2 text-center rounded-[6px] border border-gray-400/5'>
                                    {item.name}
                                  </div>
                              </div>)
                            }
                            <div 
                              className={cn('p-[3px] rounded-[9px] border-1 w-fit border-gray-400/5')}>
                                  <div className='bg-gray-400/10 flex gap-3 px-6 cursor-pointer hc p-2 
                                  text-center rounded-[6px] border border-gray-400/5'>
                                    <PlusCircle/> More
                                  </div>
                              </div>
                        </div>
                        

                      </div>
                  </div>
                  <motion.div layout 
                  className='flex-1 border w-full border-gray-400 p-4 items-center justify-center 
                  flex min-h-[320px] md:h-[360px] rounded-md bg-white'>
                          {current}
                  </motion.div>
                  
            </div>
        
        </div>
  )
}

export default Previews