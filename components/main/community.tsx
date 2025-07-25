import React from 'react'
import Title from './title'
import Image from 'next/image'
import { Users } from 'lucide-react'
const Community = () => {
    const links = [
        {
            icon: "/X.svg",
            name: "Twitter",
            text: "Stay updated with announcements, tips and general info."

        },
        {
            icon: "/github.svg",
            name: "Github",
            text: "Report bugs, request features and contribute to project."

        },
        {
            icon: "/discord.svg",
            name: "Discord",
            text: "Join the community, ask questions and share tips."

        }
    ]
  return (
    <div className='mt-35'>
        <div className='flex flex-col justify-center text-center gap-6 mx-auto'>
            <Title icon={<Users size={14}/>} title='Community'/>
            <h1 className="hc text-2xl md:text-3xl">Join Our Community.</h1>
            <p className='tc'>Connect, Learn and grow with fellow designers and developers</p>
        </div>
        <div className="mt-6 hc flex flex-col md:flex-row gap-3 justify-center items-center p-2">
            {
                links.map((item, i) => 
                <div key={i} className='p-4 rounded-md shadow-md text-center py-8 flex flex-col gap-6 items-center justify-center w-full md:w-84 bg-gray-500/7'>
                    <div className='relative w-12 h-12'>
                        <Image src={item.icon} alt='logo' fill/>
                    </div>
                    <h1>{item.name}</h1>
                    <p className='tc'>{item.text}</p>
                </div>)
            }

        </div>
        <p className="tc text-centerw-full md:w-[40%] text-center mt-3 mx-auto">Be part of that community that connects, learns and grows together.</p>
    </div>
  )
}

export default Community