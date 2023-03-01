import React, { ReactNode } from 'react'

interface IProps {
  icon: ReactNode
  title: string
  description: string
}

const ContactCard = ({ icon, title, description }: IProps) => {
  return (
    <div className='flex items-center gap-5 bg-white p-5'>
      <figure className='rounded-full bg-[#2b77f2] p-5 text-white'>
        {icon}
      </figure>
      <div>
        <h3 className='py-2 text-xl font-bold text-[#6c757d]'>{title}</h3>
        <p className='text-[#212529]'>{description}</p>
      </div>
    </div>
  )
}

export default ContactCard
