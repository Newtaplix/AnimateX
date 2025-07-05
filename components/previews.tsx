"use client"
import React, { useState } from 'react'
import Create from './Stacks/create'
import Steps from './Stacks/steps'
import Github from './buttons/github'
import Premium from './Stacks/premium'
import Choose from './Stacks/choose'
import FlowStack from './images/flowstack'
import Confirm from './texts/confirm'
import CheckOut from './buttons/checkout'
import Navlinks from './navs/spring'
import Counter from './Stacks/counter'
import { PlusCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Toast from './buttons/toast'
const Previews = () => {
  const [current, setCurrent] = useState(<Steps/>)
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
    <div className='text-center flex flex-col w-full px-2 lg:flex-row gap-4 items-center'>
          <div className='text-left flex-1'>
              <h1 className='font-bold text-3xl mb-2 hc'>Components</h1>
              <p className='tc'>
                  A library of clean, animated components designed for modern interfaces
                   and seamless user experiences.
              </p>
              <div>
                <div className='mt-3'>
                  <p className='tc'>Samples</p>
                 <div className='flex-wrap flex gap-2'>
                    {
                      buttons.map((item, i) => 
                      <div onClick={() => {
                        setCurrent(item.component)
                        setOnit(i)
                      }} className={cn('p-[3px] rounded-md border-1 w-fit', onIt === i ? "bg-gray-400/10" : "")} key={i}>
                          <div className='bg-gray-400/10 px-6 cursor-pointer hc p-2 text-center rounded-md border border-gray-400'>
                            {item.name}
                          </div>
                      </div>)
                    }
                    <div 
                      className={cn('p-[3px] rounded-md border-1 w-fit')}>
                          <div className='bg-gray-400/10 flex gap-3 px-6 cursor-pointer hc p-2 text-center rounded-md border border-gray-400'>
                            <PlusCircle/> More
                          </div>
                      </div>
                 </div>
                </div>

              </div>
          </div>
          <motion.div layout 
          className='flex-1 border w-full border-gray-400 p-4 items-center justify-center flex min-h-[320px] md:h-[400px] rounded-md bg-white'>
                   {current}
          </motion.div>
          
    </div>
  )
}

export default Previews