import { useContext } from 'react'
import { NavContext } from '@/context/navcontext'

interface IContextValue {
  nav: string
  setNav: React.Dispatch<React.SetStateAction<string>>
}

const classTab = [
  {
    name: 'Newbie',
    id: 'newbie'
  },
  {
    name: 'Beginner',
    id: 'beginner'
  },
  {
    name: 'Intermediate',
    id: 'intermediate'
  },
  {
    name: 'Advanced',
    id: 'advanced'
  },
  {
    name: 'Expert',
    id: 'expert'
  }
]

const ClassTab = () => {
  const { nav, setNav } = useContext(NavContext) as IContextValue

  return (
    <nav className='flex justify-between text-sm md:justify-center md:text-base'>
      <ul className='flex gap-2 md:gap-5'>
        {classTab.map((item) => {
          const activeNavText =
            item.id === nav ? 'text-[#2b77f2]' : 'text-[#37373f]'
          const activeNavUnderline =
            item.id === nav ? 'bg-[#2b77f2]' : 'bg-[#37373f]'

          return (
            <li
              onClick={() => setNav(item.id)}
              className={`group hover:cursor-pointer`}
              key={item.id}>
              <p className={`${activeNavText} py-2 group-hover:text-[#2b77f2]`}>
                {item.name}
              </p>
              <div
                className={`${activeNavUnderline} h-[2px] w-full duration-200 group-hover:bg-[#37373f]/60`}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ClassTab
