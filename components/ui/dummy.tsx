"use client"
import React from 'react'
import { Card, SwipeContainer } from './card2'
import Image from 'next/image'

const Page = () => {
   
  const places = [
    {
      id: 1,
      url: "/pic.jpg",
      info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    },
    {
      id: 2,
      url: "/pic2.jpg",
        info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."

    },
    {
      id: 3,
      url: "/pic3.jpg",
       info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    },
    {
      id: 4,
      url: "/pic4.jpg",
       info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    },
    {
      id: 5,
      url: "/pic5.jpg",
       info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    }
  ]
  return (
    <SwipeContainer className='h-[300px] w-full'>
        {
            places.map((place) => 
            <Card key={place.id} className='w-60 h-75 flex items-center rounded-md 
            overflow-hidden shadow-md shadow-black'>
              <div className='relative h-full w-full overflow-hidden rounded-md'>
                <div className='relative w-full h-full z-10'><Image draggable={false} src={place.url} fill alt='place'/></div>
                <div className='absolute bottom-0 rounded-b-md z-20 bg-transparent text-center backdrop-blur-md p-2 w-full text-black'>
                    {place.info}
                </div>
                </div>
            </Card>
            )
        }
    </SwipeContainer>
  )
}

export default Page