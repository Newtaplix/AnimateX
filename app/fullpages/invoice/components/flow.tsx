"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Flow = () => {
    const data = [
        {
           image: "/img.avif",
           title: null,
           points: null
        },
        {
            title: "Solve Cash flow with credit",
            points: [
                {head: "Free same day withdrawal:",
                    content: "Get paid the same day you withdraw your invoice"},
                {head: "Instant Payout:",
                    content: "Activate instant payouts when you need upfront payments after invoicing"},
                {head: "Credit Score:",
                    content: "Build your score by invoicing"}
                ]  
        },
        {
            image: "/img.avif",
            title: null,
            points: null
         },
         {
             title: "Solve Cash flow with credit",
             points: [
                 {head: "Free same day withdrawal:",
                     content: "Get paid the same day you withdraw your invoice"},
                 {head: "Instant Payout:",
                     content: "Activate instant payouts when you need upfront payments after invoicing"},
                 {head: "Credit Score:",
                     content: "Build your score by invoicing"}
                 ]  
         },
         {
            image: "/img.avif",
            title: null,
            points: null
         }
    ]

    const data2 = [
        {
            title: "Solve Cash flow with credit",
            points: [
                {head: "Free same day withdrawal:",
                    content: "Get paid the same day you withdraw your invoice"},
                {head: "Instant Payout:",
                    content: "Activate instant payouts when you need upfront payments after invoicing"},
                {head: "Credit Score:",
                    content: "Build your score by invoicing"}
                ]  
        },
        {
            image: "/img.avif",
            title: null,
            points: null
         },
         {
             title: "Solve Cash flow with credit",
             points: [
                 {head: "Free same day withdrawal:",
                     content: "Get paid the same day you withdraw your invoice"},
                 {head: "Instant Payout:",
                     content: "Activate instant payouts when you need upfront payments after invoicing"},
                 {head: "Credit Score:",
                     content: "Build your score by invoicing"}
                 ]  
         },
         {
            image: "/img.avif",
            title: null,
            points: null
         },
         {
            title: "Solve Cash flow with credit",
            points: [
                {head: "Free same day withdrawal:",
                    content: "Get paid the same day you withdraw your invoice"},
                {head: "Instant Payout:",
                    content: "Activate instant payouts when you need upfront payments after invoicing"},
                {head: "Credit Score:",
                    content: "Build your score by invoicing"}
                ]  
        }
    ]

    const targetRef = useRef(null)
    const isInView = useInView(targetRef, { amount: 0.15})

  return (
    <div className='section text-center flex flex-col items-center h-fit justify-center'>
        <h1>Go with the flow</h1>
        <div className='flex mt-6 gap-28'>
               <div className='flex flex-col gap-14'>
                    {
                        data.map((dat, i) => 
                        <div key={i} className='w-80 rounded-[24px] relative'>
                            {
                                 dat.image ? 
                               <div className='w-full h-50 relative bg-[#c655ce65] rounded-[24px]'>
                                   <motion.div
                                   animate={{
                                    y: isInView ? 10 : 0
                                   }} 
                                   ref={targetRef} className='absolute -right-4 rounded-[24px] overflow-hidden -top-4 h-full w-full bg-white'>
                                    <div className='relative h-full w-full'> 
                                    <Image src={`${dat.image}`} alt="" fill/></div> 
                                   </motion.div>
                               </div>
                                
                                :

                                 <div className='text-left h-fit'>
                                    <h1 className='font-bold'>{dat.title}</h1>
                                    <div className='text-[14px] flex flex-col gap-2 pt-4 mt-3 py-2 border-t-1 border-black'>
                                        {
                                            dat.points?.map((point, i) => 
                                            <p key={`point${i}`}>
                                                <span className='font-bold pr-1'>{point.head}</span>
                                                {point.content}
                                            </p>)
                                        }
                                    </div>
                                 </div>
                            }
                            
                        </div>)
                    }
               </div>

               <div className='w-2 h-60 bg-black'></div>


               <div className='flex flex-col gap-14'>
                    {
                        data2.map((dat, i) => 
                        <div key={i} className='w-80 rounded-[24px] relative'>
                            {
                                 dat.image ? 
                               <div className='w-full h-50 relative bg-[#c655ce65] rounded-[24px]'>
                                   <div className='absolute -left-4 rounded-[24px] overflow-hidden -top-4 h-full w-full bg-white'>
                                    <div className='relative h-full w-full'> 
                                    <Image src={`${dat.image}`} alt="" fill/></div> 
                                   </div>
                               </div>
                                
                                :

                                 <div className='text-left h-fit'>
                                    <h1 className='font-bold'>{dat.title}</h1>
                                    <div className='text-[14px] py-2 border-t-1 pt-4 mt-3 flex flex-col gap-2 border-black'>
                                        {
                                            dat.points?.map((point, i) => 
                                            <p key={`point${i}`}>
                                                <span className='font-bold pr-1'>{point.head}</span>
                                                {point.content}
                                            </p>)
                                        }
                                    </div>
                                 </div>
                            }
                            
                        </div>)
                    }
               </div>

        </div>
    </div>
  )
}

export default Flow