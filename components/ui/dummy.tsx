"use client"
import React from 'react'
import { Squishy } from './squishy'

const Page = () => {
  const images = [
    {
        image: "/pic.jpg",
        heading: "Barcelona, Spain",
          description: "Known for Gaudi's colourful architecture, Mediterranean beaches, tapes bars, and lively culture. A Blend of art, relaxation and nightlife.",
         link: "#"
        
    },
    {
        image: "/pic2.jpg",
        heading: "Cape Town, South Africa",
         description: "Nested between mountains and ocean, Cape Town has table Mountain, beaches, vineyards, and nearby safaris. A mix of adventure and culture.",
         link: "#"
        
    },
    {
        image: "/pic3.jpg",
        heading: "Hawaii, USA",
         description: "Each island offers unique beauty from active volcanoes on the Big Island, to bush jungles in Kauai",
         link: "#"
        
    },
    {
        image: "/pic4.jpg",
        heading: "Bahamas",
         description: "The beauty of the Bahamas is defined by its impossible spectrum of blue. Its waters shift from deep sapphire to luminous.",
         link: "#"
        
    },
    {
        image: "/pic5.jpg",
        heading: "Bahamas",
         description: "The beauty of the Bahamas is defined by its impossible spectrum of blue. Its waters shift from deep sapphire to luminous.",
         link: "#"
        
    },
    {
        image: "/pic.jpg",
        heading: "Bahamas",
        description: "The beauty of the Bahamas is defined by its impossible spectrum of blue. Its waters shift from deep sapphire to luminous.",
        link: "#"
    },
    {
        image: "/pic2.jpg",
        heading: "Bahamas",
        description: "The beauty of the Bahamas is defined by its impossible spectrum of blue. Its waters shift from deep sapphire to luminous.",
        link: "#"
    },
    {
        image: "/pic3.jpg",
        heading: "Bahamas",
        description: "The beauty of the Bahamas is defined by its impossible spectrum of blue. Its waters shift from deep sapphire to luminous.",
        link: "#"
        
    },
  
  ]
  
  return (
    <Squishy content={images} autoplay={true} switchDelay={2}/>
  )
}

export default Page