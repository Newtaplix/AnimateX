"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'


interface listData {
    image: string,
    heading?: string,
    link?: string,
    description?: string
}

interface props {
    autoplay?: boolean,
    switchDelay?: number,
    content: listData[],
    FCardWidth?: number,
    ICardWidth?: number
}


export const Squishy = ({ content, autoplay = false, switchDelay = 5, FCardWidth = 400, ICardWidth = 40 }: props) => {
    const [current, setCurrent] = useState(0)
    const [buttonHovered, setHovered] = useState(-1)


    // for the autoplay functionality
    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                if (current <= content.length - 1) {
                    setCurrent((prev) => prev + 1)
                } else {
                    setCurrent(0)
                }
            }, (switchDelay * 1000))
            return () => clearInterval(interval)
        }
    })
    return (
        // main Container
        <div className="w-full p-2 flex h-full text-white items-center justify-center gap-4">
            {
                content.map((image, i) =>
                    <m.div
                        animate={{
                            width: current === i ? FCardWidth : ICardWidth
                        }}
                        whileHover={{
                            width: current !== i ? (ICardWidth + 20) : FCardWidth
                        }}
                        onClick={() => setCurrent(i)} style={{
                            borderRadius: 24
                        }} key={i}
                        className='relative cursor-pointer h-full overflow-hidden w-10'>
                            {/* dart image overlay */}
                        <AnimatePresence>
                            {
                                i === current &&
                                <m.div animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.3
                                    }}
                                    className='absolute top-0 bg-black/25 z-10 w-full h-full inset-0' />
                            }
                        </AnimatePresence>

                        {/* image container */}
                        <m.div
                            animate={{
                                scale: buttonHovered === i ? 1.2 : 1,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className='h-full relative w-[400px]'>
                            <Image src={image.image} fill alt={image.image} />
                        </m.div>

                        {/* card description section */}
                        {
                            current === i &&
                            <m.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4
                                }}
                                className='w-full absolute bottom-0 h-[50%] z-20 py-2 p-4 bg-transparent rounded-b-[7px] backdrop-blur-[1px]'>
                                <m.h1
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.2,
                                        duration: 0.4
                                    }}
                                    className='text-2xl font-bold'>{image.heading}</m.h1>
                                <m.p
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 0.4
                                    }}
                                    className='text-[14px]'>{image.description}</m.p>
                                <m.div
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 0.4
                                    }}
                                    className='w-full flex justify-end'>
                                    <Link href={image.link ? image.link : "#"}
                                        onMouseEnter={() => setHovered(i)}
                                        onMouseLeave={() => setHovered(-1)}
                                        className='p-1 flex backdrop-blur-2xl cursor-pointer
                            gap-2 items-center justify-center rounded-full px-4 border-2 border-gray-400'>
                                        <span>Visit</span>
                                        <MoveRight />
                                    </Link>
                                </m.div>
                            </m.div>
                        }

                    </m.div>)
            }
        </div>
    )
}



