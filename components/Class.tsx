import { useState } from 'react'
import { Amatic_SC, Open_Sans } from '@next/font/google'
import ClassTab from './ClassTab'
import ClassGrid from './ClassGrid'

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700']
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans'
})

const Class = () => {
  return (
    <section
      id='kelas'
      className='flex h-fit flex-col gap-5 px-5 py-10 pt-20 md:px-28'>
      <header className='flex flex-col gap-3 text-center'>
        <h2
          className={`${amatic.className} text-3xl text-[#212529] md:text-5xl`}>
          Intip-intip silabus{' '}
          <span className='uppercase text-[#2b77f2]'>kelas</span> kami
        </h2>
        <p
          className={`${openSans.className} text-xs uppercase tracking-widest text-[#7f7f90]`}>
          Selayang pandang dari silabus kelas kami
        </p>
      </header>
      <div className='flex flex-col items-center gap-10'>
        <ClassTab />
        <ClassGrid />
      </div>
    </section>
  )
}

export default Class
