import { useContext, useState, useEffect } from 'react'
import { NavContext } from '@/context/navcontext'
import { Inter } from '@next/font/google'
import { classBeginner, classNewbie } from '@/Utils/class'
import { IClass } from '@/typing'

import Image from 'next/image'

interface IContextValue {
  nav: string
  setNav: React.Dispatch<React.SetStateAction<string>>
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '400']
})

const ClassGrid = () => {
  const { nav, setNav } = useContext(NavContext) as IContextValue
  const [activeClass, setActiveClass] = useState<IClass[]>(classNewbie)

  useEffect(() => {
    if (nav === 'newbie') {
      setActiveClass(classNewbie)
    }
    if (nav === 'beginner') {
      setActiveClass(classBeginner)
    }
  }, [nav])

  return (
    <section>
      <header className='text-center'>
        <p className='text-black/60'>LEVEL</p>
        <h2 className='text-3xl font-medium capitalize text-[#2b77f2]'>
          {nav}
        </h2>
      </header>
      <section className='grid grid-cols-1 gap-5 md:grid-cols-3'>
        {activeClass.map((item) => {
          return (
            <div className=' flex h-full flex-col items-center justify-start gap-2 py-5 '>
              <figure className='relative flex w-[60%]  overflow-hidden '>
                <Image
                  className='object-cover'
                  src={`/assets/menu/${item.image}.jpg`}
                  width={612}
                  height={612}
                  alt='newbie'
                />
              </figure>
              <article
                className={`${inter.className} flex flex-col gap-y-3 p-1 text-center`}>
                <h3 className='text-2xl font-medium capitalize text-[#37373f]'>
                  {item.title}
                </h3>
                <p className='p-2 text-[#37373f]/80'>{item.description}</p>
                <h3 className='text-2xl font-bold uppercase text-[#2b77f2]'>
                  {item.id}
                </h3>
              </article>
            </div>
          )
        })}
      </section>
    </section>
  )
}

export default ClassGrid
