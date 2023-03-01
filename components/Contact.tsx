import { HTMLAttributes, ReactNode } from 'react'
import { Amatic_SC, Open_Sans } from '@next/font/google'
import { BsMap, BsTelephone, BsShare } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import ContactCard from './ContactCard'

interface IContactInfo {
  id: number
  icon: ReactNode
  title: string
  description: string
  bold?: boolean
}

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700']
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '500'],
  variable: '--font-open-sans'
})

const contactInfo: IContactInfo[] = [
  {
    id: 1,
    icon: <BsMap size={20} />,
    title: 'Alamat Kami',
    description:
      'Jl. Gunung Kerinci, No 10. Dasan Agung Baru, Selaparang, Mataram,NTB.'
  },
  {
    id: 2,
    icon: <FiMail size={20} />,
    title: 'Email Kami',
    description: 'robokarsa@gmail.com.'
  }
]

const Contact = () => {
  return (
    <section
      id='kontak'
      className='flex flex-col gap-10 bg-gray-200 px-5 py-10 pt-10 md:px-28'>
      {' '}
      <header className='flex flex-col gap-3 text-center'>
        <p
          className={`${openSans.className} text-xs uppercase tracking-widest text-[#7f7f90]`}>
          Kontak
        </p>
        <h2
          className={`${amatic.className} text-3xl text-[#212529] md:text-5xl`}>
          Butuh info lebih lanjut?{' '}
          <span className='text-[#2b77f2]'>Hubungi kami</span>
        </h2>
      </header>
      <section
        className={`${openSans.className} grid w-full grid-cols-1 gap-5 md:grid-cols-2`}>
        {contactInfo.map((info) => (
          <ContactCard {...info} />
        ))}
        <div className='flex items-center gap-5 bg-white p-5'>
          <figure className='rounded-full bg-[#2b77f2] p-5 text-white'>
            <BsTelephone size={20} />
          </figure>
          <div>
            <h3 className='py-2 text-xl font-bold text-[#6c757d]'>
              Hubungi Kami
            </h3>
            <p className='text-[#212529]'>
              <span className='font-bold'>Instagram DM: </span>@robokarsa.id
            </p>
          </div>
        </div>
        <div className='flex items-center gap-5 bg-white p-5'>
          <figure className='rounded-full bg-[#2b77f2] p-5 text-white'>
            <BsShare size={20} />
          </figure>
          <div>
            <h3 className='py-2 text-xl font-bold text-[#6c757d]'>Jam Buka</h3>
            <ul className='text-[#212529]'>
              <li>
                <span className='font-bold'>Senin-Kamis: </span>13.00 - 18.00
              </li>
              <li>
                <span className='font-bold'>Jumat-Sabtu: </span>15.00 - 18.00
              </li>
              <li>
                <span className='font-bold'>Minggu: </span>Tutup (kecuali ada
                kelas)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Contact
