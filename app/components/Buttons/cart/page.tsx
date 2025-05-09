"use client"
import React from 'react'
import Image from 'next/image'
import CheckOut from '@/components/checkout'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'


const ButtonComponents = () => {
  const path = usePathname()
  const listComponents = [
    {
      name: "Checkout",
      component: <CheckOut quantity='4' text='Checkout'/>,
      description: "A smoothly animated checkout button for your ecommerce site."
    }
  ]
  return (
    <div className='px-20 mb-20'>
       {
         listComponents.map((item, i) => 
          <div key={i} className='mt-20'>
            <div className="flex items-center gap-3 mb-5">
                 { path.split("/").map((text, i) => <span className='flex gap-2 items-center' key={text + i}>{text}<ChevronRight size={17} /></span> ) } 
            </div>
            <h1 className='text-3xl font-bold'>{item.name}</h1>
            <p className='text-gray-400'>{item.description}</p>
            <div className='w-full p-5 mt-3 flex items-center justify-center h-100 border rounded-md shadow-md'>
                {item.component}
            </div>
            <div className='mt-3'>
                <p className='text-gray-400 flex gap-2'>Created by:</p>
                <div className='pl-3 flex gap-2'>
                  <Image width={0} height={0} src={""} alt=''/>
                  <span className='underline'>Ngwa Newton-Raul</span>
                </div>
                <div className='w-full mt-5 flex justify-between'>
                    <Button className='bg-white text-black border hover:bg-gray-200'><ChevronLeft/>{listComponents[i].name}</Button>
                    <Button className='bg-white text-black border hover:bg-gray-200'>{listComponents[i].name}<ChevronRight/></Button>
                </div>
            </div>
          </div>
        )
       }
    </div>
  )
}

export default ButtonComponents