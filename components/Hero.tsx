import Image from 'next/image'
import { Amatic_SC, Open_Sans } from '@next/font/google'

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700']
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

const Hero = () => {
  return (
    <section
      id='/'
      className='-mt-20 flex h-screen w-full flex-col items-center justify-center bg-gray-200 px-5 md:mt-0 md:h-[90vh] md:flex-row-reverse md:justify-between md:px-28'>
      <figure className='p-3'>
        <Image
          src='/assets/hero-img-2.png'
          width={500}
          height={500}
          alt='hero image'
        />
      </figure>
      <div className='flex flex-col gap-y-5'>
        <header className='flex flex-col gap-y-5 text-center md:w-[90%] md:text-left'>
          <h1
            className={`${amatic.className} hidden font-bold uppercase leading-tight text-[#37373f] md:flex md:text-6.5xl`}>
            Belajar robotika dan <br /> pemrograman <br /> dengan cara yang
            lebih <br /> seru
          </h1>
          <h1
            className={`${amatic.className} flex px-5 text-3xl font-bold uppercase leading-tight text-[#37373f] md:hidden`}>
            Belajar robotika dan pemrograman dengan cara yang lebih seru
          </h1>
          <p className={`${openSans.className} text-base text-[#4f4f5a]`}>
            "Pelan namun pasti, seru namun serius" adalah cara belajar di
            RoboKarsa
          </p>
        </header>
        <button className='w-fit self-center rounded-full bg-blue-500 px-6 py-3 text-base text-white duration-200 hover:bg-blue-600 active:scale-95 md:self-start'>
          <p>Coba Gratis</p>
        </button>
      </div>
    </section>
  )
}

export default Hero
