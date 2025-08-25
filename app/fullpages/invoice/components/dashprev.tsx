import React from 'react'
import Image from 'next/image'

const DashboardPreview = () => {
  return (
    <div className="cn-container h-[600px]">
       <div className='relative h-full w-full' >
          <div className='bg-[#C555CE] blur-[50px] z-10 bottom-0 left-0 w-full absolute h-1/2'/>
          <div className='w-full h-full bg-white relative z-20'><Image src={"/img.avif"} fill alt='MyImage'/></div>
       </div>
        <p className='w-1/2 mt-5 text-center'>Dealflow is not a bank or a payment institution. All settlements are done with partner banks</p>
    </div>
  )
}

export default DashboardPreview