export const NextjsCode = `
"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'


interface listData {
    image: string,
    heading?: string,
    link?: string,
    description?: string
}

interface props {
    autoplay?: boolean,
    switchDelay?: number,
    content: listData[],
    FCardWidth?: number,
    ICardWidth?: number
}


export const Squishy = ({ content, autoplay = false, switchDelay = 5, FCardWidth = 400, ICardWidth = 40 }: props) => {
    const [current, setCurrent] = useState(0)
    const [buttonHovered, setHovered] = useState(-1)


    // for the autoplay functionality
    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                if (current <= content.length - 1) {
                    setCurrent((prev) => prev + 1)
                } else {
                    setCurrent(0)
                }
            }, (switchDelay * 1000))
            return () => clearInterval(interval)
        }
    })
    return (
        // main Container
        <div className="w-full p-2 flex h-full text-white items-center justify-center gap-4">
            {
                content.map((image, i) =>
                    <m.div
                        animate={{
                            width: current === i ? FCardWidth : ICardWidth
                        }}
                        whileHover={{
                            width: current !== i ? (ICardWidth + 20) : FCardWidth
                        }}
                        onClick={() => setCurrent(i)} style={{
                            borderRadius: 24
                        }} key={i}
                        className='relative cursor-pointer h-full overflow-hidden w-10'>
                            {/* dart image overlay */}
                        <AnimatePresence>
                            {
                                i === current &&
                                <m.div animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.3
                                    }}
                                    className='absolute top-0 bg-black/25 z-10 w-full h-full inset-0' />
                            }
                        </AnimatePresence>

                        {/* image container */}
                        <m.div
                            animate={{
                                scale: buttonHovered === i ? 1.2 : 1,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className='h-full relative w-[400px]'>
                            <Image src={image.image} fill alt={image.image} />
                        </m.div>

                        {/* card description section */}
                        {
                            current === i &&
                            <m.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4
                                }}
                                className='w-full absolute bottom-0 h-[50%] z-20 py-2 p-4 bg-transparent rounded-b-[7px] backdrop-blur-[1px]'>
                                <m.h1
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.2,
                                        duration: 0.4
                                    }}
                                    className='text-2xl font-bold'>{image.heading}</m.h1>
                                <m.p
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 0.4
                                    }}
                                    className='text-[14px]'>{image.description}</m.p>
                                <m.div
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 0.4
                                    }}
                                    className='w-full flex justify-end'>
                                    <Link href={image.link ? image.link : "#"}
                                        onMouseEnter={() => setHovered(i)}
                                        onMouseLeave={() => setHovered(-1)}
                                        className='p-1 flex backdrop-blur-2xl cursor-pointer
                            gap-2 items-center justify-center rounded-full px-4 border-2 border-gray-400'>
                                        <span>Visit</span>
                                        <MoveRight />
                                    </Link>
                                </m.div>
                            </m.div>
                        }

                    </m.div>)
            }
        </div>
    )
}

`


export const ReactCode = `

import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'


export const Squishy = ({ content, autoplay = false, switchDelay = 5, FCardWidth = 400, ICardWidth = 40 }) => {
    const [current, setCurrent] = useState(0)
    const [buttonHovered, setHovered] = useState(-1)


    // for the autoplay functionality
    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                if (current <= content.length - 1) {
                    setCurrent((prev) => prev + 1)
                } else {
                    setCurrent(0)
                }
            }, (switchDelay * 1000))
            return () => clearInterval(interval)
        }
    })
    return (
        // main Container
        <div className="w-full p-2 flex h-full text-white items-center justify-center gap-4">
            {
                content.map((image, i) =>
                    <m.div
                        animate={{
                            width: current === i ? FCardWidth : ICardWidth
                        }}
                        whileHover={{
                            width: current !== i ? (ICardWidth + 20) : FCardWidth
                        }}
                        onClick={() => setCurrent(i)} style={{
                            borderRadius: 24
                        }} key={i}
                        className='relative cursor-pointer h-full overflow-hidden w-10'>
                            {/* dart image overlay */}
                        <AnimatePresence>
                            {
                                i === current &&
                                <m.div animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.3
                                    }}
                                    className='absolute top-0 bg-black/25 z-10 w-full h-full inset-0' />
                            }
                        </AnimatePresence>

                        {/* image container */}
                        <m.div
                            animate={{
                                scale: buttonHovered === i ? 1.2 : 1,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className='h-full relative w-[400px]'>
                            <img className="h-full w-full" src={image.image} alt={image.image} />
                        </m.div>

                        {/* card description section */}
                        {
                            current === i &&
                            <m.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4
                                }}
                                className='w-full absolute bottom-0 h-[50%] z-20 py-2 p-4 bg-transparent rounded-b-[7px] backdrop-blur-[1px]'>
                                <m.h1
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.2,
                                        duration: 0.4
                                    }}
                                    className='text-2xl font-bold'>{image.heading}</m.h1>
                                <m.p
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 0.4
                                    }}
                                    className='text-[14px]'>{image.description}</m.p>
                                <m.div
                                    initial={{
                                        opacity: 0,
                                        y: 10
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 0.4
                                    }}
                                    className='w-full flex justify-end'>
                                    <Link href={image.link ? image.link : "#"}
                                        onMouseEnter={() => setHovered(i)}
                                        onMouseLeave={() => setHovered(-1)}
                                        className='p-1 flex backdrop-blur-2xl cursor-pointer
                            gap-2 items-center justify-center rounded-full px-4 border-2 border-gray-400'>
                                        <span>Visit</span>
                                        <MoveRight />
                                    </Link>
                                </m.div>
                            </m.div>
                        }

                    </m.div>)
            }
        </div>
    )
}

`


export const UseCse1 = `
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
`

export const UseCase2= `
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
    <Squishy content={images}/>
  )
}

export default Page`




