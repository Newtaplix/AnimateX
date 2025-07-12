import React from 'react'
import Title from './title'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Testimonials = () => {
    const testimonials = [
        {
            image: "/dan.jpg",
            name: "David M.",
            tag: "@Frontend Developer",
            comment: "Using these components cut my animation time in half! It's like Tailwind meets Framer Motion but eith more soul"
        },
        {
            image: "/pic3.jpg",
            name: "Amira C.",
            tag: "@Student Devevloper",
            comment: "I'm new to frontend, and this made me feel like a pro. Setup was simple, and everthing just worked."
        },
        {
            image: "/pic4.jpg",
            name: "Jules A",
            tag: "@Product Designer",
            comment: "Not a UI/UX designer? Doesn't matter. This library makes any dev look like a motion pro. It's aesthetic magic in a box"
        },
        {
            image: "/images.jpeg",
            name: "Tolu W.",
            tag: "@JavaScript Enthusiast",
            comment: "This is what modern frontend should feel like responsive, animated and a little bit magical."
        },
        {
            image: "/pic4.jpg",
            name: "David M.",
            tag: "@Frontend Developer",
            comment: "Using these components cut my animation time in half! It's like Tailwind meets Framer Motion but with more soul"
        },
        {
            image: "/pic5.jpg",
            name: "Johan A.",
            tag: "@MrBean",
            comment: "Really love this, the user interactions are just lit."
        },
        {
            image: "/pic.jpg",
            name: "Amira C.",
            tag: "@Student Devevloper",
            comment: "I'm new to frontend, and this made me feel like a pro. Setup was simple, and everthing just worked."
        },
        {
            image: "/images.jpeg",
            name: "Johan Atkinson",
            tag: "@MrBean",
            comment: "Really love this, the user interactions are just lit."
        },
        {
            image: "/dan.jpg",
            name: "Nia R.",
            tag: "@UX Consultant",
            comment: "The Animations are tasteful not over kill. It's rare to see a library get that baalance right."
        }
    ]
  return (
    <div className='mt-35 flex flex-col gap-4 p-2 md:p-0'>
        <div className='flex flex-col text-center justify-center gap-6'>
            <Title icon={<Heart size={14} color="red"/>} title="Visit the wall of Love"/>
            <h1 className='text-2xl md:text-3xl hc'>See what developers are saying.</h1>
        </div>
        <div className='flex flex-col md:flex-wrap mt-6 gap-3 md:gap-0 justify-center h-fit md:max-h-[490px] lg:max-h-[480px] gap-0 max-w-full md:max-w-[80%] mx-auto'>
            {
                testimonials.map((item, i) =>
                    <div key={i} className={cn('p-2 flex-1 hc w-full md:w-60 lg:w-88 h-fit px-4 border-transparent md:border-gray-500 m-0',
                        i === 0 || i === 1 ? "border-b-1 border-r-1" : i === 3 || i === 4  ? "border-b-1 border-r-1" :
                         i === 2 || i === 5 ? "border-r-1" : i=== 4 ? "border-b-1 border-t-1" : i === 6 ? "border-b-1" : 
                         i === 8 ? "border-t-1" : ""
                    )}>
                        <div className="flex gap-2 items-center">
                            <div className='relative w-12 h-12 rounded-md overflow-hidden'>
                                <Image fill alt='image' src={item.image}/> 
                            </div>
                            <div>
                                <h1>{item.name}</h1>
                                <p className='tc'>{item.tag}</p>
                            </div>
                        </div>
                        <p className='mt-2'>{item.comment}</p>
                    </div> 
                )
            }
        </div>
    </div>
  )
}

export default Testimonials