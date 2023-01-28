import React, { createContext, useState } from 'react'

interface IContextValue {
  nav: string
  setNav: React.Dispatch<React.SetStateAction<string>>
}

interface IInputWrapperProps {
  children: JSX.Element | JSX.Element[]
}

export const NavContext = createContext<IContextValue | null>(null)

const NavProvider = ({ children }: IInputWrapperProps) => {
  const [nav, setNav] = useState<string>('newbie')

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavProvider
