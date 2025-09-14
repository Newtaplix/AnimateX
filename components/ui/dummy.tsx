import React, { useState } from 'react'
import { Slider } from './slider'

const Page = () => {
  const [sliderval, setSliderVal] = useState(0)
  return (
    <div className='w-full h-full flex flex-col gap-3 items-center justify-center'>                  
        <Slider 
        onChange={(value) => setSliderVal(value)} 
        className='text-black' 
        trackWidth={350} 
        maxValue={100} 
        buttonColor='#9810fa'/>
          <p>{sliderval}</p>
    </div>
  )
}

export default Page