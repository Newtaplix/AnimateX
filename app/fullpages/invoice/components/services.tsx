import React from 'react'
import { Mail, Globe, LeafyGreen } from 'lucide-react'

const Services = () => {
    const serviceArr = [
        {
            icon: <Mail size={44} className='text-[#C555CE]'/>,
            title: "Use local accounts and get paid better",
            content: "Send invoices with local accounts and reduce your payment fees. Scroll down to see savings."
        },
        {
            icon: <Globe size={44} className='text-[#C555CE]'/>,
            title: "Use local accounts and get paid better",
            content: "Send invoices with local accounts and reduce your payment fees. Scroll down to see savings."
        },
        {
            icon: <LeafyGreen size={44} className='text-[#C555CE]'/>,
            title: "Use local accounts and get paid better",
            content: "Send invoices with local accounts and reduce your payment fees. Scroll down to see savings."
        }
    ]
  return (
    <div className='section gap-4 flex '>
        {
            serviceArr.map((service, i) => 
            <div key={i} className='flex flex-col shadow-md
            shadow-gray-300 hover:border-[#C555CE] gap-4 p-4 py-6 rounded-[24px]'>
                {service.icon}
                <h1 className='text-black text-xl'>{service.title}</h1>
                <p className='text-gray-500'>{service.content}</p>
                <p className='mt-4 font-semibold'>Learn More</p>
            </div>)
        }
    </div>
  )
}

export default Services