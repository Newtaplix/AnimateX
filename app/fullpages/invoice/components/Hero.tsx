"use client"
import React, { useRef } from 'react'
import { Button } from './button'
import Icon from './icon'
import { InvoiceNavBar } from './navbar'

const Hero = () => {
  const containerRef= useRef(null)
  return (
    <div ref={containerRef} className='cn-container h-[600px] pt-20 gap-10'>
      <InvoiceNavBar ref={containerRef}/>
       <div className='border-2 rounded-full border-[#c655ce86]'>
             <div className='flex gap-1 p-1 rounded-full border-1 px-4 border-[#C555CE]'>
                Dealflow grows 100x and raises <span className='text-[#C555CE]'>new round👉</span>
            </div>
       </div>

        <div className='h-intro'>
            <p className='relative z-20 line-xl'>Send and pay invoices on your terms</p>
            <div className='absolute z-10 bg-[#c655ce85] left-0 right-0 mx-auto p-4 rounded-full bottom-0 w-[62%]'/>
        </div>

        <div className='w-[50%] text-center'>
            <p>
                Dealflow is the next-gen invoicing platforms for ambitious business owners. Save fees, get credit and automate every flow.
            </p>
        </div>
        <Icon targetRef={containerRef}/>

        <Button text='Start for Free'/>
    </div>
  )
}

export default Hero