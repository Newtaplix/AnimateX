import React from 'react'
import Image from 'next/image'

const Users = () => {
    const numbers = [
        {
            figure: "500",
            text: "People & Companies on the network"
        },
        {
            figure: "2000",
            text: "Total Invoices"
        },
        {
            figure: "$2M",
            text: "Total volume"
        }
    ]

    const companies = [
        "/github.svg", "/discord.svg", "/globe.svg","/X.svg"
    ]
  return (
    <div className='section flex-col gap-8'>
       <div className='w-fit mx-auto flex gap-6'>
       {
            numbers.map((num, i) => 
            <div key={i} className='flex flex-1 items-center p-1 justify-center gap-4'>
                <p className='text-5xl font-bold'>{num.figure}<span className='text-[#C555CE]'>+</span></p>
                <p>{num.text}</p>
            </div>)
        }
       </div>
       <div className='w-full flex gap-38 justify-center items-center px-6 mt-12'>
            {
                companies.map((ny, i) => 
                <div key={i} className='relative w-24 h-24'>
                    <div className='absolute inset-0 bg-white'/>
                    <Image src={`${ny}`} fill alt=''/></div>)
            }

       </div>
    
    </div>
  )
}

export default Users