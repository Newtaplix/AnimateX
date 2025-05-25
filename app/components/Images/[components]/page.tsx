"use client"
import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import FlowStack from '@/components/images/flowstack'
import MyInfo from '@/components/myinfo'


const ImageComponents = () => {
  const path = usePathname()
  const pathlist = path.split("/")
  const currentitem = pathlist[pathlist.length - 1]
  const listComponents = [
    {
      name: "Flowstack",
      component: <FlowStack/>,
      description: "Animated image layout transitions with Motion",
      linkname: "flowstack"
    }
  ]
  console.log(currentitem)
  return (
    <div className='p-2 md:px-10 lg:px-20 mb-20'>
       {
         listComponents.map((item, i) => 
          String(currentitem) === item.linkname &&
          <div key={i} className='mt-20'>
             <div className="flex items-center gap-3 mb-5">
                  { path.split("/").map((text, i) => i >= 1 && 
                    i === 1 ? 
                    <Link href={"/components"} key={text + i}><span className='flex gap-2 items-center'><ChevronRight size={17} />{text.toLowerCase()}</span></Link> :

                    i > 1 ?
                    <span className='flex gap-2 items-center' key={text + i}><ChevronRight size={17} />{text.toLowerCase()}</span> : null )  
                } 
              </div>
              <h1 className='text-3xl font-bold'>{item.name}</h1>
              <p className='text-gray-400'>{item.description}</p>
              <div className='w-full md:w-200 p-5 mt-3 flex items-center justify-center h-100 border rounded-md shadow-md'>
                  {item.component}
              </div>
              <div className='mt-3'>
                  <p className='text-gray-400 flex gap-2'>Created by:</p>
                  <MyInfo/>
                  <div className='w-full md:w-200 mt-5 flex justify-between'>
                    {
                        i > 0 &&
                        <Link href={`/components/${pathlist[2]}/${listComponents[i - 1].linkname}`}><Button className='text-black border bg-white hover:bg-gray-200'><ChevronLeft/>{listComponents[i - 1].name}</Button></Link>
                    }
                    {
                        i === listComponents.length - 1 ? null : <Link href={`/components/${pathlist[2]}/${listComponents[i + 1].linkname}`} ><Button className='text-black border bg-white hover:bg-gray-200'>{listComponents[i + 1].name}<ChevronRight/></Button></Link>
                    }
                  </div>
              </div>
            </div>
        )
       }
    </div>
  )
}

export default ImageComponents