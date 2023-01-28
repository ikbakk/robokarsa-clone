import { useContext, useState, useEffect } from 'react'
import { NavContext } from '@/context/navcontext'

interface IContextValue {
  nav: string
  setNav: React.Dispatch<React.SetStateAction<string>>
}

const ClassGrid = () => {
  const { nav, setNav } = useContext(NavContext) as IContextValue
  const [isChanged, setIsChanged] = useState(false)

  return (
    <section>
      <header className='text-center'>
        <p className='text-black/60'>LEVEL</p>
        <h2 className='text-3xl font-medium capitalize text-[#2b77f2]'>
          {nav}
        </h2>
      </header>
    </section>
  )
}

export default ClassGrid
