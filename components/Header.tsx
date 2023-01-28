import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

interface INavItems {
  name: string
  href: string
}

const navItems: INavItems[] = [
  {
    name: 'Beranda',
    href: '/'
  },
  {
    name: 'Tentang',
    href: '/#tentang'
  },
  {
    name: 'Kelas',
    href: '/#kelas'
  },
  {
    name: 'Biaya',
    href: '/#biaya'
  },
  {
    name: 'Galeri',
    href: '/#galeri'
  },
  {
    name: 'Kontak',
    href: '/#kontak'
  }
]

const Header = () => {
  const router = useRouter()

  return (
    <header className='sticky top-0 z-20 flex w-full items-center justify-between bg-white p-3 py-3 shadow-md md:px-24'>
      <figure className='hover:cursor-pointer'>
        <Link href='/'>
          <Image src='/assets/logo.png' width='150' height='1' alt='logo' />
        </Link>
      </figure>
      <nav>
        <ul className='hidden gap-10 md:flex'>
          {navItems.map((item) => {
            const navActive: string =
              item.href === router.asPath
                ? 'text-black'
                : 'text-gray-500 group-hover:text-black'
            const navUnderline: string =
              item.href === router.asPath ? 'w-full' : 'w-0 group-hover:w-full'
            return (
              <Link
                key={item.name}
                className='group flex flex-col text-lg font-semibold duration-100'
                href={item.href}>
                <li className={`${navActive} `}>{item.name}</li>
                <div
                  className={`tran h-[2px] ${navUnderline} bg-blue-500 duration-300`}
                />
              </Link>
            )
          })}
        </ul>
      </nav>
      <button className='rounded-full bg-blue-500 px-5 py-2 text-white duration-75 hover:bg-blue-600 active:scale-95'>
        Beli Kelas
      </button>
    </header>
  )
}

export default Header
