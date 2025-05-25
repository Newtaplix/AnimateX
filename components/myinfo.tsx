import React from 'react'
import Image from 'next/image'

const MyInfo = () => {
  return (
     <div className='pl-3 flex gap-2 items-center'>
        <div className='relative rounded-full overflow-clip w-10 h-10'>
            <Image fill src={"/images.jpeg"} alt=''/>
        </div>
        <span className='underline'>Ngwa Newton-Raul</span>
    </div>
  )
}

export default MyInfo