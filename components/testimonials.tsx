import React from 'react'
import { User } from 'lucide-react'
const Testimonials = () => {
    const tests = [
        "These animations don't just move they breathe. Every component feels alive truely inspiring work!",
        "Smooth, Futuristic and insanely satisfying. I could refresh the page all day just to watch the transitions.",
        "I've never seen UI animations this clean and intentional. Everything feels handcrafted with care",
        "The motion work here is next level it brings personality to the interface without overwhelming the user",
        // "Its rare to find animations that's both functional and artistic. These hit the sweet spot perfectly!",
        // "These animations don't just move they breathe. Every component feels alive truely inspiring work!",
        // "Smooth, Futuristic and insanely satisfying. I could refresh the page all day just to watch the transitions.",
        // "I've never seen UI animations this clean and intentional. Everything feels handcrafted with care",
        // "The motion work here is next level it brings personality to the interface without overwhelming the user",
        // "Its rare to find animations that's both functional and artistic. These hit the sweet spot perfectly!",

    ]
  return (
    <div className='text-center items-center justify-center w-[85%] mx-auto'>
        <h1 className='font-bold text-2xl mb-3'>What our users say</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                tests.map((item, i) => 
                <div key={i} className='flex flex-col p-2 rounded-md bg-gray-300/20 w-full md:max-w-100 shadow-md'>
                    <div className='flex items-center gap-2 mb-1'>
                        <span className='p-2 rounded-full w-10 h-10 flex items-center justify-center bg-gray-300'><User/></span>
                        <h1>Zimpampam</h1>
                    </div>
                    <div className='p-1 rounded-md bg-white'>
                        <p className='italic text-xs'>{item}</p>
                    </div>
                </div>) 
            }

        </div>
    </div>
  )
}

export default Testimonials